#logentries dtrace

## Build

You need to build libdtrace for node v0.8
This install assumes you are installing into /home/admin on a Joyent Machine as root. 

```
# cd /home/admin
# git clone https://github.com/No9/node-libdtrace.git
# git clone https://github.com/No9/logentries-dtrace.git
```
Install gmake
```
# pkgin in gmake
```

Then get the node native extensions build environment 

```
# npm install node-gyp -g
```

Then cd into the node-libdtrace folder created by git clone

```
# cd node-libdtrace
# node-gyp configure
# node-gyp build
```

Then copy the file in node-libdtrace/build/Release to the logentries-dtrace bin folder

```
# cp build/Release/dtrace.node ../logentries-dtrace/bin
```

Install the simple http server to test monitoring
```
# cd ../logentries-dtrace
# svcadm disable apache
# svcadm disable nginx
# svccfg import http-service-manifest.xml 
# svcadm enable logentries-dtrace-http-service
```

You should now be able to open the a default website on your server 
http://YOUR.IP.ADDRESS.HERE/

