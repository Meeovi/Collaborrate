const postgrest = require("postgrest")
require('dotenv').config();

const server = postgrest.startServer({
  dbUri: process.env.DATABASE_URL,
  dbSchema: "public",
  serverPort: 8001,
  dbAnonRole: "postgres",
  //...any other postgrest config option, decamelize is run on each key
})

// you can also do this...
// postgrest.startServer("/path/to/postgrest.conf")

// ...let stuff happen

server.stop()