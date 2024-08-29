docker build -t thedockermaster001/blckch .
docker push thedockermaster001/blckch:latest
kubectl apply -f blckch-deployment.yaml
echo '---in hosts add 127.0.0.1 my-blckch.local---'