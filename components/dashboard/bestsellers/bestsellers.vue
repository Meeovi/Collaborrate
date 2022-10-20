<template>
    <div class="row">
        <div class="table table-responsive table-bordered latestOrders col">
                    <table class="table" >
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>How Many Times Viewed</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr v-for="products in findManyProducts" :key="products.id">
                            <td>{{ products.name }}</td>
                            <td>{{ products.price }}</td>
                            <td>{{ products.quantity_per_source }}</td>
                            <td><a :href="`/admin/edit/product/${products.id}`">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';

const findManyProducts = gql`{
    findManyProducts(take: 5, orderBy: {_relevance: {fields: rating, sort: asc}}) {
    name
    price
    quantity_per_source
  }
}`
export default {
  apollo: {
    findManyProducts: {
      query: findManyProducts,
      prefetch: true,
    },
  },
}
</script>

<style scoped>

</style>