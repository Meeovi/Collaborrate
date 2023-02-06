require('dotenv').config();
import findManySettings from '~/graphql/query/findManySettings'

export default {
  data() {
    return {
      findManySettings: [],
    }
  },
  apollo: {
    findManySettings: {
      prefetch: true,
      query: findManySettings
    }
  }
};

// APACHE THRIFT DETAILS


// GRPCPROTOBUF DEFAULTS


// JSON SCHEMA DETAILS


// MONGODB DETAILS


// MYSQL DETAILS
const DB_HOST = '';
const DB_PORT = '';
const DB_USER = '';
const DB_PASSWORD = '';
const DB_DATABASE = '';
const DB_CLIENT = '';

// NEO4J DETAILS


// ODATA DETAILS


// OPENAPI SWAGGER DETAILS


// POSTGRESQL DETAILS


// RESTAPI DETAILS


// SOAP DETAILS


// SQLITE DETAILS

const SQLITE_FILENAME = '';

// RECAPTCHA DETAILS

const RECAPTCHA_SITE_KEY = '';

// GRAPHQL DETAILS

const GRAPHQL_ENDPOINT = '';

// REDIS CONNECTION DETAILS

const REDIS_ADAPTER = '';
const REDIS_HOST = '';
const REDIS_PASSWORD = '';
const REDIS_SOCKET_PORT = '';
const REDIS_URL = '';

// SUPABASE DETAILS


// PAYMENT DETAILS


// STRIPE DETAILS

const STRIPE_PUBLISHABLE_KEY = '';

// SENTRY DETAILS

const SENTRY_DSH = '';

// EMAIL and NODEMAILER DETAILS

const EMAIL_FROM = '';
const EMAIL_POOL = '';
const EMAIL_HOST = '';
const EMAIL_PORT = '';
const EMAIL_SECURE = '';
const EMAIL_AUTH_USER = '';
const EMAIL_AUTH_PASSWORD = '';

const SENDGRID_USERNAME = '';
const SENDGRID_PASSWORD = '';

// AUTHENTICATION METHODS

const facebook_client_id = '';
const facebook_client_secret = '';

module.exports = () => {
  return {
    DB_CLIENT,
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
    REDIS_ADAPTER,
    REDIS_HOST,
    REDIS_PASSWORD,
    REDIS_SOCKET_PORT,
    REDIS_URL,
    STRIPE_PUBLISHABLE_KEY,
    SENTRY_DSH,
    SQLITE_FILENAME,
    RECAPTCHA_SITE_KEY,
    GRAPHQL_ENDPOINT,
    EMAIL_AUTH_PASSWORD,
    EMAIL_AUTH_USER,
    EMAIL_SECURE,
    EMAIL_HOST,
    EMAIL_POOL,
    EMAIL_PORT,
    EMAIL_FROM,
    SENDGRID_PASSWORD,
    SENDGRID_USERNAME,
    facebook_client_id,
    facebook_client_secret
  }
}
