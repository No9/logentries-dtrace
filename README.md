#logentries-dtrace

This is a library to send the output of DTrace scripts to [Logentries](https://logentries.com). In order to utilise the library you will need to create an account on Logentries. (They are available from free!) 

## Prerequisites

A [Logentries](https://logentries.com) account

## Install 

```bash
$ npm install logentries-dtrace
```

## Usage 
```
var logdtrace = require("logentries-dtrace")('LOGENTRIES_TOKEN', locationofdtracefile, interval)
```

See examples folder for more details

## Running The HTTP Example

As root

```bash
# cd node_modules/logentries-dtrace/examples
# node http-server
```

You should now be able to open the a default website on your server 
http://localhost/

Create a logfile on logentries of source_type `Token TCP` and add the token printed in green in the .js file you wish to run.
You should now be able to run D-Trace Against Log Entries

```
# node singlelatency.js
```

And then with apache benchmark installed.

```bash
$ ab -n10000 http://localhost
```
