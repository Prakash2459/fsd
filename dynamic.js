const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    
    if (parsedUrl.pathname === '/' && req.method === 'GET') {

        const name = parsedUrl.query.name || 'Guest'; 
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        res.end(`<h1>Hello, ${name}! Welcome to the Node.js HTTP Server.</h1>`);
    } else {


        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
