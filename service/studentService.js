const queryStudent = require('../dao/studentDao');

function queryAllStudent(success) {
    queryStudent.queryAllStudent(success);
}

function queryStudentByStuNum(stuNum, success) {
    queryStudent.queryStudentByStuNum(stuNum, success);
}

module.exports = {
    "queryAllStudent": queryAllStudent,
    "queryStudentByStuNum": queryStudentByStuNum
}