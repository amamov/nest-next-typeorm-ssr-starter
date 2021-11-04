#!/bin/sh

echo "Docker Image Version : " $1

docker build -t "<account>/<app-name>":$1 .
docker push "<account>/<app-name>":$1
docker rmi "<account>/<app-name>":$1
