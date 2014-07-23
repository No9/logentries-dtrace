
node*:::http-server-request
{
  remAddress = args[1]->remoteAddress;
  method = args[0]->method;
  remoteport = args[1]->remotePort;
  url = args[0]->url;
  rts = timestamp;
}

node*:::http-server-response
  /remoteport == args[0]->remotePort/
{
    /*127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326*/

    printf("IPAddress=%s Timestamp=[%Y] Method=%s URL=%s response_time=%d",
           remAddress, 
           walltimestamp,
           method,
           url,  
           (timestamp - rts) / 1000);
}


