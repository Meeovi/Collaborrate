<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-case"><input type="submit" class="btn btn-warning" value="Create A Case"></a>        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table data-toggle="table" id="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Case ID</th>
            <th>Subject</th>
            <th>Account Name</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Assigned to</th>
            <th>Dated Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="cases in cases" :key="cases.id">
          <tr>
            <td>{{ cases.id }}</td>
            <td>{{ cases.subject }}</td>
            <td>{{ cases.account_name }}</td>
            <td>{{ cases.priority }}</td>
            <td>{{ cases.status }}</td>
            <td>{{ cases.assigned_to }}</td>
            <td>{{ cases.created_at }}</td>
            <td><a :href="`/admin/edit/cases/${cases.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import  cases from '~/graphql/queries/reports/cases'

export default {
  data() {
    return {
      cases: [],
    }
  },
  apollo: {
    cases: {
      prefetch: true,
      query: cases
    }
  }, 
    head: {
      title: 'Cases'
    }
  }

</script>
