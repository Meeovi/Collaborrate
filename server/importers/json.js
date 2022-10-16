
module.exports = function (api) {
    api.loadSource(async actions => {
      const Blogs = require('./src/data/blogs.json');
  
      const collection = actions.addCollection({
        typeName: 'BlogPosts'
      })
  
      for (const blog of Blogs) {
        collection.addNode(blog);
      }
    })
  }
