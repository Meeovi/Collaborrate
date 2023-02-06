<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/warehouse/add-new-warehouse"><input type="submit" class="btn btn-warning" hint="Create Warehouse"></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Shipping Zones</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="warehouses in warehouses" :key="warehouses.id">
          <tr>
            <td>{{ warehouses.name }}</td>
            <td>{{ warehouses.shipping_zones }}</td>
            <td><a :href="`/admin/edit/warehouses/${warehouses.id}`">Edit</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
 import  warehouses from '../../graphql/query/warehouses'

export default {
  data() {
    return {
      warehouses: [],
    }
  },
  apollo: {
    warehouses: {
      prefetch: true,
      query: warehouses
    }
  }, 
    head: {
      title: 'Warehouses'
    }
  }

</script>
