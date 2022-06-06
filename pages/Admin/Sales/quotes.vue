<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-quote"><FormulateInput type="button">Create A Quote</FormulateInput></a>        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table data-toggle="table" id="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Quote ID</th>
            <th>Quote Name</th>
            <th>Quote Stage</th>
            <th>Contact</th>
            <th>Account</th>
            <th>Grand Total</th>
            <th>Valid Until</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="quotes in quotes" :key="quotes.id">
          <tr>
            <td>{{ quotes.id }}</td>
            <td>{{ quotes.name }}</td>
            <td>{{ quotes.quote_stage }}</td>
            <td>{{ quotes.customers }}</td>
            <td>{{ quotes.order.id }}</td>
            <td>{{ quotes.grand_total }}</td>
            <td>{{ quotes.valid_until }}</td>
            <td><a :href="`/admin/edit/quotes/${quotes.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import quotes from '~/apollo/queries/sales/quotes'

export default {
  data() {
    return {
      quotes: [],
    }
  },
  apollo: {
    quotes: {
      prefetch: true,
      query: quotes
    }
  }, 
    head: {
      title: 'Quotes'
    }
  }

</script>
