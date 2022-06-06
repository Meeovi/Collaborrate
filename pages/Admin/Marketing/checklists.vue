<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-checklist"><FormulateInput type="button" label="Create A Checklist"></FormulateInput></a>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="checklist in checklist" :key="checklist.id">
          <tr>
            <td>{{ checklist.id }}</td>
            <td>{{ checklist.region }}</td>
            <td>{{ checklist.country }}</td>
            <td>{{ checklist.regional_manager }}</td>
            <td>{{ checklist.manager }}</td>
            <td>{{ checklist.location }}</td>
            <td>{{ checklist.username }}</td>
            <td>{{ checklist.created_at }}</td>
            <td><a :href="`/admin/edit/checklist/${checklist.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import checklist from '~/apollo/queries/marketing/checklists'

export default {
  data() {
    return {
      checklist: [],
    }
  },
  apollo: {
    checklist: {
      prefetch: true,
      query: checklist
    }
  }, 
    head: {
      title: 'Checklists'
    }
  }

</script>
