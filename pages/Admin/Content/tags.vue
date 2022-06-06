<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-tag"><FormulateInput type="button">Add New Tags</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Tag ID</th>
            <th>Tag Title</th>
            <th>Tag Excerpt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="tags in tags" :key="tags.id">
          <tr>
            <td>{{ tags.id }}</td>
            <td>{{ tags.name }}</td>
            <td>{{ tags.excerpt }}</td>
            <td><a :href="`/admin/edit/tag/${tags.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import tags from '~/apollo/queries/content/tags'

export default {
  data() {
    return {
      tags: [],
    }
  },
  apollo: {
    tags: {
      prefetch: true,
      query: tags
    }
  }, 
    head: {
      title: 'Tags'
    }
  }

</script>
