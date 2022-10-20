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
