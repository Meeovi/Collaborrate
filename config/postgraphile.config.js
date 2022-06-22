const { postgraphile } = require('postgraphile')
module.exports = postgraphile(process.env.DATABASE_URL, 'public', {
  watchPg: true, // automatic reload when database changes
  graphiql: true, // for dev
  graphqlRoute: '/api/graphql', // optional to avoid conflicts with nuxt.js default routing
  graphiqlRoute: '/api/graphiql'
})