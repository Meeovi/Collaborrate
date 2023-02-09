/* eslint-disable vue/order-in-components */
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/product-type/add-new-producttype"><input type="submit" class="btn btn-warning" hint="Add New Product Type"></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Type Name</th>
            <th>Type</th>
            <th>Tax</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="types in product_types" :key="types.id">
          <tr>
            <td>{{ types.type_name }}</td>
            <td>{{ types.product_type }}</td>
            <td>{{ types.taxes }}</td>
            <td><a :href="`/admin/edit/product-type/${types.id}`">View</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  product_types from '../../graphql/query/findManyProduct_types'

export default {
  data() {
    return {
      product_types: [],
    }
  },
  apollo: {
    product_types: {
      prefetch: true,
      query: product_types
    }
  }, 
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Product Types'
    }
  }

</script>
