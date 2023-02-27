# Search Restaurants #


## 1. For Start Web (Frontend and Backend) with Docker Compose 

[Install docker](https://docs.docker.com/get-docker/)

```shell
$ docker-compose build
$ docker-compose up -d
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see. 

## 2. For run manual each service 
### ⭐️Frontend [restaurants-app](https://bitbucket.org/chomind/restaurants-app/src/master/)<br/>
```shell
$ git clone git@bitbucket.org:chomind/restaurants-app.git
```

#### For start [restaurants-app](https://bitbucket.org/chomind/restaurants-app/src/master/) :dash:
Please run following command
```bash
npm run production
```

---
### ⭐️Backend [restaurants-service](https://bitbucket.org/chomind/restaurants-service/src/master/)<br/>
```shell
$ git clone git@bitbucket.org:chomind/restaurants-service.git
```

#### For start [restaurants-service](https://bitbucket.org/chomind/restaurants-service/src/master/) :dash:

#### 1. Install Go
```bash
brew install go@1.18
```
make sure that you use go version 1.18
```bash
go version
```

#### 2. Start Service 
cd to project and run with this command</br>
>note: This service require redis </br>
```bash
sh ./initialize.sh
```
 **OR**

 ```bash
make initialize
```

**OR** </br>
```
go mod tidy
go get -v
go run main.go
```