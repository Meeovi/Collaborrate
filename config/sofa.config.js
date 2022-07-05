import { OpenAPI, useSofa } from 'sofa-api';
import express from 'express';
import bodyParser from "body-parser";

const app = express();

const openApi = OpenAPI({
  schema,
  info: {
    title: 'Example API',
    version: '3.0.0',
  },
});

app.use(
  '/api',
  useSofa({
    schema,
    basePath: '/api',
    onRoute(info) {
      openApi.addRoute(info, {
        basePath: '/api',
      });
    },
  })
);

app.use(bodyParser.json());
// writes every recorder route
openApi.save('./swagger.yml');


