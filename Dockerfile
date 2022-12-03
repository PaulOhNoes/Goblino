FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN node deployCommands.js

CMD node index.js