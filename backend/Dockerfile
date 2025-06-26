# syntax=docker/dockerfile:1
FROM node:18-slim
WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get upgrade -y libsystemd0 && npm install --omit=dev
COPY . .
EXPOSE 4000
CMD ["npm", "start"]
