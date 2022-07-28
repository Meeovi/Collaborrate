const express = require("express");
const { postgraphile, makePluginHook } = require("postgraphile");
const PgPubsub = require("@graphile/pg-pubsub");

const pluginHook = makePluginHook([PgPubsub]);

const app = express();

app.use(
  postgraphile(
    process.env.DATABASE_URL || "postgresql://postgres:Whurashia1986@db.wyhrhklrokwbwfwkgyoi.supabase.co:5432/postgres",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      retryOnInitFail: true,
      subscriptions: true,
      disableDefaultMutations: false,
      pluginHook,
      simpleSubscriptions: true,
    }
  )
);

app.listen(process.env.PORT || 3000);