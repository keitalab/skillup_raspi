const app = require('http').createServer(handler),
    fs = require('fs');


//サーバ立ち上げ
app.listen(1337);

//接続したら実行されるハンドラ
function handler(req, res){
    fs.readFile(__dirname+'/index.html', (err, data) => {
        if(err){
            res.writeHead(500);
            return res.end('ERROR');
        }
        res.writeHead(200);
        res.write(data);
        res.end();
    });
}
