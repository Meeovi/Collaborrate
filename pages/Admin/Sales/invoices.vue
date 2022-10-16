<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-invoice"><input type="submit" class="btn btn-warning" value="Create New Invoice"></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Invoice ID</th>
            <th>Customer Name</th>
            <th>Bill to Name</th>
            <th>Email</th>
            <th>Subtotal</th>
            <th>Order Number</th>
            <th>Billing Address</th>
            <th>Grand Total Base</th>
            <th>Grand Total Purchased</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="invoices in invoices" :key="invoices.id">
          <tr>
            <td>{{ invoices.id }}</td>
            <td>{{ invoices.customer_name }}</td>
            <td>{{ invoices.bill_to_name }}</td>
            <td>{{ invoices.email }}</td>
            <td>{{ invoices.subtotal }}</td>
            <td>{{ invoices.order_number }}</td>
            <td>{{ invoices.billing_address }}</td>
            <td>{{ invoices.grand_total_base }}</td>
            <td>{{ invoices.grand_total_purchased }}</td>
            <td><a :href="`/admin/edit/invoice/${invoices.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  invoices from '~/graphql/queries/sales/invoices'

export default {
  data() {
    return {
      invoices: [],
    }
  },
  apollo: {
    invoices: {
      prefetch: true,
      query: invoices
    }
  },
    head: {
      title: 'Invoices'
    }
  }

</script>
