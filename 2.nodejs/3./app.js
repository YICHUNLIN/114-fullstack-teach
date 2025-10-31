// app.js

// 1. 引入 'http' 模組
const http = require('http');

// 2. 定義伺服器要監聽的通訊埠 (Port)
// 就像大樓的 3000 號房
const port = 3000;

// 3. 建立一個伺服器
// 每當有「請求(request)」進來，就執行這個函數
const server = http.createServer(function (req, res) {
  
  // 'req' (Request): 存取所有進來的請求資訊 (例如 URL)
  // 'res' (Response): 用來回傳資料給瀏覽器

  // 設定回傳的標頭 (Header)，告訴瀏覽器這是 HTML
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
  
  // 決定回傳的內容 (根據不同的網址)
  if (req.url === '/') {
    res.end('<h1>這是我的首頁</h1> <p>歡迎來到 Node.js！</p>');
  } else if (req.url === '/about') {
    res.end('<h1>關於我們</h1> <p>這是一個用 Node.js 建立的網站。</p>');
  } else {
    res.writeHead(404); // 找不到頁面
    res.end('<h1>404 - 找不到頁面</h1>');
  }
});

// 4. 啟動伺服器，並監聽指定的 port
server.listen(port, function() {
  // 這段訊息只會顯示在「終端機」中
  console.log(`伺服器正在 http://localhost:${port} 上啟動...`);
  console.log('請打開你的瀏覽器並輸入網址');
});