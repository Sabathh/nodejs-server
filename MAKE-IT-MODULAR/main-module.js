
var filter_module = require('./filter-module.js');
var data;


filter_module (process.argv[2], process.argv[3],
                        function returnResult(err, data)
                        {
                            if (err) return console.log(err);
                            console.log (data.join('\n'));
                        });
                        



