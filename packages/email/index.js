const fastify = require('fastify')()
const {EMAIL_AUTH_PASSWORD, EMAIL_AUTH_USER, EMAIL_SECURE, EMAIL_HOST, EMAIL_POOL, EMAIL_PORT, EMAIL_FROM} = require('../../server/config/alternate.config')

fastify.register(require('fastify-nodemailer'), {
  pool: EMAIL_POOL,
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_SECURE, // use TLS
  auth: {
      user: EMAIL_AUTH_USER,
      pass: EMAIL_AUTH_PASSWORD
  }
})

fastify.get('/sendmail/:email', (req, reply, next) => {
  let { nodemailer } = fastify
  let recipient = req.params.email

  nodemailer.sendMail({
    from: EMAIL_FROM,
    to: recipient,
    subject: 'foo',
    text: 'bar'
  }, (err, info) => {
    if (err) next(err)
    reply.send({
      messageId: info.messageId
    })
  })
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})