/* eslint-disable no-process-env */
require("dotenv").config();

const {
  PORT = 3000,
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_TO,
  NODE_ENV,
} = process.env;

module.exports = {
  PORT,
  MAIL_HOST,
  MAIL_PORT,
  MAIL_USERNAME,
  MAIL_PASSWORD,
  MAIL_TO,
  NODE_ENV,
};
