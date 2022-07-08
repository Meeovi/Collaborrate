const express = require("express");
const {
  postgraphile
} = require("postgraphile");
require("../config/sofa.config")

const app = express();

app.use(postgraphile(
  process.env.DATABASE_URL || "postgresql://postgres:Whurashia1986@db.wyhrhklrokwbwfwkgyoi.supabase.co:5432/postgres",
  "public", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    graphqlRoute: '/graphql' // Set to any route you like
  }
));

app.listen(process.env.PORT || 8080);
