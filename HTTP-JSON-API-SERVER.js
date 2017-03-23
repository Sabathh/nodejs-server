var http = require('http');
var fs = require ('fs');
var bl = require('bl');
var date = new Date();

var server = http.createServer(handleRequest);  
    server.listen(process.argv[2]);  
     
     
function handleRequest(req, res)
{
    res.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(process.argv[3]).pipe(res);
}

http.get(process.argv[2], function (response) {
        response.pipe(bl(function (err, data) { 
        if (err) return console.log(err);
        })); 
    })