const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

// Create an HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Serve the form HTML file when the root URL is accessed
    if (parsedUrl.pathname === '/' && req.method === 'GET' && !parsedUrl.query.name) {
        const formPath = path.join(__dirname, 'index.html');
        fs.readFile(formPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Internal Server Error</h1>');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    // Handle the form submission and generate dynamic response
    else if (parsedUrl.pathname === '/' && parsedUrl.query.name && parsedUrl.query.age) {
        const name = parsedUrl.query.name;
        const age = parsedUrl.query.age;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1>Hello, ${name}!</h1><p>Your age is ${age}.</p>`);
    } else {
        // Handle 404 errors for invalid routes
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
