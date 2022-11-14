<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/tag/add-new-tag"><input type="submit" class="btn btn-warning" value="Add New Tags"></a>
        
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
        <tbody v-for="tags in findManyTags" :key="tags.id">
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
 import  findManyTags from '~/graphql/query/findManyTags'

export default {
  data() {
    return {
      findManyTags: [],
    }
  },
  apollo: {
    findManyTags: {
      prefetch: true,
      query: findManyTags
    }
  }, 
    head: {
      title: 'Tags'
    }
  }

</script>
