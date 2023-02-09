const fastify = require('fastify') // or import fastify from 'fastify'
const multer = require('fastify-multer') // or import multer from 'fastify-multer'
const upload = multer({ dest: 'uploads/' })

const server = fastify()
// register fastify content parser
server.register(multer.contentParser)

server.route({
  method: 'POST',
  url: '/profile',
  preHandler: upload.single('avatar'),
  handler: function(request, reply) {
    // request.file is the `avatar` file
    // request.body will hold the text fields, if there were any
    reply.code(200).send('SUCCESS')
  }
})

// or using the short hand declaration
server.post(
  '/profile',
  { preHandler: upload.single('avatar') },
  function(request, reply) {
    // request.file is the `avatar` file
    // request.body will hold the text fields, if there were any
    reply.code(200).send('SUCCESS')
  }
)

server.route({
  method: 'POST',
  url: '../../../upload',
  preHandler: upload.array('media', 12),
  handler: function(request, reply) {
    // request.files is array of `media` files
    // request.body will contain the text fields, if there were any
    reply.code(200).send('SUCCESS')
  }
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
server.route({
  method: 'POST',
  url: '/cool-profile',
  preHandler: cpUpload,
  handler: function(request, reply) {
    // request.files is an object (String -> Array) where fieldname is the key, and the value is array of files
    //
    // e.g.
    //  request.files['avatar'][0] -> File
    //  request.files['gallery'] -> Array
    //
    // request.body will contain the text fields, if there were any
    reply.code(200).send('SUCCESS')
  }
})