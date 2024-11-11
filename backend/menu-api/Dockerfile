FROM node:22
WORKDIR /menu-api
COPY src/package*.json .
RUN npm install
COPY  src/ ./
EXPOSE 8080
CMD [ "node", "app.js"]
