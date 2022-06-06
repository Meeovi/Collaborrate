FROM node:10-alpine
WORKDIR /app
COPY package.json ./app
COPY . /app
RUN npm install --force
EXPOSE 8000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8000