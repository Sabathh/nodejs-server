var fs = require('fs');
var lines = undefined;


function countNewLines (callback)
{
    fs.readFile(process.argv[2], 
                function doneReading(err, fileContents)
                        {
                            if (err) 
                            {
                                return console.log(err);
                            }
                            lines = fileContents.toString().split('\n').length - 1;
                            callback();
                        });
}

function returnResult()
{
    console.log (lines);
}

countNewLines(returnResult);
