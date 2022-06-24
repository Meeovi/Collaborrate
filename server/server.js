require('../config/postgraphile.config')
require('../config/firebase.config')
const fastify = require('fastify')({ logger: true })
const fastifyEnv = require('@fastify/env')
const fileUpload = require('fastify-file-upload')

const options = {
    confKey: 'config', // optional, default: 'config'
    schema: schema,
    data: data, // optional, default: process.env
    path: `${__dirname}/.env`,
    debug: true
}
  
fastify
    .register(fastifyEnv, options)
    .ready((err) => {
      if (err) console.error(err)
  
      console.log(fastify.config) // or fastify[options.confKey]
      // output: { PORT: 8000 }
})

fastify.register(fileUpload)

fastify.post('../media', function (req, reply) {
  const files = req.raw.files
  console.log(files)
  let fileArr = []
  for(let key in files){
    fileArr.push({
      name: files[key].name,
      mimetype: files[key].mimetype
    })
  }
  reply.send(fileArr)
})

fastify.register(require('@fastify/cookie'), { secret }) // See following section to ensure security
fastify.register(require('@fastify/csrf-protection'), { cookieOpts: { signed: true } })
fastify.register(require('@fastify/cors'), { 
    // put your options here
})

fastify.register(require('@fastify/elasticsearch'), { node: 'http://localhost:9200' })

fastify.get('/user', async function (req, reply) {
  const { body } = await this.elastic.search({
    index: 'tweets',
    body: {
      query: { match: { text: req.query.q }}
    }
  })

  return body.hits.hits
})

fastify.register(openTelemetryPlugin, { wrapRoutes: true })

fastify.get('/', async function (request, reply) {
  const {
    activeSpan,
    tracer,
  } = request.openTelemetry()
  const childSpan = tracer.startSpan(`${activeSpan.name} - child process`)
  childSpan.end()
  return 'OK'
})

fastify.listen(8000, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

fastify.listen({ port: 8000 }, err => {
  if (err) throw err
})

fastify.get('/', (req, reply) => {
    reply.send({ hello: 'world' })
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

fastify.route({
    method: 'GET',
    path: '/',
    handler: async (req, reply) => {
      const token = await reply.generateCsrf()
      return { token }
    }
  })
  
  // protect a route
  fastify.route({
    method: 'POST',
    path: '/',
    onRequest: fastify.csrfProtection,
    handler: async (req, reply) => {
      return req.body
    }
  })

start()

fastify.listen(8000)
fastify.listen(8000, (err) => {
    if (err) throw err;
    console.log('Server listening on http://localhost:8000');
  });

  fastify.listen(8000, err => {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
  })