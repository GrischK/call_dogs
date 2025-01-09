FROM node:lts-alpine

# Installe les dépendances nécessaires uniquement pour la construction
RUN apk --no-cache add curl
RUN apk add make g++ python3 git
RUN npm i -g node-pre-gyp

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
#COPY .env .env

EXPOSE 3000

CMD ["npm", "run", "start:dev"]