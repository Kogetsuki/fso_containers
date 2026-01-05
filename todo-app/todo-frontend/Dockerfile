FROM node:20

WORKDIR /usr/src/app

ENV VITE_BACKEND_URL=http://host.docker.internal:3000

COPY . .

RUN npm i
RUN npm run build
RUN npm i -g serve

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
