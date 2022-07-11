<<<<<<< HEAD
import Knex from 'knex';
import schemaInspector from 'knex-schema-inspector';

const database = Knex({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    charset: process.env.DB_CHARSET,
  },
  createDatabaseIfNotExists: true,
  migrations: {
    tableName: 'migrations'
  }
});

const inspector = schemaInspector(database);

export default inspector;
=======
const { SQLDataSource } = require("datasource-sql");

const knex = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    },
    pool: { min: 2, max: 7 }
  });

module.exports = knex;
>>>>>>> a98e424a92b60fb3e673ff0cfc45b84cd321f0e8
