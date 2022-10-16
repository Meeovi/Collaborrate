const elasticsearch = require('../search/elasticsearch');
const algolia = require('../search/algolia');
const itemsApi = require('../search/itemsApi');
const itemsApiLunr = require('../search/itemsApi-lunr');
const meilisearch = require('../search/meilisearch');
const typesense = require('../search/meilisearch');

module.exports = () => {
  return {
    elasticsearch,
    algolia,
    itemsApi,
    itemsApiLunr,
    meilisearch,
    typesense
  }
}
