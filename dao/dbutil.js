const mysql = require('mysql');
// 创建一个链接
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '4008238823',
    database: 'school'
})

module.exports = connection;