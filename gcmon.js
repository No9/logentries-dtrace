var sys = require('sys');
var fs = require('fs');
var libdtrace = require('../node-libdtrace/build/Release/dtrace');
var dtp = new libdtrace.Consumer();

var logentries = require('node-logentries');

var log = logentries.logger({
  token:'f4fd6588-d90b-43f2-b0e5-6a4a0ca4defb'
});

var prog = fs.readFileSync(__dirname + '/gcmon.d','utf8'); 
dtp.strcompile(prog);
dtp.go();

setInterval(function () {
	dtp.consume(function (probe, rec) {
		if (rec)
				{
          //127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326
					log.log("info", rec.data.toString());
					console.log(rec.data.toString());
 				}
	});
}, 1000);


