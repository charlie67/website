echo $2 | docker login -u $1 --password-stdin
docker build . --file Dockerfile --tag website:$(date +%s)
docker push
