const connection = require('./dbutil');
const dbutil = require('./dbutil');

function queryAllStudent(success) {
    // 创建查询语句
    const querySql = 'select * from student';
    // 开启链接
    const connection = dbutil.createConnection();
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
    const querySql = 'select * from student where class = ? and age = ?;';
    const selectArr = [classNum, age];
    const connection = dbutil.createConnection();
    connection.query(querySql, selectArr, function (error, result) {
        if (error == null) {
            console.log(result)
        } else {
            console.log(error);
        }
    })
    connection.end();
}

function queryStudentByStuNum(stuNum, success) {
    const querySql = 'select * from student where stu_num = ?;';
    const connection = dbutil.createConnection();
    connection.query(querySql, stuNum, function (error, result) {
        if (error == null) {
            console.log(result);
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}

module.exports = {
    "queryAllStudent": queryAllStudent,
    "queryStudentByClassAndAge": queryStudentByClassAndAge,
    "queryStudentByStuNum": queryStudentByStuNum
}