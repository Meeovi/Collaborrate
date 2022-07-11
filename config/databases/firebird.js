import Knex from 'knex';
import knexFirebirdDialect from "knex-firebird-dialect";
import schemaInspector from 'knex-schema-inspector';

const database = Knex({
  client: knexFirebirdDialect,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: '/tmp/database.fdb',
    lowercase_keys: true,
  },
  createDatabaseIfNotExists: true,
  debug: false,
});

const inspector = schemaInspector(database);

export default inspector;