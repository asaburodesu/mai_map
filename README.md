# maimai設置店舗マップ

## このマップについて
作成者:[asaburodesu](https://twitter.com/asaburodesu)

## 更新頻度
毎日 7:30頃更新が入ります。

## ローカル開発

### 必要なもの
- Node.js 22
- Python 3（店舗データを自分でスクレイピングする場合のみ）

### 起動手順
```sh
npm ci              # 依存パッケージのインストール
npm start           # http://localhost:3000 で起動
```

店舗データ `public/data.json` は CI が毎日更新してコミットしているので、`git pull` で最新になります。

`npm start` は `src/config.json` から `.env` を生成します。
react-scripts 4 を Node.js 17 以降で動かすため、`npm start` には `--openssl-legacy-provider` を付けています。

### 店舗データをスクレイピングで作る場合
CI と同じく `mai_get.py` で `data.json` を生成できます（全都道府県を巡回するため時間がかかります）。
```sh
python -m venv .venv
.venv\Scripts\activate          # macOS / Linux: source .venv/bin/activate
pip install -r requirements.txt
python mai_get.py
move data.json public\          # macOS / Linux: mv data.json public/
```
