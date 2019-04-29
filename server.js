const express = require('express');
const port = process.env.SERVER_PORT || 8080;

var app = express();

app.get('/', function(req, res) {
    res.send({status:'APIs are running.'});
});

app.get('/ping', function(req, res) {
    res.send({message:'PONG'});
});

app.get('/pong', function(req, res) {
    res.send({message:'PING'});
});

app.get('/whoiami', function(req, res) {
    res.send({message:'I am express server node application'});
});

app.listen(port , function() {
    console.log('listening on port ' + port);
});