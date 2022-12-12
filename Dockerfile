# Dockerfile
FROM node:11.13.0-alpine

# create destination directory
RUN mkdir -p /usr/src/alternatecms
WORKDIR /usr/src/alternatecms

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# download and install Typesense for search

RUN curl -O https://dl.typesense.org/releases/0.23.1/typesense-server-0.23.1-linux-amd64.tar.gz
RUN tar -xzf typesense-server-0.23.1-linux-amd64.tar.gz
RUN export TYPESENSE_API_KEY=xyz
RUN mkdir $(pwd)/typesense-data
RUN ./typesense-server --data-dir=$(pwd)/typesense-data --api-key=$TYPESENSE_API_KEY --enable-cors

# copy the app, note .dockerignore

COPY . /usr/src/alternatecms/
RUN npm install --force
RUN npm run all

EXPOSE 8000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8000

CMD [ "npm", "start" ]