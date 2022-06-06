<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-survey"><FormulateInput type="button">Create A Survey</FormulateInput></a>        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table data-toggle="table" id="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Survey ID</th>
            <th>Survey Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Assigned to</th>
            <th>Dated Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="surveys in surveys" :key="surveys.id">
          <tr>
            <td>{{ surveys.id }}</td>
            <td>{{ surveys.name }}</td>
            <td>{{ surveys.description }}</td>
            <td>{{ surveys.status }}</td>
            <td>{{ surveys.assigned_to }}</td>
            <td>{{ surveys.created_at }}</td>
            <td><a :href="`/admin/edit/surveys/${surveys.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import surveys from '~/apollo/queries/reports/surveys'

export default {
  data() {
    return {
      surveys: [],
    }
  },
  apollo: {
    surveys: {
      prefetch: true,
      query: surveys
    }
  }, 
    head: {
      title: 'Surveys'
    }
  }

</script>
