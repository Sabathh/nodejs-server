

module.exports = function (dir, ext, node )
{
    var fs = require('fs');
    fs.readdir (dir,
                function filterList (err, list)
                {
                    if (err) 
                    {
                        return node(err);
                    }
                    var data = list.filter(function (s) { return s.match('.' + ext) });
                    node(null, data);
                });
}
