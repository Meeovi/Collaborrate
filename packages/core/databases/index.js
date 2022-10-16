require('dotenv').config();

module.exports = () => {
  return {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    client: process.env.DB_CLIENT
  }
}
