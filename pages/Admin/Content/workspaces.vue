<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-workspace"><input type="submit" class="btn btn-warning" value="Add New Workspace"></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Workspace ID</th>
            <th>Workspace Code</th>
            <th>Workspace Name</th>
            <th>Workspace Public</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="workspaces in workspaces" :key="workspaces.id">
          <tr>
            <td>{{ workspaces.id }}</td>
            <td>{{ workspaces.code }}</td>
            <td>{{ workspaces.name }}</td>
            <td>{{ workspaces.isPublic }}</td>
            <td>{{ workspaces.author }}</td>
            <td><a :href="`/admin/edit/workspace/${workspaces.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import  workspaces from '~/graphql/queries/content/workspaces'

export default {
  data() {
    return {
      workspaces: [],
    }
  },
  apollo: {
    workspaces: {
      prefetch: true,
      query: workspaces
    }
  },
    head: {
      title: 'Workspaces'
    }
  }

</script>
