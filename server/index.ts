require("reflect-metadata");
export {};

import {  buildSchema } from "type-graphql";
import { createServer } from '@graphql-yoga/node';
import * as path from "path";
import { PrismaClient } from "@prisma/client";
import { useParserCache } from '@envelop/parser-cache';
import { useValidationCache } from '@envelop/validation-cache';
const { getUserId } = require('../server/config/utils');

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');

import { createModule } from 'graphql-modules'

//import { useGraphQLModules } from '@envelop/graphql-modules';
import { useGraphQlJit } from '@envelop/graphql-jit';
import { resolvers } from "../prisma/generated/type-graphql";
import { useSentry } from '@envelop/sentry';
import '@sentry/tracing';
import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'path';

// Create an app that is a Feathers AND Express application
const app = express(feathers());

app.use(express.json())
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({ extended: true }));
// Set up REST transport
app.configure(express.rest())

// Setting cors and logging capabilities

var cors = require('cors')

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

  const server = createServer ({
    schema,
    cors: {
      origin: '*',
      credentials: true,
    },
    context: ({
      req
    }) => ({
      prisma,
      userId: req && req.headers.authorization ?
        getUserId(req) : null
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

  app.use(express.errorHandler())

  app.use('/graphql', server)

  app.listen(4000, () => {
    console.log('Running a GraphQL API server at http://localhost:4000/graphql')
  })
}


main().catch(console.error);
