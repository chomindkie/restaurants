# Search Restaurants #


## 1. For Start Web (Frontend and Backend) with Docker Compose 

[Install docker](https://docs.docker.com/get-docker/)

```shell
$ docker-compose build
$ docker-compose up -d
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see. 

## 2. For run manual each service 
### ⭐️Frontend [restaurants-app](https://github.com/chomindkie/restaurants-app/)<br/>
```shell
$ git clone git@github.com:chomindkie/restaurants-app.git
```

#### For start [restaurants-app](https://github.com/chomindkie/restaurants-app) :dash:
Please run following command
```bash
npm run production
```

---
### ⭐️Backend [restaurants-service](https://github.com/chomindkie/restaurants-service)<br/>
```shell
$ git@github.com:chomindkie/restaurants-service.git
```

#### For start [restaurants-service](https://github.com/chomindkie/restaurants-service) :dash:

#### 1. Install Go
```bash
brew install go@1.18
```
make sure that you use go version 1.18
```bash
go version
```

#### 2. Start Service 
Run with this command</br>
_Note: This service require_ ***redis*** </br>
```bash
sh ./initialize.sh
```
 **OR**

```bash
make initialize
```

**OR**

```bash
go mod tidy
go get -v
go run main.go
```