/* eslint-disable vue/order-in-components */
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-producttype"><input type="submit" class="btn btn-warning" value="Add New Product Type"></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Type Name</th>
            <th>Type</th>
            <th>Tax</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="types in allProduct_typesList" :key="types.id">
          <tr>
            <td>{{ types.type_name }}</td>
            <td>{{ types.product_type }}</td>
            <td>{{ types.taxes }}</td>
            <td><a :href="`/admin/edit/product-type/${types.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  allProduct_typesList from '~/apollo/queries/shop/product-type.gql'

export default {
  data() {
    return {
      allProduct_typesList: [],
    }
  },
  apollo: {
    allProduct_typesList: {
      prefetch: true,
      query: allProduct_typesList
    }
  }, 
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Product Types'
    }
  }

</script>
