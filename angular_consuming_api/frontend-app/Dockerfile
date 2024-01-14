FROM node:21.5.0

WORKDIR /frontend-app
EXPOSE 4200
COPY . .

RUN npm install -g @angular/cli -y
RUN ng analytics disable
RUN npm install 

ENTRYPOINT ng serve --host 0.0.0.0