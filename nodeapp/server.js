'use strict';

var path = require('path');
const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static(__dirname + '/View'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/service', (req, res) => {
    res.send('O python precisa de mim para terminar esta tarefa\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);