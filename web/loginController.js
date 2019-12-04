const path = new Map();
const url = require('url');
const studentService = require('../service/studentService')

function getData(request, response) {
    studentService.queryAllStudent(function (result) {
        const resultArr = [];
        for (let i = 0; i < result.length; i++) {
            resultArr.push(result[i].name);
        }
        response.write(resultArr.toString());
        response.end();
    })
}
path.set('/getData', getData);
function login(request, response) {
    request.on('data', function (data) {
        const stuNum = data.toString().split('&')[0].split('=')[1];
        const password = data.toString().split('&')[1].split('=')[1];
        studentService.queryStudentByStuNum(stuNum, result => {
            let res = '';
            if (result == null || result.length == 0) {
                res = 'Fail';
                response.writeHead(302, { "location": "/error.html", "Set-Cookie": "id=" + result[0].id });
                response.end();
            } else {
                if (result[0].pwd == password) {
                    res = 'OK';
                    response.writeHead(302, { "location": "/main.html", "Set-Cookie": "id=" + result[0].id });
                    response.end();
                } else {
                    res = 'Fail';
                    response.writeHead(302, { "location": "/error.html", "Set-Cookie": "id=" + result[0].id });
                    response.end();
                }
            }
            // response.write(res);
            // response.end();
        })
    })
}
path.set('/login', login);

module.exports.path = path;