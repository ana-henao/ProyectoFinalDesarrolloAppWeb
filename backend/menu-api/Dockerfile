FROM node:22
WORKDIR /menu-api
COPY src/package*.json .
RUN npm install
COPY  src/ ./
CMD [ "node", "app.js"]
