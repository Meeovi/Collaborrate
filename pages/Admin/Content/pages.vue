<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/page/add-new-page"><input type="submit" class="btn btn-warning" value="Add New Page"></a>
      </div>
    </nav>
<br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Page ID</th>
            <th>Page Title</th>
            <th>Page Link</th>
            <th>Page SEO Title</th>
            <th>Page SEO Keywords</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="pages in findManyPages" :key="pages.id">
          <tr>
            <td>{{ pages.id }}</td>
            <td>{{ pages.title }}</td>
            <td>{{ pages.url_key }}</td>
            <td>{{ pages.meta_title }}</td>
            <td>{{ pages.meta_keywords }}</td>
            <td><a :href="`/admin/edit/page/${pages.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import  findManyPages from '~/graphql/query/findManyPages'

export default {
  data() {
    return {
      findManyPages: [],
    }
  },
  apollo: {
    findManyPages: {
      prefetch: true,
      query: findManyPages
    }
  },
    head: {
      title: 'Pages'
    }
  }

</script>

<style>
  
</style>