# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup
import re
import json
import time

def geocode_address(address):
    """住所から座標を取得する（国土地理院API使用）"""
    # 全角数字・記号を半角に変換
    zen = "０１２３４５６７８９ー−"
    han = "0123456789--"
    table = str.maketrans(zen, han)
    normalized = address.translate(table)

    try:
        # 国土地理院のジオコーディングAPI
        geo_url = "https://msearch.gsi.go.jp/address-search/AddressSearch"
        params = {"q": normalized}
        res = requests.get(geo_url, params=params, timeout=10)
        data = res.json()
        if data:
            lon, lat = data[0]["geometry"]["coordinates"]
            print(f"  -> 国土地理院で取得: {lat}, {lon}")
            return str(lat), str(lon)
    except Exception as e:
        print(f"  国土地理院API失敗: {e}")

    try:
        # フォールバック: Nominatim
        geo_url = "https://nominatim.openstreetmap.org/search"
        params = {"q": normalized, "format": "json", "limit": 1}
        headers = {"User-Agent": "chumap/1.0"}
        time.sleep(1)
        res = requests.get(geo_url, params=params, headers=headers, timeout=10)
        data = res.json()
        if data:
            print(f"  -> Nominatimで取得: {data[0]['lat']}, {data[0]['lon']}")
            return data[0]["lat"], data[0]["lon"]
    except Exception as e:
        print(f"  Nominatim失敗: {e}")

    return "0.0", "0.0"

f = open('data.json', 'w',errors='ignore')

base_json_string = '{"range": "スポットデータ","majorDimension": "ROWS","values": []}'
base_json_dict = json.loads(base_json_string)

values = []
value = ["タイムスタンプ","カテゴリ","画像","緯度","経度","スポット名","紹介文","Instagram","Twitter","公式サイト","Facebook"]
values.append(value)

url = 'https://location.am-all.net/alm/location?gm=96&ct=1000&at='

for i in range(47):
    print(i)
    print(url+str(i))
    res = requests.get(url+str(i))
    soup = BeautifulSoup(res.text, "html.parser")
    todofuken_get = soup.find_all("h3")[1].text
    pattern = r'「(.+?)」'
    todofuken = re.search(pattern , todofuken_get)[0].replace('「', '').replace('」', '')
    find = soup.find_all("li")
    for tempo in find:
        name = tempo.find(class_="store_name").text
        address = tempo.find(class_="store_address").text
        address2 = address.replace(todofuken,'')
        location = str(tempo.find(class_="store_map")).replace('\n', '')
        detail = re.search('sid=\d+',str(tempo.find(class_="store_bt")).replace('\n', ''))[0]
        detailurl = "https://location.am-all.net/alm/shop?gm=96&astep=0&" + detail
        twitter = "https://twitter.com/intent/tweet?text=" + address + "%2C" + name
      
        pattern = '@.*&'
        result = re.findall(pattern, location)[0].replace('@','').replace('&','')
        ido = result.split(',')[0]
        keido = result.split(',')[1]

        if ido == "0.0" and keido == "0.0":
            print(f"座標なし: {name} ({address}) -> ジオコーディング中...")
            ido, keido = geocode_address(address)
            print(f"  -> 取得座標: {ido}, {keido}")

        value = ["",todofuken,"",ido,keido,name,address2,"",twitter,detailurl,""]
        values.append(value)

        
base_json_dict["values"] = values
final_json_string = json.dumps(base_json_dict, indent=4, ensure_ascii=False)
print(final_json_string)
f.writelines(final_json_string)
f.close()
