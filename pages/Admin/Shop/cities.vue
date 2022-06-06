<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-city"><FormulateInput type="button">Add New City</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>City ID</th>
            <th>City Title</th>
            <th>State</th>
            <th>Country</th>
            <th>Postal Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="cities in cities" :key="cities.id">
          <tr>
            <td>{{ cities.id }}</td>
            <td>{{ cities.name }}</td>
            <td>{{ cities.state }}</td>
            <td>{{ cities.country }}</td>
            <td>{{ cities.postalCode }}</td>
            <td><a :href="`/admin/edit/city/${cities.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import cities from '~/apollo/queries/shop/cities'

export default {
  data() {
    return {
      cities: [],
    }
  },
  apollo: {
    cities: {
      prefetch: true,
      query: cities
    }
  },
    head: {
      title: 'Cities'
    }
  }

</script>
