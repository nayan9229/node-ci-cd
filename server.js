const express = require('express');
const port = process.env.SERVER_PORT || 8080;

var app = express();

app.get('/', function(req, res) {
    res.send({status:'APIs are running.'});
});

app.get('/ping', function(req, res) {
    res.send('Pong');
});

app.get('/pong', function(req, res) {
    res.send('Ping');
});

app.listen(port , function() {
    console.log('listening on port ' + port);
});