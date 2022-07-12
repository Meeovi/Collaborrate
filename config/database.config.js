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
