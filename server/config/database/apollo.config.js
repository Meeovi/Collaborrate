const pg = require("pg");
const { ApolloServer } = require("apollo-server");

const { makeSchemaAndPlugin } = require("postgraphile-apollo-server");

const postGraphileOptions = {
  jwtSecret: process.env.JWT_SECRET || String(Math.random()),
  subscriptions: true,
  // dynamicJson: true,
  // etc
};

const dbSchema = process.env.SCHEMA_NAMES
  ? process.env.SCHEMA_NAMES.split(",")
  : "public";

const pgPool = new pg.Pool({
  connectionString: 'postgresql://postgres:Whurashia1986@db.wyhrhklrokwbwfwkgyoi.supabase.co:5432/postgres'
});

async function main() {
  // See https://www.graphile.org/postgraphile/usage-schema/ for schema-only usage guidance
  const { schema, plugin } = await makeSchemaAndPlugin(
    pgPool,
    dbSchema,
    postGraphileOptions
  );

  // See https://www.apollographql.com/docs/apollo-server/api/apollo-server.html#ApolloServer
  const server = new ApolloServer({
    schema,
    plugins: [plugin]
  });

  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});