FROM node:10-alpine
# Make directories to store the dependencies and the application code:

RUN mkdir -p /application
WORKDIR /application

# Set up the basics:

ENV PORT 8080
EXPOSE 8080
ENV DOCKER_ENV docker
ENV PATH /application/node_modules/.bin:$PATH

# Make incremental updates to the dependencies:

COPY package*.json /application/
RUN npm install

# By default, run the application with node:

CMD [ "npm","run","dev" ]