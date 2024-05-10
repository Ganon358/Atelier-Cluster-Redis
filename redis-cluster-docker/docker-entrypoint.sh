#!/bin/sh

if [ "$1" = 'redis-cluster' ]; then
    sleep 10
    echo "yes" | ruby /redis/src/redis-trib.rb create --replicas 0 127.0.0.1:7000 127.0.0.1:7001 127.0.0.1:7002
    echo "DONE"
else
  exec "$@"
fi
