const fs = require("fs");
const globalConfig = require("./conf");
globalConfig["log_path"] = globalConfig["log_path"].replace(/\r/, "");

function log(data) {
    // fs.writeFile(globalConfig["log_path"] + globalConfig["log_name"], data + '\n', { flag: "a" }, function () {});
    fs.appendFile(globalConfig["log_path"] + globalConfig["log_name"], data + '\n', function () { })
}

module.exports = log;