const {readFileSync} = require('fs');
const parse = require('csv-parse/lib/sync');

module.exports = function (api) {
  api.loadSource(async (actions) => {
    const input = readFileSync('./src/data/posts.csv', 'utf8');

    const Posts = parse(input, {
      columns: true,
      skip_empty_lines: true,
    });

    const collection = actions.addCollection({
      typeName: 'Posts',
    });

    for (const post of Posts) {
      collection.addNode(post);
    }
  })
}
