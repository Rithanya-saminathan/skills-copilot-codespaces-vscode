// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var comments = [];

var server = http.createServer(function(req, res) {
    // Get file path
    var pathname = url.parse(req.url).pathname;
    // Read file
    fs.readFile(path.join(__dirname, pathname), function(err, data) {
        if (err) {
            // If the file does not exist, return 404
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.end('<h1>404 Not Found</h1>');
        } else {
            // If the file exists, return the file
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(data);
        }
    });
});

// Listen on port 3000
server.listen(3000, '