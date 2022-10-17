<template>
    <div class="col">
        <div class="table table-responsive table-bordered orderTable col">
                <h4>Sales</h4>
                <table class="table" >
                    <thead>
                        <tr>
                            <th>#</th>
<<<<<<< HEAD
                            <th>Lifetime Sales</th>
=======
                            <th>Status</th>
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
                            <th>Average Order</th>
                            <th># of Shops</th>
                        </tr>
                    </thead>
                    <tbody>
<<<<<<< HEAD
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>Thornton</td>
=======
                        <tr v-for="transactions in findManyTransactions" :key="transactions.id">
                            <td>{{ transactions.transaction_id }}</td>
                            <td>{{ transactions.closed }}</td>
                            <td>{{ transactions.orders }}</td>
                            <td><a :href="`/admin/edit/transaction/${transactions.id}`">View</a></td>
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
<<<<<<< HEAD
export default {
    
=======
import gql from 'graphql-tag';

const findManyTransactions = gql`{
    findManyTransactions(take: 5) {
    closed
    created
    customer_payment
    id
    order_id
    orders
    parent_transaction_id
    payment_method
    transaction_id
  }
}`
export default {
  apollo: {
    findManyTransactions: {
      query: findManyTransactions,
      prefetch: true,
    },
  },
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
}
</script>

<style scoped>

</style>