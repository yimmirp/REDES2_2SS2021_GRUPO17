FROM node:alpine
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 80
ENTRYPOINT ["node", "index.js"]