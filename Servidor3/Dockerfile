FROM node:alpine
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 3003
ENTRYPOINT ["node", "index.js"]