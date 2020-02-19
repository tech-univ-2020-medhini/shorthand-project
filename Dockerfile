FROM node

WORKDIR /app

COPY . .

RUN npm install
RUN npm run createdb
RUN npm run migrate

EXPOSE 8080

CMD ["node", "index.js"]