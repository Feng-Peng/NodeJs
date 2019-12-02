const fs = require('fs');
let globalConf = {};
const conf = fs.readFileSync('server.conf')
const confs = conf.toString().split('\n');
for (let i = 0; i < confs.length; i++) {
    const key = confs[i].split('=')[0];
    const value = confs[i].split('=')[1];
    globalConf[key] = value;
}
module.exports = globalConf;