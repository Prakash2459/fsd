// httpDynamicClient.js
const http = require('http');

// Define the options with a dynamic query for the GET request
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/greet?name=John',  // Replace "John" with any name
    method: 'GET'
};

// Make the request
const req = http.request(options, (res) => {
    let data = '';

    // Gather the data from the response
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Once the response is complete, log the response content
    res.on('end', () => {
        console.log('Response:', data);
    });
});

// End the request
req.end();
