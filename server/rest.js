let sofa, { OpenAPI } = require('sofa-api');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

export default (app, { schema, context }) => {
  const openApi = OpenAPI({
    schema,
    info: {
      title: 'AlternateCMS REST API'
    }
  });

  const basePath = '/rest';

  app.use(
    basePath,
    sofa({
      schema,
      context,
      onRoute(info) {
        openApi.addRoute(info, { basePath });
      }
    })
  );

  // writes every recorder route
  openApi.save('./swagger.json');

  // expose rest docs
  app.use(basePath, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
