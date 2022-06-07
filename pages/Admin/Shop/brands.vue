<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-brand"><FormulateInput type="button">Add New Brand</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Image</th>
            <th>Brand ID</th>
            <th>Code</th>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Public</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="brands in brands" :key="brands.id">
          <tr>
            <td>{{ brands.media }}</td>
            <td>{{ brands.id }}</td>
            <td>{{ brands.code }}</td>
            <td>{{ brands.name }}</td>
            <td>{{ brands.city }}</td>
            <td>{{ brands.state }}</td>
            <td>{{ brands.country }}</td>
            <td>{{ brands.isPublic }}</td>
            <td><a :href="`/admin/edit/brand/${brands.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import brands from '~/apollo/queries/shop/brands'

export default {
  data() {
    return {
      brands: [],
    }
  },
  apollo: {
    brands: {
      prefetch: true,
      query: brands
    }
  },
    head: {
      title: 'Brands'
    }
  }

</script>
