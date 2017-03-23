var number = 0;
var i;

for (i = 2; i < process.argv.length; i++) { 
    number +=  +process.argv[i];
}

console.log(number)