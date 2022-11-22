require("reflect-metadata");

import { buildSchema } from "type-graphql";
import * as path from "path";
import { PrismaClient } from "@prisma/client";
import { useParserCache } from '@envelop/parser-cache';
import { useValidationCache } from '@envelop/validation-cache';

import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { createFetch } from '@whatwg-node/fetch';
import { useGraphQlJit } from '@envelop/graphql-jit';
import { resolvers } from "../prisma/generated/type-graphql";
import { useSentry } from '@envelop/sentry';
import { useSofaWithSwaggerUI } from '@graphql-yoga/plugin-sofa'
import '@sentry/tracing';
//import { ApolloGateway } from '@apollo/gateway'
//import { useApolloFederation } from '@envelop/apollo-federation'
import fastify, { FastifyRequest, FastifyReply } from 'fastify'

// This is the fastify instance you have created
const app = fastify({
  logger: true
})

// Setting cors and logging capabilities

var cors = require('cors')

app.options('*', cors())

// Initialize the gateway
/* const gateway = new ApolloGateway({
  serviceList: [
    { name: 'First', url: process.env.GRAPHQL_ENV },
    //{ name: 'products', url: 'http://localhost:4002' }
  ]
}) */

// Pulling our Graphql Resolvers from Type-graphql & Prisma generation

async function main() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    validate: false,
  });

  // Make sure all services are loaded
  // await gateway.load()

  // Connect to Prisma

  const prisma = new PrismaClient();
  await prisma.$connect();

  // Graphql Server main function 

  const yoga = createYoga < {
    req: FastifyRequest
    reply: FastifyReply
  } > ({
    // Integrate Fastify logger
    logging: {
      debug: (...args) => args.forEach((arg) => app.log.debug(arg)),
      info: (...args) => args.forEach((arg) => app.log.info(arg)),
      warn: (...args) => args.forEach((arg) => app.log.warn(arg)),
      error: (...args) => args.forEach((arg) => app.log.error(arg))
    },
    schema,
    //context: contextCreator,
    batching: true,
    cors: {
      origin: '*',
      credentials: true,
    },
    context: ({}) => ({
      prisma,
    }),
    plugins: [
      useParserCache({}),
      useValidationCache({}),
      useGraphQlJit({}),
      useSentry({
        includeRawResult: false, // set to `true` in order to include the execution result in the metadata collected
        includeResolverArgs: false, // set to `true` in order to include the args passed to resolvers
        includeExecuteVariables: false, // set to `true` in order to include the operation variables values
      }),
      /* useApolloFederation({
         gateway
       }) */
       useSofaWithSwaggerUI({
        basePath: '/rest',
        swaggerUIEndpoint: '/swagger',
        servers: [
          {
            url: '/', // Specify Server's URL.
            description: 'Development server'
          }
        ],
        info: {
          title: 'Example API',
          version: '1.0.0'
        }
      })
    ],
    fetchAPI: createFetch({
      // We prefer `node-fetch` over `undici` and current unstable Node's implementation
      useNodeFetch: true,
      formDataLimits: {
        // Maximum allowed file size (in bytes)
        fileSize: 1000000,
        // Maximum allowed number of files
        files: 10,
        // Maximum allowed size of content (operations, variables etc...)
        fieldSize: 1000000,
        // Maximum allowed header size for form data
        headerSize: 1000000
      }
    })
  });

  const server = createServer(yoga)

  app.route({
    url: '/graphql',
    method: ['GET', 'POST', 'OPTIONS'],
    handler: async (req, reply) => {
      // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
      const response = await yoga.handleNodeRequest(req, {
        req,
        reply
      })
      response.headers.forEach((value, key) => {
        reply.header(key, value)
      })

      reply.status(response.status)

      reply.send(response.body)

      return reply
    }
    
  })

  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});