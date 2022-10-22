#!/bin/bash
#npx prettier --check .    # Ejecuto el prettier para verificar el orden del codigo
#npx prettier --write .    # Ejecuto el prettier para ordenar el codigo

docker-compose down
git fetch
git stash
git reset --hard origin/main
git stash pop
docker-compose build
docker-compose up -d
