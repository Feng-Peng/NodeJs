const path = new Map();

function getData(request, response){
    response.writeHead(200);
    response.write('hello');
    response.end();
}
path.set('/getData',getData);
function getData2(request, response){

}
path.set('getData2',getData);

module.exports.path = path;