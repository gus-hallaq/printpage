const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.get('/', function (request, response) {
//     const filePath = path.join(__dirname, 'print.html');
//     response.sendFile(filePath);
// });

app.get('/', function (request, response) {
    const filePath = path.join(__dirname, 'printing.html');
    response.sendFile(filePath);
});

// app.get('/print', function (request, response) {
//     const filePath = path.join(__dirname, 'receipt.html');
//     response.sendFile(filePath);
// });

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});