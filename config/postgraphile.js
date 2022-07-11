const express = require("express");
const { postgraphile, makePluginHook } = require("postgraphile");
const PgPubsub = require("@graphile/pg-pubsub");

const pluginHook = makePluginHook([PgPubsub]);

const app = express();

app.use(
  postgraphile(
    process.env.DATABASE_URL || "postgresql://postgres:Libra1986@localhost:5432/alternatecms",
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