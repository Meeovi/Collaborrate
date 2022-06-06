<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-task"><FormulateInput type="button">Add A Task</FormulateInput></a>
      </div>
    </nav>
    <br>
    
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Subject</th>
            <th>Contact</th>
            <th>Related to</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Assigned User</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="tasks in tasks" :key="tasks.id">
          <tr>
            <td>{{ tasks.subject }}</td>
            <td>{{ tasks.contact }}</td>
            <td>{{ tasks.related_to }}</td>
            <td>{{ tasks.due_date }}</td>
            <td>{{ tasks.priority }}</td>
            <td>{{ tasks.assigned_to }}</td>
            <td>{{ tasks.created_at }}</td>
            <td><a :href="`/admin/edit/tasks/${tasks.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import tasks from '~/apollo/queries/customers/tasks'

export default {
   data() {
    return {
      tasks: [],
      website: [],
      categories: []
    }
  },
  apollo: {
    tasks: {
      prefetch: true,
      query: tasks
    },
  }, 
    head: {
      title: 'Tasks'
    }
  }

</script>
