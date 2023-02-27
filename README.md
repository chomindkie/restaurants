# Search Restaurants #


## For Start Web (Frontend and Backend) with Docker Composte 

[Install docker](https://docs.docker.com/get-docker/)

```shell
$ docker-compose build
$ docker-compose up -d
```
Open http://localhost:3000 with your browser to see. 

## For run manual each service 

**Frontend** [restaurants-app](https://bitbucket.org/chomind/restaurants-app/src/master/)<br/>
```shell
$ git clone git@bitbucket.org:chomind/restaurants-app.git
```

**Backend** [restaurants-service](https://bitbucket.org/chomind/restaurants-service/src/master/)<br/>
```shell
$ git clone git@bitbucket.org:chomind/restaurants-service.git
```

### For First time to start project :dash: ##

#### 1. Install Go
   `brew install go@1.18`<br/>
   make sure that you use go version 1.18
`go version`
#### 2. Start Service 
cd to project and run with this command<br/>
`sh ./initialize.sh` **OR** `make initialize` 

**OR** run manual with following command
```
go mod tidy
go get -v
go run main.go
```