var fs = require('fs');
var file;
var string;
var i;
var newLineCounter = 0;

file = fs.readFileSync(process.argv[2]);

string = file.toString();

for (i = 0; i < file.length; i++)
{
    if (string[i] == '\n')
    {
        newLineCounter += 1;
    }
}

console.log(newLineCounter);

