<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/role/add-new-permission">
          <input type="submit" class="btn btn-warning" value="Create New Permission" />
        </a>

      </div>
    </nav>
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Users</th>
            <th>Permissions Name</th>
            <th>Create</th>
            <th>Read</th>
            <th>Update</th>
            <th>Delete</th>
            <th>Role</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="permissions in findManyPermissions" :key="permissions.id">
            <td>{{ permissions.users }}</td>
            <td>{{ permissions.name }}</td>
            <td>
              <input type="checkbox" disabled />{{ permissions.create }}</td>
            <td>
              <input type="checkbox" disabled />{{ permissions.read }}</td>
            <td>
              <input type="checkbox" disabled />{{ permissions.update }}</td>
            <td>
              <input type="checkbox" disabled />{{ permissions.delete }}</td>
            <td>{{ permissions.role }}</td>
            <td>{{ permissions.created_at }}</td>
            <td><a :href="`/admin/edit/permission/${permissions.id}`"><span class="fas fa-pencil"></span></a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  import  findManyPermissions from '~/graphql/query/findManyPermissions'

  export default {
    data() {
      return {
        findManyPermissions: [],
      }
    },
    apollo: {
      findManyPermissions: {
        prefetch: true,
        query: findManyPermissions
      }
    },
    head: {
      title: 'Role Manager'
    }
  }

</script>
