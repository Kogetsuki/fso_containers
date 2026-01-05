FROM node:20

WORKDIR /usr/scr/app

COPY . . 

RUN npm ci

RUN npm run build

RUN npm i -g serve

CMD ["serve", "dist"]