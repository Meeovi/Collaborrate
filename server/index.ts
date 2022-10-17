import "reflect-metadata";
export {};

const express = require('express');
import * as swaggerUi from 'swagger-ui-express'
import { buildSchema } from "type-graphql";
import { createServer } from '@graphql-yoga/node';
import * as path from "path";
import { prisma, PrismaClient } from "@prisma/client";
import { useParserCache } from '@envelop/parser-cache';
import { useValidationCache } from '@envelop/validation-cache';
const { getUserId } = require('../server/config/utils');
import Fastify, { fastify, FastifyRequest, FastifyReply, FastifyInstance } from 'fastify';
import { createModule, Scope, InjectionToken } from 'graphql-modules'
import middie from "middie";
import fs from 'node:fs/promises'
import session from "express-session";
import passport from "passport";
import { GraphQLLocalStrategy, buildContext } from "graphql-passport";

//import { useGraphQLModules } from '@envelop/graphql-modules';
import { useGraphQlJit } from '@envelop/graphql-jit';
import { resolvers } from "../prisma/generated/type-graphql";
import { useSentry } from '@envelop/sentry';
import '@sentry/tracing';
import { OpenAPI, useSofa } from 'sofa-api';
import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'path';

const User = require('../packages/authentication/api/User')

const serve = Fastify();

(async () => {
  await serve.register(middie);
})();

// Passportjs Usage

passport.use(
  new GraphQLLocalStrategy((email, password, done) => {
    // Adjust this callback to your needs
    const users = User.getUsers();
    const matchingUser = users.find(
      user => email === user.email && password === user.password
    );
    const error = matchingUser ? null : new Error("no matching user");
    done(error, matchingUser);
  })
);

const pass = express();
pass.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
})); // optional

pass.use(passport.initialize());
pass.use(passport.session()); // if session is used

// Setting cors and logging capabilities

var cors = require('cors')
const app = fastify({
  logger: true
})

app.options('*', cors())

interface Context {
  prisma: PrismaClient;
}

// Pulling our Graphql Resolvers from Type-graphql & Prisma generation

async function main() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    validate: false,
    
  });

  // Graphql Modules implementation using our Graphql File

  const myModule = createModule({
    id: 'my-module',
    dirname: __dirname,
    typeDefs: loadFilesSync(join(__dirname, './*.graphql'))
  })

  // Connect to Prisma

  const prisma = new PrismaClient();
  await prisma.$connect();
  
  // Graphql Server main function 

  const server = createServer < {
    req: FastifyRequest
    reply: FastifyReply
  } > ({
    schema,
    cors: {
      origin: '*',
      credentials: true,
    },
    logging: {
      debug: (...args) => args.forEach((arg) => app.log.debug(arg)),
      info: (...args) => args.forEach((arg) => app.log.info(arg)),
      warn: (...args) => args.forEach((arg) => app.log.warn(arg)),
      error: (...args) => args.forEach((arg) => app.log.error(arg)),
    },
    context: ({ req }) => ({ 
      prisma,
      userId: req && req.headers.authorization ?
        getUserId(req) :
        null
    }),
    plugins: [
      useParserCache({}),
      // useGraphQLModules(application),
      useValidationCache({}),
      useGraphQlJit({}),
      useSentry({
        includeRawResult: false, // set to `true` in order to include the execution result in the metadata collected
        includeResolverArgs: false, // set to `true` in order to include the args passed to resolvers
        includeExecuteVariables: false, // set to `true` in order to include the operation variables values
        configureScope: (args, scope) => {}, // if you wish to modify the Sentry scope
      })
    ],
  });

  // Graphql Routes in AlternateCMS

  app.route({
      url: '/graphql',
      method: ['GET', 'POST', 'OPTIONS'],
      handler: async (req, reply) => {
        // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
        const response = await server.handleIncomingMessage(req, {
          req,
          reply,
        })
        response.headers.forEach((value, key) => {
          reply.header(key, value)
        })

        reply.status(response.status)

        reply.send(response.body)

        return reply
      },
    }),
    // This will allow Fastify to forward multipart requests to GraphQL Yoga
    app.addContentTypeParser('multipart/form-data', {}, (req, payload, done) =>
      done(null),
    )

  // Sofa API Usage
 /* const restApiBasePath = '/rest'
  const openApi = OpenAPI({ schema, info: { title: "API Docs", version: "3.0.0" }  })
  express.use(
    restApiBasePath,
    useSofa({
      schema,
      basePath: restApiBasePath,
      context: (request: any) => {
        //Evidence that the request body is received properly:
        console.log('request:')
        console.log('  url:')
        console.log('    ', request.req.originalUrl)
        console.log('  body:')
        console.log('    ', request.req.body)
        return { ...request, prisma }
      },
      onRoute(info:any) {
        openApi.addRoute(info, {
          basePath: restApiBasePath
        })
      }
    })
  )
  const restDocsEndPt = '/rest-docs'
  express.use(restDocsEndPt, swaggerUi.serve, swaggerUi.setup(openApi.get())) */

  // Start the server and explore http://localhost:4000/graphql
  server.start();
  console.log(`GraphQL is listening on http://127.0.0.1:4000/graphql`);
}


main().catch(console.error);