var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var currrentDate = new Date();
  var formattedDate = currrentDate.toDateString();
  res.end('Hello! Today is ' + formattedDate);
}).listen(8019);



