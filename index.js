var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8019);


function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        aa: date.getFullYear().toString().slice(-2),
        aaaa: date.getFullYear()
    }

    return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
}
