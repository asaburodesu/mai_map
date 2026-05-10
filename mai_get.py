# -*- coding: utf-8 -*-
import json
import re
import time
import unicodedata

import requests
from bs4 import BeautifulSoup
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry


GAME_ID = 96
BASE_URL = f"https://location.am-all.net/alm/location?gm={GAME_ID}&ct=1000&at="
DETAIL_URL_BASE = f"https://location.am-all.net/alm/shop?gm={GAME_ID}&astep=0&"
PREFECTURE_COUNT = 47
ZERO_COORDINATE = ("0.0", "0.0")
PREFECTURES = (
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
)

PREFECTURE_RE = re.compile(r"「(.+?)」")
SID_RE = re.compile(r"sid=\d+")
LOCATION_RE = re.compile(r"@([^&\"']+)")

HEADER = [
    "タイムスタンプ",
    "カテゴリ",
    "画像",
    "緯度",
    "経度",
    "スポット名",
    "紹介文",
    "Instagram",
    "Twitter",
    "公式サイト",
    "Facebook",
]


def create_session():
    retry = Retry(
        total=3,
        connect=3,
        read=3,
        backoff_factor=1,
        status_forcelist=(429, 500, 502, 503, 504),
        allowed_methods=("GET",),
    )
    adapter = HTTPAdapter(max_retries=retry)
    session = requests.Session()
    session.headers.update({"User-Agent": "chumap/1.0"})
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    return session


def load_json_file(path):
    for encoding in ("utf-8", "utf-8-sig", "cp932"):
        try:
            with open(path, "r", encoding=encoding) as file:
                return json.load(file)
        except FileNotFoundError:
            return None
        except UnicodeDecodeError:
            continue
        except json.JSONDecodeError as exc:
            print(f"既存データのJSON解析に失敗: {path}: {exc}")
            return None

    print(f"既存データの文字コード判定に失敗: {path}")
    return None


def load_previous_rows():
    for path in ("public/data.json", "data.json"):
        data = load_json_file(path)
        if not data:
            continue

        rows = data.get("values", [])[1:]
        if rows:
            print(f"既存データを読み込み: {path} ({len(rows)}件)")
            return rows

    return []


def is_zero_coordinate(lat, lon):
    return str(lat).strip() in ("", "0", "0.0") and str(lon).strip() in ("", "0", "0.0")


def cache_key(name, address):
    return f"{name}\n{address}"


def add_coordinate_cache(cache, detail_url, name, address, lat, lon):
    if is_zero_coordinate(lat, lon):
        return

    coordinate = (str(lat), str(lon))
    if detail_url:
        cache[detail_url] = coordinate
    if name and address:
        cache[cache_key(name, address)] = coordinate


def build_coordinate_cache(rows):
    cache = {}
    for row in rows:
        if len(row) < len(HEADER):
            continue

        lat = row[3]
        lon = row[4]
        name = row[5]
        address = row[6]
        detail_url = row[9]
        add_coordinate_cache(cache, detail_url, name, address, lat, lon)

    return cache


def build_rows_by_prefecture(rows):
    rows_by_prefecture = {}
    for row in rows:
        if len(row) < len(HEADER):
            continue

        prefecture = row[1]
        if prefecture:
            rows_by_prefecture.setdefault(prefecture, []).append(row)

    return rows_by_prefecture


def row_key(row):
    if len(row) >= 10 and row[9]:
        return row[9]
    if len(row) >= 7:
        return cache_key(row[5], row[6])
    return None


def append_previous_rows(values, rows, seen_rows, reason):
    appended = 0
    for row in rows:
        key = row_key(row)
        if key and key in seen_rows:
            continue

        values.append(row)
        if key:
            seen_rows.add(key)
        appended += 1

    if appended:
        print(f"{reason}: 既存データを保持 ({appended}件)")


def normalize_address(address):
    return unicodedata.normalize("NFKC", address)


def parse_gsi_response(data):
    if not isinstance(data, list) or not data:
        return None

    coordinates = data[0].get("geometry", {}).get("coordinates", [])
    if len(coordinates) < 2:
        return None

    lon, lat = coordinates[:2]
    return str(lat), str(lon)


def parse_nominatim_response(data):
    if not isinstance(data, list) or not data:
        return None

    lat = data[0].get("lat")
    lon = data[0].get("lon")
    if lat is None or lon is None:
        return None

    return str(lat), str(lon)


def request_json(session, url, params, timeout):
    response = session.get(url, params=params, timeout=timeout)
    response.raise_for_status()
    return response.json()


def geocode_address(address, session):
    """住所から座標を取得する。失敗時はNoneを返して呼び出し側で継続する。"""
    normalized = normalize_address(address)
    providers = [
        (
            "国土地理院",
            "https://msearch.gsi.go.jp/address-search/AddressSearch",
            {"q": normalized},
            (5, 30),
            parse_gsi_response,
        ),
        (
            "Nominatim",
            "https://nominatim.openstreetmap.org/search",
            {"q": normalized, "format": "json", "limit": 1, "countrycodes": "jp"},
            (5, 20),
            parse_nominatim_response,
        ),
    ]

    for provider_name, url, params, timeout, parser in providers:
        try:
            data = request_json(session, url, params=params, timeout=timeout)
            coordinate = parser(data)
            if coordinate:
                print(f"  -> {provider_name}で取得: {coordinate[0]}, {coordinate[1]}")
                return coordinate

            print(f"  {provider_name}結果なし")
        except requests.RequestException as exc:
            print(f"  {provider_name}API失敗: {exc}")
        except (ValueError, KeyError, IndexError, TypeError) as exc:
            print(f"  {provider_name}レスポンス解析失敗: {exc}")

        time.sleep(1)

    return None


def fetch_soup(session, url):
    response = session.get(url, timeout=(5, 30))
    response.raise_for_status()
    return BeautifulSoup(response.text, "html.parser")


def extract_prefecture(soup):
    headers = soup.find_all("h3")
    if len(headers) < 2:
        return None

    match = PREFECTURE_RE.search(headers[1].get_text(strip=True))
    if not match:
        return None

    return match.group(1)


def extract_detail_url(tempo):
    match = SID_RE.search(str(tempo.find(class_="store_bt")))
    if not match:
        return ""

    return DETAIL_URL_BASE + match.group(0)


def extract_coordinates(tempo):
    location = str(tempo.find(class_="store_map")).replace("\n", "")
    match = LOCATION_RE.search(location)
    if not match:
        return ZERO_COORDINATE

    parts = match.group(1).split(",")
    if len(parts) < 2:
        return ZERO_COORDINATE

    return parts[0], parts[1]


def get_text(tempo, class_name):
    element = tempo.find(class_=class_name)
    if not element:
        return ""

    return element.get_text(strip=True)


def resolve_missing_coordinate(name, address, address2, detail_url, cache, session):
    cached_coordinate = cache.get(detail_url) or cache.get(cache_key(name, address2))
    if cached_coordinate:
        print(f"  -> 既存データから取得: {cached_coordinate[0]}, {cached_coordinate[1]}")
        return cached_coordinate

    coordinate = geocode_address(address, session)
    if coordinate:
        add_coordinate_cache(cache, detail_url, name, address2, coordinate[0], coordinate[1])
        return coordinate

    print("  -> 座標取得できず。0.0, 0.0 のまま続行します")
    return ZERO_COORDINATE


def build_row(tempo, prefecture, coordinate_cache, session):
    name = get_text(tempo, "store_name")
    address = get_text(tempo, "store_address")
    if not name or not address:
        return None

    address2 = address.replace(prefecture, "", 1)
    detail_url = extract_detail_url(tempo)
    twitter = "https://twitter.com/intent/tweet?text=" + address + "%2C" + name
    lat, lon = extract_coordinates(tempo)

    if is_zero_coordinate(lat, lon):
        print(f"座標なし: {name} ({address}) -> ジオコーディング中...")
        lat, lon = resolve_missing_coordinate(
            name,
            address,
            address2,
            detail_url,
            coordinate_cache,
            session,
        )

    add_coordinate_cache(coordinate_cache, detail_url, name, address2, lat, lon)

    return ["", prefecture, "", lat, lon, name, address2, "", twitter, detail_url, ""]


def scrape_locations():
    session = create_session()
    previous_rows = load_previous_rows()
    coordinate_cache = build_coordinate_cache(previous_rows)
    rows_by_prefecture = build_rows_by_prefecture(previous_rows)

    values = [HEADER]
    seen_rows = set()
    for i in range(PREFECTURE_COUNT):
        page_url = BASE_URL + str(i)
        fallback_prefecture = PREFECTURES[i] if i < len(PREFECTURES) else ""
        print(i)
        print(page_url)

        try:
            soup = fetch_soup(session, page_url)
        except requests.RequestException as exc:
            print(f"ページ取得失敗: {page_url}: {exc}")
            append_previous_rows(
                values,
                rows_by_prefecture.get(fallback_prefecture, []),
                seen_rows,
                f"{fallback_prefecture}の取得失敗",
            )
            continue

        prefecture = extract_prefecture(soup)
        if not prefecture:
            print(f"都道府県名を取得できませんでした: {page_url}")
            append_previous_rows(
                values,
                rows_by_prefecture.get(fallback_prefecture, []),
                seen_rows,
                f"{fallback_prefecture}の解析失敗",
            )
            continue

        for tempo in soup.find_all("li"):
            try:
                row = build_row(tempo, prefecture, coordinate_cache, session)
            except Exception as exc:
                print(f"店舗データ解析失敗: {exc}")
                continue

            if row:
                values.append(row)
                key = row_key(row)
                if key:
                    seen_rows.add(key)

    if len(values) == 1 and previous_rows:
        print("新規データが取得できなかったため、既存データを保持します")
        values.extend(previous_rows)

    return {
        "range": "スポットデータ",
        "majorDimension": "ROWS",
        "values": values,
    }


def write_data(data):
    with open("data.json", "w", encoding="utf-8", newline="\n") as file:
        json.dump(data, file, indent=4, ensure_ascii=False)
        file.write("\n")


def main():
    data = scrape_locations()
    write_data(data)
    print(f"取得件数: {len(data['values']) - 1}")


if __name__ == "__main__":
    main()
