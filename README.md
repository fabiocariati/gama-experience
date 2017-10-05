https://kubernetes.io/docs/tutorials/stateless-application/hello-minikube/

```bash
kubectl config use-context minikube

docker build -t nodeapp-i .

docker tag flaskapp-i fabioariati/flaskapp
docker push fabioariati/flaskapp

kubectl run nodeapp --image=fabioariati/nodeapp --port=3000
kubectl expose deployment nodeapp --type=LoadBalancer
minikube service nodeapp
```
```bash
docker build -t flaskapp-i .

docker tag nodeapp-i fabioariati/nodeapp
docker push fabioariati/nodeapp

kubectl run flaskapp --image=fabioariati/flaskapp --port=5000
kubectl expose deployment flaskapp --type=LoadBalancer
minikube service flaskapp
```