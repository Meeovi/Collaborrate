<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-deepdive"><FormulateInput type="button">Create new Deep Dive</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Deep Dive ID</th>
            <th>Login</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
            <th>Attendees</th>
            <th>Dated Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ deepdive.id }}</td>
            <td>{{ deepdive.login }}</td>
            <td>{{ deepdive.start_date }}</td>
            <td>{{ deepdive.end_date }}</td>
            <td>{{ deepdive.content }}</td>
            <td>{{ deepdive.attendees }}</td>
            <td>{{ deepdive.created_at }}</td>
            <td><a :href="`/admin/edit/deepdive/${deepdive.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import deepdive from '~/apollo/queries/reports/deepdive'

export default {
  data() {
    return {
      deepdive: [],
    }
  },
  apollo: {
    deepdive: {
      prefetch: true,
      query: deepdive
    }
  }, 
    head: {
      title: 'Deep Dive'
    }
  }

</script>
