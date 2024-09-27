// httpStaticFileClient.js
const http = require('http');

// Options for the HTTP request
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/script.js',  // Request the index page
    method: 'GET'
};

// Make the request
const req = http.request(options, (res) => {
    let data = '';

    // A chunk of data has been received
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received
    res.on('end', () => {
        console.log('Response received:');
        console.log(data);
    });
});

// Handle error
req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

// End the request
req.end();
