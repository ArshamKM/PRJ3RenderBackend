FROM node:20-slim

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . .

RUN npm run build

CMD ["npm", "start"]