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
    http-server
  else
    echo "DONE!"
  fi
fi
