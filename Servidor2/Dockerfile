FROM node:alpine
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 3002
ENTRYPOINT ["node", "index.js"]