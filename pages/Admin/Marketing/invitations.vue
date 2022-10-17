<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-invitation"><input type="submit" class="btn btn-warning" value="Events"></a>
      </div>
    </nav>
<br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Invitation ID</th>
            <th>Invitation Date</th>
            <th>Customer Email</th>
            <th>Customer Name</th>
            <th>Billing Address</th>
            <th>Shipping Address</th>
            <th>Grand Total Purchased</th>
            <th>Order Number</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="invitations in invoices" :key="invitations.id">
          <tr>
            <td>{{ invitations.id }}</td>
            <td>{{ invitations.invoiceDate }}</td>
            <td>{{ invitations.email }}</td> 
            <td>{{ invitations.billingAddress }}</td>
            <td>{{ invitations.shippingAddress }}</td>
            <td>{{ invitations.grandTotalPurchased }}</td>
            <td>{{ invitations.orderNumber }}</td>
            <td>{{ invitations.paymentMethod }}</td>
            <td>{{ invitations.status }}</td>
            <td><a :href="`/admin/edit/invitation/${invitations.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import  invoices from '~/graphql/queries/marketing/invitations'

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
      title: 'Invitations'
    }
  }

</script>
