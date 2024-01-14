### To create an image
```docker build -t nameImage:tag . ```
    example: ```docker build -t hello-world-express:1.0 .```

### To run the container
```docker run -d -p 8000:4000 hello-world-express:1.0```
```docker run -d -p 8000:6000 hello-world-express:2.0```

### Stop all containers
```docker stop $(docker ps -a -q)```

### Inspect a container
```docker inspect container-id```

### Add image to docker hub
Link => [docker hub](https://hub.docker.com/)
```docker build -t dockerhubusername/hello-world-express:1.0 .```
To test => ```docker run -d -p 8000:4000 dockerhubusername/hello-world-express:1.0```
```docker push dockerhubusername/hello-world-express:1.0```

- To add new tag
```docker build -t dockerhubusername/hello-world-express:2.0 .```
To test => ```docker run -d -p 8000:4000 dockerhubusername/hello-world-express:2.0``` 
```docker push dockerhubusername/hello-world-express:2.0```
