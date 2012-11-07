var http = require('http');
var d = require('dtrace-provider');

var dtp = d.createDTraceProvider("httpserver");
var p1 = dtp.addProbe("probe1", "char *");

dtp.enable(); 

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});i
  dtp.fire("probe1", function(p) { 
    return ["request fired", "some data"];
	});
  res.end('Hello World\n');
}).listen(80, '37.153.97.39');
console.log('Server running at http://37.153.97.39/');
