let {PythonShell} = require('python-shell');

//PythonShellのインスタンスを作成
let pyshell = new PythonShell('sendData.py');  

//pythonのコンソール出力データを受け取ってnodeのコンソール出力として出力
pyshell.on('message', (data) => {
  console.log(data);
});
