const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse URL-encoded data (form data)
app.use(bodyParser.urlencoded({ extended: false }));

// Serve a simple login form
app.get('/', (req, res) => {
    res.send(`
        <h2>User Login</h2>
        <form action="/login" method="POST">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br><br>

            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br><br>

            <input type="submit" value="Login">
        </form>
    `);
});

// Handle login validation
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple hardcoded username and password for validation
    if (username === 'admin' && password === '1234') {
        res.send('<h3>Login successful!</h3>');
    } else {
        res.send('<h3>Invalid username or password!</h3>');
    }
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
