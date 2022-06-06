<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        
      </div>
    </nav>
<br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Statistics ID</th>
            <th>Name</th>
            <th>Expiration</th>
            <th>Coupons</th>
            <th>Categories</th>
            <th>Rewards</th>
            <th>Products</th>
            <th>Users</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="statistics in statistics" :key="statistics">
          <tr>
            <td>{{ statistics.id }}</td>
            <td>{{ statistics.name }}</td>
            <td>{{ statistics.expiration }}</td>
            <td>{{ statistics.coupons }}</td>
            <td>{{ statistics.categories }}</td>
            <td>{{ statistics.rewards }}</td>
            <td>{{ statistics.products }}</td>
            <td>{{ statistics.users }}</td>
            <td>Amet</td>
            <td>Consectetur</td>
            <td><a :href="`/admin/edit/statistic/${statistics.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import statistics from '~/apollo/queries/reports/statistics'

export default {
  data() {
    return {
      statistics: [],
    }
  },
  apollo: {
    statistics: {
      prefetch: true,
      query: statistics
    }
  }, 
    head: {
      title: 'Statistics'
    }
  }

</script>
