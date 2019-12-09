const url = require('url');
const globalConfig = require('../conf');

function loginFilter(request, response) {
    const pathname = url.parse(request.url).pathname;
    if (pathname == '/login.html' || pathname == '/login' || isStaticRequest(pathname)) {
        return true;
    }
    if (request.headers.cookie) {
        const cookies = request.headers.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            if (cookies[i].split('=')[0].trim() == 'id') {
                return true;
            }
        }
    }
    response.writeHead(302, { "location": "/login.html" });
    response.end();
    return false;
}

// 判断请求的是否是静态文件
function isStaticRequest(pathname) {
    for (let i = 0; i < globalConfig.static_file_type.length; i++) {
        const temp = globalConfig.static_file_type[i];
        if (temp == '.html') {
            continue;
        }
    }
    return false;
}

module.exports = loginFilter;