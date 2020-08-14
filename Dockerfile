FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3001

CMD ["node", "index.js"]