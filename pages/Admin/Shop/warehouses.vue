<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-warehouse"><FormulateInput type="button">Create Warehouse</FormulateInput></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Shipping Zones</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="warehouse in warehouse" :key="warehouse.id">
          <tr>
            <td>{{ warehouse.name }}</td>
            <td>{{ warehouse.shipping_zones }}</td>
            <td><a :href="`/admin/edit/warehouse/${warehouse.id}`">Edit</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import warehouse from '~/apollo/queries/shop/warehouses.gql'

export default {
  data() {
    return {
      warehouse: [],
    }
  },
  apollo: {
    warehouse: {
      prefetch: true,
      query: warehouse
    }
  }, 
    head: {
      title: 'Warehouses'
    }
  }

</script>
