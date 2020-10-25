const app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs'),
    {PythonShell} = require('python-shell');

let pyshell = new PythonShell('sendDht11Data.py');

//サーバ立ち上げ
app.listen(1337);

//接続したら実行されるハンドラ
function handler(req, res){
    fs.readFile(__dirname+'/sendData.html', (err, data) => {
        if(err){
            res.writeHead(500);
            return res.end('ERROR');
        }
        res.writeHead(200);
        res.write(data);
        res.end();
    });
}
//socket通信確立したら呼ばれる
io.sockets.on('connection', (socket) => {
    //pythonのprintから取得した値をsocketでdata_from_serverイベントにのせて送信
    pyshell.on('message', (data) => {
        io.sockets.emit('data_from_server', data);
    });
});
