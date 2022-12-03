FROM node:16

WORKDIR /usr/src/app

ENV PORT=80

COPY . .

RUN npm ci

RUN node deployCommands.js

EXPOSE 80

CMD node index.js