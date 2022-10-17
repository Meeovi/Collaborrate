<template>
    <div class="row">
        <div class="table table-responsive table-bordered latestOrders col">
                    <table class="table" >
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>How Many Times Viewed</th>
<<<<<<< HEAD
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
=======
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
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
    </div>
</template>

<script>
<<<<<<< HEAD
export default {
    
=======
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
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
}
</script>

<style scoped>

</style>