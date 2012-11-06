var sys = require('sys');
var fs = require('fs');
var libdtrace = require('../node-libdtrace/build/Release/dtrace');
var dtp = new libdtrace.Consumer();

var logentries = require('node-logentries');

var log = logentries.logger({
  token:'f4fd6588-d90b-43f2-b0e5-6a4a0ca4defb'
});

var value = "testdata"
//var prog = 'BEGIN { trace("{\'helloworld\':\'' + value + '\'}"); }\n'
var prog = fs.readFileSync(__dirname + '/reqmon.d','utf8'); 
dtp.strcompile(prog);
dtp.go();

dtp.consume(function (probe, rec) {
	if (rec)
		{
		sys.puts('Started');
		log.log("info", {"messagetype":"httprequest", "messagecontent":rec.data})
		sys.puts(rec.data);
				
		}
});

