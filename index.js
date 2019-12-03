const globalConf = require('./conf');
const url = require('url');
const fs = require('fs');
const http = require('http');
const loader = require('./loader');

const server = http.createServer(function (request, response) {
    const pathname = url.parse(request.url).pathname;
    const param = url.parse(request.url, true).query;
    if (isStaticRequest(pathname)) {
        globalConf.path = globalConf.path.replace(/\r/, "");
        const file = fs.readFileSync(globalConf.path + pathname);
        try {
            response.writeHead(200);
            response.write(file);
            response.end();
        } catch (e) {
            response.writeHead(404);
            response.write('<html><body><h1>404 Not Found</h1></body></html>');
            response.end();
        }
    } else { // 访问的是动态资源
        if (loader.get(pathname) !== null) {
            loader.get(pathname)(request, response);
        } else {
            response.writeHead(404);
            response.write('<html><body><h1>404 Not Found</h1></body></html>');
            response.end();
        }
    }
}).listen(globalConf.port);

// 判断请求的是否是静态文件
function isStaticRequest(pathname) {
    for (let i = 0; i < globalConf.static_file_type.length; i++) {
        const temp = globalConf.static_file_type[i];
        if (pathname.indexOf(temp) == pathname.length - temp.length) {
            return true;
        }
    }
    return false;
}