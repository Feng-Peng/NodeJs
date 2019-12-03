const fs = require('fs');
let globalConf = {};
const conf = fs.readFileSync('server.conf')
const confs = conf.toString().split('\n');
for (let i = 0; i < confs.length; i++) {
    const key = confs[i].split('=')[0];
    const value = confs[i].split('=')[1];
    globalConf[key] = value;
}
if (globalConf.static_path_type) {
    globalConf.static_file_type = globalConf.static_path_type.split('|');
} else {
    throw new Error('配置文件异常，缺少：static_file_type');
}
module.exports = globalConf;