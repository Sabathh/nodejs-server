var http = require('http');
var fs = require ('fs');

var server = http.createServer(handleRequest);  
    server.listen(process.argv[2]);  
     
     
function handleRequest(req, res)
{
    res.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(process.argv[3]).pipe(res);
}
