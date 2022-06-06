<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-transaction"><FormulateInput type="button">Create new Transaction</FormulateInput></a>
      </div>
    </nav>
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
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
        <tbody v-for="transactions in transactions" :key="transactions.id">
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
      </table>
    </div>

  </div>
</template>

<script>
 import transactions from '~/apollo/queries/sales/transactions'

export default {
  data() {
    return {
      transactions: [],
    }
  },
  apollo: {
    transactions: {
      prefetch: true,
      query: transactions
    }
  }, 
    head: {
      title: 'Transactions'
    }
  }

</script>
