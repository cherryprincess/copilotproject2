# syntax=docker/dockerfile:1
FROM node:18-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get upgrade -y libsystemd0 && npm install
COPY . .
RUN npm run build

FROM node:18-slim
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
RUN apt-get update && apt-get upgrade -y libsystemd0 && rm -rf /var/lib/apt/lists/* 
RUN adduser --disabled-password --gecos '' appuser && chown -R appuser /app
USER appuser
EXPOSE 5173
CMD ["npm", "run", "preview", "--", "--host"]
