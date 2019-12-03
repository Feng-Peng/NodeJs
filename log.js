const fs = require("fs");
const globalConfig = require("./conf");

console.log(globalConfig["log_path"] + globalConfig["log_name"]);
fs.writeFile(globalConfig["log_path"] + globalConfig["log_name"], 'asd', function () {
    console.log(123)
})