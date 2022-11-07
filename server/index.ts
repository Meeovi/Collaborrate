require("reflect-metadata");
require('dotenv').config();
const pg = require("pg");

const { createPostGraphileSchema } = require('postgraphile')

import express from 'express'
import { createYoga } from 'graphql-yoga'
 
const pgPool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

const app = express();

async function main() {
  const { schema } = await createPostGraphileSchema(
    pgPool,
    'public', // PostgreSQL schema to use
  );

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema })
 
// Bind GraphQL Yoga to `/graphql` endpoint
app.use('/graphql', yoga)
 
app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql')
})
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});