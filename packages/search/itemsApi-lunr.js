const lunr = require('@nuxtjs/lunr-module');
const ItemsJS = require('itemsjs');

const data = [{
  id: null,
  title: '',
  text: '',
  category: ''
}];

// configuration for itemsjs faceted search
const configuration = {
  native_search_enabled: false,
  custom_id_field: 'id', // 'id' is a default one but we can also use 'uuid' and other if necessary
  aggregations: {
    category: {
      title: '',
      size: 10,
      conjunction: true
    }
  }
}

// indexing lunr with data
const idx = lunr(function () {
  this.ref('id');
  this.field('title');
  this.field('text');
  this.field('category');

  data.forEach(v => {
    this.add(v);
  });
});

// indexing data into itemsjs
const itemsjs = ItemsJS(data, configuration);

// searching
const search_result = idx.search('sky');
console.log(search_result);

const result = itemsjs.search({
  per_page: 10,
  // important! providing ids from full text search
  ids: search_result.map(v => v.ref),
  filters: {
    category: ['fiction'],
  }
});

console.log(result);
//console.log(result.data.items);
//console.log(result.data.aggregations.category);