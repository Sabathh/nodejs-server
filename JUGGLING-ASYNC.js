var bl = require('bl');
var http = require('http');

var results = [];
var countCallback = 0;

function printResults ()
{
    for (var i = 0; i < 3; i++)
    {
        console.log(results[i]);
    }
}

function getHttp (index)
{
    http.get(process.argv[2+index], function (response) {
        response.pipe(bl(function (err, data) { 
        if (err) return console.log(err);
        results[index] = data.toString();
        countCallback++;
        if (countCallback == 3)
        {
            printResults ();
        }
        })); 
    });
}

for (var i = 0; i < 3; i++)
{
    getHttp (i);
}