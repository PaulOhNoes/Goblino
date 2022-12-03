FROM node:16

WORKDIR /usr/src/app

ENV PORT=$PORT

COPY . .

RUN npm ci

RUN node deployCommands.js

EXPOSE $PORT

CMD node index.js