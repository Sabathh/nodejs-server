var net = require("net");

var date = new Date();
var fullTime;

var server = net.createServer(function (socket) {
                var year = date.getFullYear();  
                var month = date.getMonth() + 1;     
                var day = date.getDate();        
                var hour = date.getHours();  
                var minute = date.getMinutes();
                
                fullTime = pad(year,4) + "-" + pad(month,2) + "-" + pad(day,2) + ' ' + pad(hour,2) + ":" + pad(minute,2) + '\n';
                
                socket.write(fullTime);
                socket.end();
});

server.listen(process.argv[2], function () {console.log(fullTime);});

function pad(number, zeroes) {
    var lotsOfZeroes = '00000000000000000000';
    return (lotsOfZeroes + number.toString()).slice(-zeroes);
}