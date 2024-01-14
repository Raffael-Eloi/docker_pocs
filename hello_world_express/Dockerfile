FROM node:18

ARG PORT_EXECUTION=6000

ENV PORT=$PORT_EXECUTION VARIABLE_TESTE="Hamburguer de presunto e queijo"

WORKDIR /hello_world_express
EXPOSE $PORT_EXECUTION
COPY . .

RUN npm install
ENTRYPOINT node app.js