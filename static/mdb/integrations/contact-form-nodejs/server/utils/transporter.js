const nodemailer = require("nodemailer");

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USERNAME,
  MAIL_PASSWORD,
} = require("../config/index");

/*
Remember that every email provider can block all sign in attempts from non-verified apps. Because of that, it is recommended to use fake SMTP servers for development purposes.
If you are aware of what you are doing create application-specific password for your email or use SMTP provider, e.g. Sendgrid
*/

mailConfig = {
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USERNAME,
    pass: MAIL_PASSWORD,
  },
};

module.exports = nodemailer.createTransport(mailConfig);
