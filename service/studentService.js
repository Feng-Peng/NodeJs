const queryStudent = require('../dao/studentDao');

function queryAllStudent(success) {
    queryStudent.queryAllStudent(success);
}

module.exports = {
    "queryAllStudent": queryAllStudent
}