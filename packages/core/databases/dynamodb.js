const fastify = require('fastify')

fastify.register(require('fastify-dynamodb'), {
    endpoint: process.env.DYNAMODB_ENDPOINT,
    region: AWS_REGION
  })

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})