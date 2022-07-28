require('dotenv').config()
import Knex from 'knex';
import schemaInspector from 'knex-schema-inspector';

const database = Knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    charset: 'utf8',
  },
});

const inspector = schemaInspector(database);

export default inspector;