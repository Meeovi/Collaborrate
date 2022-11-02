<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/deepdive/add-new-deepdive"><input type="submit" class="btn btn-warning" value="Create new Deep Dive"></a>
        
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
        <tbody v-for="deepdive in deepdives" :key="deepdive.id">
          <tr>
            <td>{{ deepdive.id }}</td>
            <td>{{ deepdive.login }}</td>
            <td>{{ deepdive.start_date }}</td>
            <td>{{ deepdive.end_date }}</td>
            <td>{{ deepdive.content }}</td>
            <td>{{ deepdive.attendees }}</td>
            <td>{{ deepdive.created_at }}</td>
            <td><a :href="`/admin/edit/deep-dive/${deepdive.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import  deepdives from '~/graphql/query/deepdive'

export default {
  data() {
    return {
      deepdives: [],
    }
  },
  apollo: {
    deepdives: {
      prefetch: true,
      query: deepdives
    }
  }, 
    head: {
      title: 'Deep Dive'
    }
  }

</script>
