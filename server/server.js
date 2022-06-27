import { schema } from '../prisma/generated/schema'
import { createServer } from '@graphql-yoga/node'

const server = createServer({
  schema,
  cors: (request) => {
    const requestOrigin = request.headers.get('origin')
    return {
      origin: requestOrigin,
      credentials: true,
      allowedHeaders: ['X-Custom-Header'],
      methods: ['POST'],
    }
  },
})
// start the server and explore http://localhost:4000/graphql
server.start()