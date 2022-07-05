<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-survey"><input type="submit" class="btn btn-warning" value="Create A Survey"></a>        
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
        <tbody v-for="surveys in allSurveysList" :key="surveys.id">
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
 import  allSurveysList from '~/apollo/queries/reports/surveys'

export default {
  data() {
    return {
      allSurveysList: [],
    }
  },
  apollo: {
    allSurveysList: {
      prefetch: true,
      query: allSurveysList
    }
  }, 
    head: {
      title: 'Surveys'
    }
  }

</script>
