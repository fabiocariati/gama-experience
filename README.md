https://kubernetes.io/docs/tutorials/stateless-application/hello-minikube/

```bash
docker build -t nodeapp-i .
kubectl run nodeapp --image=fabioariati/nodeapp --port=3000
kubectl expose deployment nodeapp --type=LoadBalancer
minikube service nodeapp
```
```bash
docker build -t flaskapp-i .
kubectl run flaskapp --image=fabioariati/flaskapp --port=5000
kubectl expose deployment flaskapp --type=LoadBalancer
minikube service flaskapp
```