<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/collection/add-new-collection"><input type="submit" class="btn btn-warning" hint="Create Collection"></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Collection ID</th>
            <th>Collection Name</th>
            <th>Description</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="collections in collections" :key="collections.id">
          <tr>
            <td>{{ collections.id }}</td>
            <td>{{ collections.name }}</td>
            <td>{{ collections.description }}</td>
            <td>{{ collections.created_at }}</td>
            <td><a :href="`/admin/edit/collection/${collections.id}`">View</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
import  collections from '../../graphql/query/findManyCollections'

export default {
  data() {
    return {
      collections: [],
    }
  },
  apollo: {
    collections: {
      prefetch: true,
      query: collections
    }
  },
    head: {
      title: 'Collections'
    }
  }

</script>
