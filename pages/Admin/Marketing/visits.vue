<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-visit"><input type="button" class="btn btn-warning" value="Create A Visit"></a>
      </div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Location</th>
            <th>Emergency</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="visits in allVisitsList" :key="visits.id">
          <tr>
            <td>{{ visits.id }}</td>
            <td>{{ visits.username }}</td>
            <td>{{ visits.location }}</td>
            <td>{{ visits.emergency }}</td>
            <td>{{ visits.start_date }}</td>
            <td>{{ visits.end_date }}</td>
            <td>{{ visits.reason }}</td>
            <td>{{ visits.created_at }}</td>
            <td><a :href="`/admin/edit/visit/${visits.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  allVisitsList from '~/apollo/queries/marketing/visits'

export default {
  data() {
    return {
      allVisitsList: [],
    }
  },
  apollo: {
    allVisitsList: {
      prefetch: true,
      query: allVisitsList
    }
  }, 
    head: {
      title: 'Visits'
    }
  }

</script>
