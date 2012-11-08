var sys = require('sys');
var fs = require('fs');
var libdtrace = require('logentries-node-libdtrace');
var dtp = new libdtrace.Consumer();
var logentries = require('node-logentries');

module.exports = function(logentriestoken, dfile, interval){

	var log = logentries.logger({
  	token:logentriestoken
	});

	var prog = fs.readFileSync(dfile,'utf8');
	dtp.strcompile(prog);
	dtp.go();

	setInterval(function () {
  	dtp.consume(function (probe, rec) {
    	if (rec){
       log.log("info", rec.data.toString());
    	}
		});
	}, interval);
}
                                    
