var sys = require('sys');
var libdtrace = require('../node-libdtrace/build/Release/dtrace');
var dtp = new libdtrace.Consumer();

var logentries = require('node-logentries');

/*
var log = logentries.logger({
  userkey:'304b86d2-096c-476c-8ac4-46cdbdf73f8d',
  host:'OpenIndiana',
  log:'http-dtrace',
  levels: {
    info:0, meh:1, hmm:2, notgood:3, ohnoes:4, omgwtfbbq:5
  }
});
*/
var log = logentries.logger({
  token:'f4fd6588-d90b-43f2-b0e5-6a4a0ca4defb'
});

//log.info('libdtrace test')

var prog = 'BEGIN { trace("hello world"); }\n'

dtp.strcompile(prog);
dtp.go();

dtp.consume(function (probe, rec) {
	if (rec)
		{
		sys.puts('Started');
		log.log("info", {messagetype:"httprequest", messagecontent:rec.data})
		sys.puts(rec.data);
				
		}
});

