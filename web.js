var express = require('express');
var fs = require('fs');
var text =new Buffer(20);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    //text=fs.readFileSync('index.html',null);
    //response.send(text.toString('utf8',0,text.length));
    response.send(fs.readFileSync('index.html',null).toString('utf8',0,fs.readFileSync('index.html',null).length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});