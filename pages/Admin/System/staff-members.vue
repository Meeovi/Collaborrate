<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/user/add-new-user"><input type="submit" class="btn btn-warning" value="Create New User" /></a>
      </div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="users in findManyUsers" :key="users.id">
          <tr>
            <td>{{ users.id }}</td>
            <td>{{ users.first_name }}</td>
            <td>{{ users.last_name }}</td>
            <td>{{ users.email }}</td>
            <td>{{ users.username }}</td>
            <td>{{ users.created_at }}</td>
            <td><a :href="`/admin/edit/users/${users.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  findManyUsers from '~/graphql/query/findManyUsers'

export default {
  data() {
    return {
      findManyUsers: [],
    }
  },
  apollo: {
    findManyUsers: {
      prefetch: true,
      query: findManyUsers
    }
  }, 
    head: {
      title: 'Staff Members'
    }
  }

</script>
