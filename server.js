const globalConf = require('./conf');
const fs = require('fs');
const net = require('net');
const server = net.createServer(); //创建服务器
server.listen(globalConf.port, '127.0.0.1'); //监听12306端口

server.on('listening', function () {
    console.log('服务器已启动');
});
// connection事件的回调函数的参数时socket对象，能够使用该对象的方法
server.on('connection', function (socket) {
    // socket调用了write方法之后会触发data事件
    socket.on('data', function (data) {
        // 此时的参数data.toString()得到的就是http请求的请求头，获取url中的参数地址
        const request = data.toString().split('\r\n');
        const url = request[0].split(' ')[1];

        try {
            // 从web文件夹中读取访问的文件
            const file = fs.readFileSync(globalConf.path + url);
            socket.write('HTTP/1.1 200OK\r\n\r\n');
            socket.write(file);
        } catch (e) {
            socket.write("HTTP/1.1 404NotFound\r\n\r\n<html><body><h1>404 Not Found</h1></body></html>")
        }
        socket.end();
    })
})