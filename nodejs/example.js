const app = require('http').createServer(handler),
    fs = require('fs');
const PORT = 1337;


//サーバ立ち上げ
app.listen(PORT,() => {
  console.log(`Server running at PORT:${PORT}/`);
});

//接続したら実行されるハンドラ
function handler(req, res){
  fs.readFile(__dirname+'/index.html', (err, data) => {
      if(err){
          res.writeHead(500);
          return res.end('ERROR');
      }
      res.writeHead(200,{'Content-Type': 'text/html'});
      res.write(data);
      res.end();
  });
}