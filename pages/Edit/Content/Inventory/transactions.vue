<template>
  <div>
    <div class="table table-responsive">
      <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Transaction ID</th>
            <th>Transaction Order ID</th>
            <th>Parent Transaction ID</th>
            <th>Payment Method</th>
            <th>Created</th>
            <td>Closed Date</td>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="transactions in findManyTransactions" :key="transactions.id">
          <tr>
            <td>{{ transactions.id }}</td>
            <td>{{ transactions.order_id }}</td>
            <td>{{ transactions.parent_transaction_id }}</td>
            <td>{{ transactions.payment_method }}</td>
            <td>{{ transactions.created }}</td>
            <td>{{ transactions.closed }}</td>
            <td><a :href="`/admin/edit/transaction/${transactions.id}`">View</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
 import  findManyTransactions from '../../graphql/query/findManyTransactions'

export default {
  data() {
    return {
      findManyTransactions: [],
    }
  },
  apollo: {
    findManyTransactions: {
      prefetch: true,
      query: findManyTransactions
    }
  }, 
    head: {
      title: 'Transactions'
    }
  }

</script>
