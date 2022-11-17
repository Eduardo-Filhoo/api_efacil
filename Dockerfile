FROM node:16.16.0

WORKDIR /api

COPY package.json ./

RUN npm install --global npm@latest

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

CMD [ "npm", "start" ]
