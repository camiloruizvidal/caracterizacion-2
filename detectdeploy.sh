#!/bin/bash

git fetch

if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]; then
  chmod +x deploy.sh
  ./deploy.sh
fi
