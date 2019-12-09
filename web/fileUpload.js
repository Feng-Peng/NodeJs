const fs = require('fs');

const path = new Map();

function testFileUpload(request, response){
    console.log('=====');
    // post请求在request.on的data中获取
    request.on('data', function (data) {
        // 得到数据之后就会写到这个文件中，如果没有这个文件就会新建这个文件
        const fis = fs.createWriteStream('./file/asd.jpg');
        fs.write(data); // 上传的时data
        fis.end();
        response.end();
    })
}

path.set('/testFileUpload', testFileUpload)
module.exports.path = path;