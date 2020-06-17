#!/bin/bash

IMAGENAME=microservice
PORT=8001

echo "Building $IMAGENAME docker image"
docker build -t $IMAGENAME .

# lists docker images
docker images

echo "Running docker image on port:$PORT"
docker run -p $PORT:3000 $IMAGENAME