<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-projects"><input type="submit" class="btn btn-warning" value="Add New Project"></a>
        
      </div>
    </nav>
<br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Project Title</th>
            <th>Assignee</th>
            <th>Project Manager</th>
            <th>Start Date</th>
            <th>Expected End Date</th>
            <th>Status</th>
            <th>Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="projects in projects" :key="projects.id">
          <tr>
            <td>{{ projects.id }}</td>
            <td>{{ projects.name }}</td>
            <td>{{ projects.assignee }}</td>
            <td>{{ projects.projectmanager }}</td>
            <td>{{ projects.startDate }}</td>
            <td>{{ projects.endDate }}</td>
            <td>{{ projects.status }}</td>
            <td>{{ projects.done }}</td>
            <td><a :href="`/admin/edit/projects/${projects.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import  projects from '~/graphql/queries/content/projects'

export default {
  data() {
    return {
      projects: [],
    }
  },
  apollo: {
    projects: {
      prefetch: true,
      query: projects
    }
  }, 
    head: {
      title: 'Projects'
    }
  }

</script>
