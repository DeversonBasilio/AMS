FROM node:24-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:24-alpine as server
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/build ./build
EXPOSE 3000
CMD [ "npm", "start" ]
