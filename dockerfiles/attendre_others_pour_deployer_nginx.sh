#!/usr/bin/env bash
# wait-for-it.sh
# Usage: ./wait-for-it.sh host:port -- command_to_run

set -e

HOSTPORT="$1"
shift
COMMAND="$@"

HOST=$(echo $HOSTPORT | cut -d':' -f1)
PORT=$(echo $HOSTPORT | cut -d':' -f2)

echo "Waiting for $HOST:$PORT..."

# Boucle jusqu'à ce que le port soit joignable
while ! nc -z $HOST $PORT; do
  sleep 1
done

echo "$HOST:$PORT is available. Starting command..."
exec $COMMAND
