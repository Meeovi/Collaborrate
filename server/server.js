const express = require("express");
const {
  postgraphile
} = require("postgraphile");

const app = express();

app.use(postgraphile(
  process.env.DATABASE_URL || "postgresql://postgres:Whurashia1986@db.wyhrhklrokwbwfwkgyoi.supabase.co:5432/postgres",
  "public", {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    dynamicJson: true,
    graphqlRoute: '/graphql'
  }
));

app.listen(process.env.PORT || 5000);
