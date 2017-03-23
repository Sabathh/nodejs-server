var http = require('http');
var map = require('through2-map');  

var server = http.createServer(handleRequest);  
    server.listen(process.argv[2]);  
     
     
function handleRequest(req, res)
{
    req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase();
     })).pipe(res);  
}