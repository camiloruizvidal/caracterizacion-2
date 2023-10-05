#!/bin/bash

# Obtener el número de commits en la rama main
commit_count=$(git rev-list --count main)

# Comprobar si el número de commits ha cambiado desde la última vez
if [ -f last_commit_count.txt ]; then
  last_count=$(cat last_commit_count.txt)
  if [ "$commit_count" -ne "$last_count" ]; then
    echo "La rama main ha tenido cambios."
    # Realiza las acciones que deseas realizar cuando la rama main ha cambiado
    # Por ejemplo, ejecuta un despliegue, notifica, etc.
  else
    echo "La rama main no ha tenido cambios desde la última vez."
  fi
fi

# Guardar el número de commits actual para futuras comprobaciones
echo "$commit_count" > last_commit_count.txt
