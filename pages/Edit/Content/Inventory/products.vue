/* eslint-disable vue/order-in-components */
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/product/add-new-product"><input type="submit" class="btn btn-warning" hint="Add New Product"></a>
      </div>
    </nav>
    <br>
    <br>
    <div class="table table-responsive">
      <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">SKU</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-for="product in findManyProducts" :key="product.id">
          <tr>
            <td>{{ product.id }}</td>
            <td>{{ product.sku }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.short_description }}</td>
            <td>{{ product.type }}</td>
            <td><a :href="`/admin/edit/product/${product.id}`">View</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script>
 import  findManyProducts from '../../graphql/query/findManyProducts'

export default {
  data() {
    return {
      findManyProducts: [],
    }
  },
  apollo: {
    findManyProducts: {
      prefetch: true,
      query: findManyProducts
    }
  }, 
    head: {
      title: 'Products'
    }
  }

</script>
