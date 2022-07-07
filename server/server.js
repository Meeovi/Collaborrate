import { createServer } from '@graphql-yoga/node'

// Create your server
const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello Hello Hello',
      },
    },
  },
})
// start the server and explore http://localhost:4000/graphql
server.start()