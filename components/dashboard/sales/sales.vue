<template>
    <div class="col">
        <div class="table table-responsive table-bordered orderTable col">
                <h4>Sales</h4>
                <table class="table" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Status</th>
                            <th>Average Order</th>
                            <th># of Shops</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="transactions in findManyTransactions" :key="transactions.id">
                            <td>{{ transactions.transaction_id }}</td>
                            <td>{{ transactions.closed }}</td>
                            <td>{{ transactions.orders }}</td>
                            <td><a :href="`/admin/edit/transaction/${transactions.id}`">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
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
}
</script>

<style scoped>

</style>