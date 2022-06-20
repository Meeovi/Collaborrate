const http = require("http");
const { postgraphile } = require("postgraphile");

http
  .createServer(
    postgraphile(
      process.env.DATABASE_URL, "public", {
        subscriptions: true,
        watchPg: true,
        dynamicJson: true,
        setofFunctionsContainNulls: false,
        ignoreRBAC: false,
        showErrorStack: "json",
        extendedErrors: ["hint", "detail", "errcode"],
        appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
        exportGqlSchemaPath: "schema.graphql",
        graphiql: true,
        enhanceGraphiql: true,
        allowExplain(req) {
            return true;
        },
        enableQueryBatching: true,
        legacyRelations: "omit",
        pgSettings: {
            statement_timeout: "3000",
        },
      }
    )
  )
  .listen(process.env.PORT || 5000);