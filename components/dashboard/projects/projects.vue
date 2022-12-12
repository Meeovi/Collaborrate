<template>
  <div class="col">
    <div class="table table-responsive table-bordered projectTable col">
      <h4>Lastest Projects</h4>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Assign To</th>
            <th>Project Manager</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="projects in findManyProjects" :key="projects.id">
            <td>{{ projects.name }}</td>
            <td>{{ projects.assignee }}</td>
            <td>{{ projects.project_manager }}</td>
            <td>{{ projects.end_date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag';

  const findManyProjects = gql `{
    findManyProjects {
        name
        end_date
        project_manager
        assignee
  }
}`
  export default {
    apollo: {
      findManyProjects: {
        query: findManyProjects,
        prefetch: true,
      },
    },

  }

</script>

<style scoped>

</style>
