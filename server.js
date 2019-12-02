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
        // 此时的参数data.toString()得到的就是http请求的请求头，获取url中的参数地址
        const request =  data.toString().split('/r/n');
        const url = request[0].split(' ')[1];
        // 向浏览器回复信息时需要带有请求头，请求头与请求体之间有两个\r\n，请求头之间有一个\r\n
        socket.write("HTTP 200OK\r\nContent-type:text/html\r\nService:DWS/1.1\r\n\r\n<html><body><h1>hello browser</h1></body></html>")
    })
})