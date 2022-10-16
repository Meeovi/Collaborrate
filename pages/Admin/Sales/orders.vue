<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-order"><input type="submit" class="btn btn-warning" value="Create New Order"></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Order ID</th>
            <th>Bill to Name</th>
            <th>Purchased Date</th>
            <th>Ship to Name</th>
            <th>Grand Total Purchased</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="orders in allOrders" :key="orders.id">
          <tr>
            <td>{{ orders.id }}</td>
            <td>{{ orders.bill_to_name }}</td>
            <td>{{ orders.purchased_date }}</td>
            <td>{{ orders.ship_to_name }}</td>
            <td>{{ orders.grand_total_purchased }}</td>
            <td><a :href="`/admin/edit/order/${orders.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  allOrders from '~/graphql/queries/sales/orders'

export default {
  data() {
    return {
      allOrders: [],
    }
  },
  apollo: {
    allOrders: {
      prefetch: true,
      query: allOrders
    }
  },
    head: {
      title: 'Orders'
    }
  }

</script>
