<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/Admin/Add-new/add-new-return"><FormulateInput type="button">New Return Request</FormulateInput></a>
        
      </div>
    </nav>
<br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Returns ID</th>
            <th>Returns Name</th>
            <th>Days of Return</th>
            <th>Returns Prefix</th>
            <th>Return Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="returns in returns" :key="returns.id">
          <tr>
            <td>{{ returns.id }}</td>
            <td>{{ returns.name }}</td>
            <td>{{ returns.validity }}</td>
            <td>{{ returns.return_prefix }}</td>
            <td>{{ returns.created_at }}</td>
            <td><a :href="`/admin/edit/return/${returns.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import returns from '~/apollo/queries/sales/returns'

export default {
  data() {
    return {
      returns: [],
    }
  },
  apollo: {
    returns: {
      prefetch: true,
      query: returns
    }
  }, 
    head: {
      title: 'Returns'
    }
  }

</script>
