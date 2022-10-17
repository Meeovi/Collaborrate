import { createIndex, getSearchClient } from  "instantsearch-itemsjs-adapter";

const data = [{ "id":1,"title": "Iphone 7", "category":"Apple","price":109.95 },
{"id":1,"title": "Samsung notce 10","category":"Samsung","price":109.95 }]

const  options = {
	searchableFields: ["title"],
	query:  "",
	aggregations: {
		category: {
			title:  "category",
			size:  10,
			conjunction:  false,
		},
		price: {
			show_facet_stats: true
		},
	},
	sortings: {
		price_asc: {
			field:  "price",
			order:  "asc",
		},
		price_desc: {
			field:  "price",
			order:  "desc",
		},
	},
};

const index = createIndex(data, options);

const searchClient = getSearchClient(index);