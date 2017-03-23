var fs = require('fs');


fs.readdir (process.argv[2],
            function filterList (err, list)
            {
                if (err) 
                {
                    return console.log(err);
                }
                var filteredList = list.filter(function (s) { return s.match('.' + process.argv[3]) }).join('\n');
                console.log(filteredList);
            });
            

