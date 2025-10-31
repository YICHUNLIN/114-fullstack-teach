// app.js

// 1. 引入內建的 'fs' (File System) 模組
const fs = require('fs');

// 2. 準備要寫入的內容
const content = "這是我用 Node.js 寫入的文字！";

// 3. 寫入檔案
// fs.writeFileSync('檔案名稱', '內容')
// 'sync' 代表「同步」執行，對新手比較好懂
try {
  fs.writeFileSync('note.txt', content);
  console.log('檔案 note.txt 已經成功建立！');
} catch (err) {
  console.error('寫入檔案時發生錯誤:', err);
}

// 4. 讀取檔案
try {
  const data = fs.readFileSync('note.txt', 'utf8');
  console.log('我讀到的內容是:', data);
} catch (err) {
  console.error('讀取檔案時發生錯誤:', err);
}
