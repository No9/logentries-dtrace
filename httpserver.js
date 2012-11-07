var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(80, '37.153.97.39');
console.log('Server running at http://37.153.97.39/');
