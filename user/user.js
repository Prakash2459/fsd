const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',  
    user: 'root',       
    password: 'Mt4sr@2003', 
    database: 'user_management' 
});


db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});


const server = http.createServer((req, res) => {
  
    if (req.url === '/' && req.method === 'GET') {
        const formPath = path.join(__dirname, 'login.html');
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
    else if (req.url === '/login' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); 
        });

        req.on('end', () => {
            const parsedBody = parse(body);
            const username = parsedBody.username;
            const password = parsedBody.password;

            const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
            db.execute(query, [username, password], (err, results) => {
                if (err) {
                    console.error('Error querying the database:', err);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('<h1>500 - Internal Server Error</h1>');
                    return;
                }


                if (results.length > 0) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end('<h1>Login successful!</h1><p>Welcome!</p>');
                } else {
                    res.writeHead(401, { 'Content-Type': 'text/html' });
                    res.end('<h1>Login failed!</h1><p>Invalid username or password.</p>');
                }
            });
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
    
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
