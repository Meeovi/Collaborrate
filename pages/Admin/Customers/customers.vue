<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/customer/add-new-customer"><input type="submit" class="btn btn-warning" value="Add New Customer"></a>
        
      </div>
    </nav>

    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Customer ID</th>
            <th>Customer First Name</th>
            <th>Customer Last Name</th>
            <th>Customer Email</th>
            <th>Customer Since</th>
            <th>Customer Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="customers in findManyCustomers" :key="customers.id">
          <tr>
            <td>{{ customers.id }}</td>
            <td>{{ customers.first_name }}</td>
            <td>{{ customers.last_name }}</td>
            <td>{{ customers.email }}</td>
            <td>{{ customers.customer_since }}</td>
            <td>{{ customers.customer_group }}</td>
            <td><a :href="`/admin/edit/customer/${customers.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import findManyCustomers from '~/graphql/query/findManyCustomers'

export default {
  data() {
    return {
      findManyCustomers: [],
    }
  },
  apollo: {
    findManyCustomers: {
      prefetch: true,
      query: findManyCustomers
    }
  },
    head: {
      title: 'Customers'
    }
  }

</script>
