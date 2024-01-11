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