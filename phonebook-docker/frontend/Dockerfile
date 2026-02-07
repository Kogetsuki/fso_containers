FROM node:20-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-alpine

WORKDIR /usr/src/app

# Copy built files from builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Install serve to run a simple HTTP server for testing
RUN npm install -g serve

EXPOSE 5173

# Keep the container running and serve the built app
CMD ["serve", "-s", "dist", "-l", "5173"]
