const connection = require('./dbutil');

function queryAllStudent(success) {
    // 创建查询语句
    const querySql = 'select * from student';
    // 开启链接
    connection.connect();
    connection.query(querySql, function (error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            console.log(error);
        }
    })
    // 关闭链接
    connection.end();
}

function queryStudentByClassAndAge(classNum, age) {
    const querySql = 'select * from student where class = ? and age = ?';
    const selectArr = [classNum, age];
    connection.connect();
    connection.query(querySql, selectArr, function (error, result) {
        if (error == null) {
            console.log(result)
        } else {
            console.log(error);
        }
    })
    connection.end();
}

module.exports = {
    "queryAllStudent": queryAllStudent,
    "queryStudentByClassAndAge": queryStudentByClassAndAge
}