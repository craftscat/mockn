# mockn
ローカルで動かせるAPIテスト用のモックサーバー

## 必要条件
以下がインストールされていること。
- node
- yarn

## インストールと起動
```shell
$ yarn install
$ node sever.js
```
「JSON Sever is running」と表示されたら成功。  
起動後はログを流し続ける。`Ctrl + C`で終了。

## エンドポイントの追加
### 1. `./db.json`に欲しいレスポンスを記載。
```json:
{
  "エンドポイント名": {
    "パラメータ": "値",
    "パラメータ2": "値"
  }
}
```

### 2. `./server.js`にroutingを記載。
```javascript
// routing list 
server.use(jsonServer.rewriter({
  "/v1/sign_up": "/sign_up",
  "/v1/sign_up_e": "/sign_up_e",
  "/v1/追加したエンドポイント名": "/追加したエンドポイント名"
}))
```
環境変数(.env)の設定をして、アプリ内では`API_BASE_URL + path`みたいな形で呼び出しておけば、
- 開発中: http://localhost:3030
- APIデプロイ後: デプロイ先のURL

みたいな形で変更できるので良さげ。

## ライセンス
- MIT-Licence
