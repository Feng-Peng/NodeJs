const net = require('net');
const server = net.createServer(); //创建服务器
server.listen(12306, '127.0.0.1'); //监听12306端口

server.on('listening', function () {
    console.log('服务器已启动');
});
// connection事件的回调函数的参数时socket对象，能够使用该对象的方法
server.on('connection', function (socket) {
    console.log('有新的链接');
    // socket调用了write方法之后会触发data事件
    socket.on('data', function (data) {
        console.log(data.toString());
        socket.write('hello client');
    })
    // socket调用end方法时候，socket的close事件就会触发
    socket.on('close', function () {
        console.log('客户端已关闭');
        server.close(); // 关闭服务器
    })
})