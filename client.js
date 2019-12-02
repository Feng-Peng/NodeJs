const net = require('net');
const socket = net.connect(12306, '127.0.0.1');

socket.on('connect', function () {
    console.log('已链接服务器');
})

socket.setTimeout(2000);
socket.on('timeout', function () {
    console.log('链接超时,即将断开链接');
    socket.end(); //关闭链接
})

socket.write('hello server');
// server调用write方法之后会触发socket的data事件
socket.on('data', function (data) {
    console.log(data.toString());
})
// socket调用end方法之后，close事件就会触发
socket.on('close', function () {
    console.log('链接已关闭');
})