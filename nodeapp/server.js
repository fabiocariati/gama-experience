'use strict';

var path = require('path');
var request = require('sync-request');
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
    var resp = request('GET', 'http://flaskapp:5000', {
        'headers': {
            'user-agent': 'example-user-agent'
        }
    });

    res.send(resp.getBody());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);