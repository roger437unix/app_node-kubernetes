FROM node:20-alpine
WORKDIR /appnode
COPY package*.json ./
RUN npm install
COPY ./ ./
EXPOSE 8080
CMD ["npm", "start"]
