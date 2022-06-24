#!/bin/bash

echo postgraphile -c postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST/$POSTGRES_DB --schema $SCHEMA --default-role $DEFAULT_ROLE --port $PORT --host $HOST --cors --watch
postgraphile -c postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST/$POSTGRES_DB --schema $SCHEMA --default-role $DEFAULT_ROLE --port $PORT --host $HOST --cors --watch