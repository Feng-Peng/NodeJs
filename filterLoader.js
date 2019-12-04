// 读取filter目录下的所有拦截器文件
const fs = require('fs');
const globalConfig = require('./conf');

const filterSet = [];
globalConfig["filter_path"] = globalConfig["filter_path"].replace(/[\r\n]/, '');
const files = fs.readdirSync(globalConfig["filter_path"]);
for (let i = 0; i < files.length; i++) {
    let temp = require('./' + globalConfig["filter_path"] + '/' + files[i]);
    filterSet.push(temp);
}

module.exports = filterSet;