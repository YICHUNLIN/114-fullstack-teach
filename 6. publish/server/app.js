
var express = require('express');

var app = express();
// app.js

// 1. 引入 'http' 模組
const http = require('http');

// 2. 定義伺服器要監聽的通訊埠 (Port)
// 就像大樓的 3000 號房
const port = 3000;

// 3. 建立一個伺服器
// 每當有「請求(request)」進來，就執行這個函數
const server = http.createServer(app);

app.get('/', function(req, res){
  res.status(200).json({xx:'Hello world!!'})
})

// 4. 啟動伺服器，並監聽指定的 port
server.listen(port, function() {
  // 這段訊息只會顯示在「終端機」中
  console.log(`伺服器正在 http://localhost:${port} 上啟動...`);
  console.log('請打開你的瀏覽器並輸入網址');
});