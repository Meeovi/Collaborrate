const fs = require('fs');
const yaml = require('js-yaml');

const fileContents = fs.readFileSync('./src/data/products.yaml', 'utf8');
const products = yaml.load(fileContents);

module.exports = function (api) {
  api.loadSource(async actions => {
    const collection = actions.addCollection({
      typeName: 'Products'
    })

    for (const product of products) {
      collection.addNode(product);
    }
  })
}