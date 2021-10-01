FROM node:alpine
WORKDIR /src
COPY . .
RUN npm install
EXPOSE 3001
ENTRYPOINT ["node", "index.js"]