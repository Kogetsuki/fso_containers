# ------------------------------------------------------------------------ 
#                                 TEST STAGE
# ------------------------------------------------------------------------
FROM node:20 AS test

WORKDIR /usr/src/app

ENV VITE_BACKEND_URL=http://host.docker.internal:3000

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run test


# ------------------------------------------------------------------------ 
#                                 BUILD STAGE
# ------------------------------------------------------------------------ 
FROM node:20 AS build

WORKDIR /usr/src/app

ENV VITE_BACKEND_URL=http://host.docker.internal:3000

COPY --from=test /usr/src/app ./

RUN npm install
RUN npm run build


# ------------------------------------------------------------------------ 
#                                 PRODUCTION STAGE
# ------------------------------------------------------------------------ 
FROM node:20 AS prod

WORKDIR /usr/src/app

RUN npm install -g serve

COPY --from=build /usr/src/app/dist ./dist

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
