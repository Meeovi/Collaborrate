'use strict';

const fastify = require('fastify')();
const { PrismaClient } = require('@prisma/client')
const { buildSchema }  = require("type-graphql");
const prisma = new PrismaClient()
const { ApolloServer }  = require("apollo-server");

const PORT = process.env.PORT || 4000;

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/**/*.resolver.{ts,js}"],
    dateScalarMode: "timestamp",
    validate: false,
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}


fastify.register(require('./server')).after(() => {
  fastify.nuxt('*');
});

fastify.listen(8000, err => {
  if (err) throw err;
  console.log('Server listenging on http://localhost:8000');
});

bootstrap();
