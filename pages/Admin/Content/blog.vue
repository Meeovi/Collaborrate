<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-article"><FormulateInput type="button">Add New Article</FormulateInput></a>
        
      </div>
    </nav>
<br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Excerpt</th>
            <th>Image</th>
            <th>Published</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="article in articles" :key="article.id">
          <tr>
            <td>{{ article.id }}</td>
            <td>{{ article.name }}</td>
            <td>{{ article.excerpt }}</td>
            <td>{{ article.image }}</td>
            <td>{{ article.published }}</td>
            <td><a :href="`/admin/edit/article/${articles.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import articles from '~/apollo/queries/content/articles'

export default {
  data() {
    return {
      articles: [],
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articles
    }
  }, 
    head: {
      title: 'Blog'
    }
  }

</script>
