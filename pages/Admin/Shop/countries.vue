<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-country"><FormulateInput type="button">Add New Country</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Country ID</th>
            <th>Country Title</th>
            <th>Country Description</th>
            <th>Country Image</th>
            <th>Region</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="countries in countries" :key="countries.id">
          <tr>
            <td>{{ countries.id }}</td>
            <td>{{ countries.name }}</td>
            <td>{{ countries.description }}</td>
            <td>{{ countries.image }}</td>
            <td>{{ countries.region }}</td>
            <td><a :href="`/admin/edit/country/${countriess.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import countries from '~/apollo/queries/shop/countries'

export default {
  data() {
    return {
      countries: [],
    }
  },
  apollo: {
    countries: {
      prefetch: true,
      query: countries
    }
  },
    head: {
      title: 'Countries'
    }
  }

</script>
