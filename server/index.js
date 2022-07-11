// require('./apollo.config')
// require('./server')
require("reflect-metadata");

const postgrest = require("vue-postgrest")

const server = postgrest.startServer({
  dbUri: "postgresql://postgres:Libra1986@localhost:5432/alternatecms",
  dbSchema: "public",
  serverPort: 3000,
  dbAnonRole: "postgres",
  //...any other postgrest config option, decamelize is run on each key
})

// you can also do this...
// postgrest.startServer("/path/to/postgrest.conf")

// ...let stuff happen

server.stop()