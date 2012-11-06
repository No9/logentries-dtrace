dtrace -n node*:::http-server-request{
    printf(.%s of %s from %s\n., args[0]->method,
        args[0]->url, args[1]->remoteAddress)}

 dtrace -n http-server-request.{@[args[1]->remoteAddress] = count()}.

 dtrace -n gc-start.{self->ts = timestamp}. \
    -n gc-done./self->ts/{@ = quantize(timestamp - self->ts)}
