#!/bin/bash

echo "Install dependencies:"
npm i
echo "Dependencies installed."

echo "Run unit tests:"
npm run test -- --bail

if [ $? -ne 0 ]; then
  echo "Unit test failed - Build canceled!"
  exit 1
else
  echo "Unit tests done."
  echo "Run build:"
  npm run build:prod
  echo "Build done."

  read -p "Start local http-server (y/N)? " start_server

    if [ "$start_server" = "y" ] || [ "$start_server" = "Y" ]; then
      echo "starting http_server"
      cd "dist/fibonacci-uhr/browser"
      http-server . &
      SERVER_PID=$!

      sleep 6
      echo -en '\n'
      echo -en '\n'
      echo -en '\n'
      read -p "Run E2E Tests? (y/N)? " run_e2e

      if [ "$run_e2e" = "y" ] || [ "$run_e2e" = "Y" ]; then
        npm run e2e:prod
        echo "E2E done"
      fi

      echo -en '\n'
      read -p "Stop http-server? (y/N)? " stop_server
      if [ "$stop_server" = "y" ] || [ "$stop_server" = "Y" ]; then
        kill $SERVER_PID .
        echo "Server stopped"
      else
        echo "Server is up and running. This Script will end now."
        echo "You have to manage the http-server Process by your self."
      fi
    else
      echo "DONE!"
    fi
fi
