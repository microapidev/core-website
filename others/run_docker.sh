#!/bin/bash

IMAGENAME=microservice
PORT=8001

echo "Building $IMAGENAME docker image"
docker build -t $IMAGENAME .

# lists docker images
docker images

docker stop micro-web || true
docker rm micro-web || true

echo "Running docker image on port:$PORT"
docker run -d -p $PORT:3000 --name micro-web $IMAGENAME
