var express = require('express');
var fs = require('fs');
var text =new Buffer(20);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    text.copy(fs.readFileSync('index.html',null),20);
    response.send(text.toString('utf8',0,text.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});