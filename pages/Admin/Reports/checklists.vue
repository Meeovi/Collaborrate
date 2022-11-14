<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/checklist/add-new-checklist"><input type="submit" class="btn btn-warning" value="Create A Checklist" /></a>
      </div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Region</th>
            <th>Country</th>
            <th>Regional Manager</th>
            <th>Manager</th>
            <th>Location</th>
            <th>Username</th>
            <th>Created At</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="checklist in checklists" :key="checklist.id">
          <tr>
            <td>{{ checklist.id }}</td>
            <td>{{ checklist.region }}</td>
            <td>{{ checklist.country }}</td>
            <td>{{ checklist.regional_manager }}</td>
            <td>{{ checklist.manager }}</td>
            <td>{{ checklist.location }}</td>
            <td>{{ checklist.username }}</td>
            <td>{{ checklist.created_at }}</td>
            <td>{{ checklist.type }}</td>
            <td><a :href="`/admin/edit/checklist/${checklist.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  checklists from '~/graphql/query/checklists'

export default {
  data() {
    return {
      checklists: [],
    }
  },
  apollo: {
    checklists: {
      prefetch: true,
      query: checklists
    }
  }, 
    head: {
      title: 'Checklists'
    }
  }

</script>
