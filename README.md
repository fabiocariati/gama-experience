#### Repositório das imagens
https://hub.docker.com/u/fabioariati/

#### Criando as imagens e subindo os serviços
```bash
kubectl config use-context minikube
```
```bash
docker login
minikube start
```
 App node
```bash
docker build -t nodeapp-i .

docker tag nodeapp-i fabioariati/nodeapp
docker push fabioariati/nodeapp

kubectl run nodeapp --image=fabioariati/nodeapp --port=3000
kubectl expose deployment nodeapp --type=LoadBalancer
minikube service nodeapp
```
App python
```bash
docker build -t flaskapp-i .

docker tag flaskapp-i fabioariati/flaskapp
docker push fabioariati/flaskapp

kubectl run flaskapp --image=fabioariati/flaskapp --port=5000
kubectl expose deployment flaskapp --type=LoadBalancer
minikube service flaskapp
```

Criando os serviços via arquivo de configuração
```bash
kubectl create -f flaskapp/kube.yml
kubectl create -f nodeapp/kube.yml
```

Dashboard
```bash
minikube dashboard
```

Removendo os serviços
```bash
kubectl delete deployment flaskapp
kubectl delete service flaskapp

kubectl delete deployment nodeapp
kubectl delete service nodeapp

```