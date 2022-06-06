<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-customergroup"><FormulateInput type="button">Add New Social Group</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Customer Group</th>
            <th>Tax Class</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="customers in customer_group" :key="customers.id">
          <tr>
            <td>{{ customers.id }}</td>
            <td>{{ customers.name }}</td>
            <td>{{ customers.tax_class }}</td>
            <td>{{ customers.created_at }}</td>
            <td><a :href="`/admin/edit/customer-groups/${customers.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import customer_group from '~/apollo/queries/customers/customerGroups'

export default {
  data() {
    return {
      customer_group: [],
    }
  },
  apollo: {
    customer_group: {
      prefetch: true,
      query: customer_group
    }
  },
    head: {
      title: 'Social Groups'
    }
  }

</script>
