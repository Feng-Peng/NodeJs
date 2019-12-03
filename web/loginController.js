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
    const params = url.parse(request.url, true).query;
    studentService.queryStudentByStuNum(params.stuNum, result => {
        let res = '';
        if (result == null || result.length == 0) {
            res = 'Fail';
        } else {
            if (result[0].pwd == params.password) {
                res = 'OK';
            } else {
                res = 'Fail'
            }
        }
        response.write(res);
        response.end();
    })
}
path.set('/login', login);

module.exports.path = path;