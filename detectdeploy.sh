#!/bin/bash

git fetch

if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]; then
  echo "La rama main ha tenido cambios en el repositorio remoto."
else
  echo "La rama main no ha tenido cambios en el repositorio remoto."
fi