#!/bin/sh

name=revitron/charts

docker ps -q --filter ancestor="$name:latest" | xargs docker stop
docker ps -a -q --filter ancestor="$name:latest" | xargs docker rm 
docker rmi $name:latest

docker build -t $name .