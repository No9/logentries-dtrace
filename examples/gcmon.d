node*:::gc-start
{
    self->ts = timestamp;
}
    
node*:::gc-done
{
    printf("Garbage Collection - [%Y] - %d",
              walltimestamp, 
              timestamp - self->ts);
              self->ts = 0
}
