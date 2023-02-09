<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/Admin/Add-new/add-new-return"><input type="submit" class="btn btn-warning" hint="New Return Request"></a>
        
      </div>
    </nav>
<br>
    <div class="table table-responsive">
      <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Returns ID</th>
            <th>Returns Name</th>
            <th>Days of Return</th>
            <th>Returns Prefix</th>
            <th>Return Created</th>
            <th>Return Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="returns in findManyReturns" :key="returns.id">
          <tr>
            <td>{{ returns.id }}</td>
            <td>{{ returns.name }}</td>
            <td>{{ returns.validity }}</td>
            <td>{{ returns.return_prefix }}</td>
            <td>{{ returns.created_at }}</td>
            <td>{{ returns.type }}</td>
            <td><a :href="`/admin/edit/return/${returns.id}`">View</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
 import  findManyReturns from '../../graphql/query/findManyReturns'

export default {
  data() {
    return {
      findManyReturns: [],
    }
  },
  apollo: {
    findManyReturns: {
      prefetch: true,
      query: findManyReturns
    }
  }, 
    head: {
      title: 'Returns'
    }
  }

</script>
