<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-role"><FormulateInput type="button">Create New Role</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Users</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ permissions.name }}</td>
            <td>{{ permissions.content }}</td>
            <td>{{ permissions.created_at }}</td>
            <td><a :href="`/admin/edit/permissions/${permissions.id}`"><span class="fas fa-pencil"></span></a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import permissions from '~/apollo/queries/system/permissions.gql'

export default {
  data() {
    return {
      permissions: [],
    }
  },
  apollo: {
    permissions: {
      prefetch: true,
      query: permissions
    }
  }, 
    head: {
      title: 'Role Manager'
    }
  }

</script>
