const http = require('http');

const listener = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello world ...');
};

const server = http.createServer(listener);

// Start the server on port 3000
server.listen(3000);
