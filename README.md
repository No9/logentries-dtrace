#logentries-dtrace

This is a library to send the output of DTrace scripts to (www.logentries.com)[www.logentries.com]. In order to utilise the library you will need to create an account on Logentries. (They are available from free!) 

## Prerequisites

(A logentries account)[www.logentries.com]

gmake
 
```
# pkgin in gmake 
```
node-gyp

```
npm install node-gyp -g
```

## Install 
```
npm install logentries-dtrace
```

## Usage 
```
var logdtrace = require("logentries-dtrace")('LOGENTRIES_TOKEN', locationofdtracefile, interval)
```
See examples folder for more details

## Running The Examples

Install the simple http server to test monitoring

```
# git clone https://github.com/No9/logentries-dtrace.git
# cd ../logentries-dtrace/examples
# svcadm disable apache
# svcadm disable nginx
# svccfg import http-service-manifest.xml 
# svcadm enable logentries-dtrace-http-service
```

You should now be able to open the a default website on your server 
http://YOUR.IP.ADDRESS.HERE/

Now configure DTrace 

```
# wget https://raw.github.com/joyent/node/v0.8.11-release/src/node.d --no-check-certificate
```

And mv the file to /home/admin/dtrace

```
# mkdir /home/admin/dtrace
# mv node.d /home/admin/dtrace/node.d
```
Create a logfile on logentries of source_type `Token TCP` and add the token printed in green in the .js file you wish to run.
You should now be able to run D-Trace Against Log Entries

```
# node customprobe.js
```
or
```
# svccfg import customprobe-service-manifest.xml
# svccfg enable logentries-customprobe-service
```

And then from a machine with apache benchmark installed. 

```
# ab -n10000 http://YOUR.IP.ADDRESS.HERE
```
