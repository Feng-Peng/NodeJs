const path = new Map();
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
function getData2(request, response) {

}
path.set('getData2', getData);

module.exports.path = path;