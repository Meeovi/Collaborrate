<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/manufacturer/add-new-manufacturer"><input type="submit" class="btn btn-warning" hint="Add New Manufacturer"></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Image</th>
            <th>Manufacturer ID</th>
            <th>Manufacturer Title</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Public</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="manufacturer in manufacturer" :key="manufacturer.id">
          <tr>
            <td>{{ manufacturer.media }}</td>
            <td>{{ manufacturer.id }}</td>
            <td>{{ manufacturer.name }}</td>
            <td>{{ manufacturer.city }}</td>
            <td>{{ manufacturer.state }}</td>
            <td>{{ manufacturer.country }}</td>
            <td>{{ manufacturer.isPublic }}</td>
            <td><a :href="`/admin/edit/manufacturer/${manufacturer.id}`">View</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
import  manufacturer from '../../graphql/query/manufacturer'

export default {
  data() {
    return {
      manufacturer: [],
    }
  },
  apollo: {
    manufacturer: {
      prefetch: true,
      query: manufacturer
    }
  },
    head: {
      title: 'Manufacturers'
    }
  }

</script>
