FROM node:16

WORKDIR /usr/src/app

ENV PORT=8080

COPY . .

RUN npm ci

RUN node deployCommands.js

EXPOSE 8080

CMD node index.js