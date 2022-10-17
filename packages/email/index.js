<<<<<<< HEAD
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
=======
const mailer = require('feathers-mailer');
const nodemailer = require('nodemailer');

(async function (app) {
  const account = await nodemailer.createTestAccount(); // internet required

  const transporter = {
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure, // 487 only
    requireTLS: true,
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass // generated ethereal password
    }
  };

  // Register service and setting default From Email
  app.use('mailer', mailer(transporter, { from: account.user }));

  // Use the service
  const email = {
     to: 'president@mars.com',
     subject: 'SMTP test',
     html: 'This is the email body'
  };

  await app.service('mailer').create(email)
  console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`)
})(app)
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
