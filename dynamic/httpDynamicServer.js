// httpDynamicServer.js
const http = require('http');
const url = require('url');

// Create the server
const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;

    // Check if the route is "/greet" and if there is a "name" query parameter
    if (req.url.startsWith('/greet') && queryObject.name) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello, ${queryObject.name}!`);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Please use /greet?name=YourName');
    }
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
