<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-agreement"><input type="button" class="btn btn-warning" value="Create New Agreement"></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table class="table" >
        <thead class="table table-dark">
          <tr>
            <th>Agreement ID</th>
            <th>Agreement Name</th>
            <th>Agreement Excerpt</th>
            <th>Agreement Created On</th>
            <th>Agreement Updated On</th>
            <td>Agreement Type</td>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="edge in allAgreements" :key="edge.node.id">
          <tr>
            <td>{{ edge.node.id }}</td>
            <td>{{ edge.node.name }}</td>
            <td>{{ edge.node.excerpt }}</td>
            <td>{{ edge.node.created }}</td>
            <td>{{ edge.node.updated }}</td>
            <td>{{ edge.node.type }}</td>
            <td><a :href="`/admin/edit/agreement/${edge.node.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import  allAgreeements from '~/apollo/queries/sales/agreements'

export default {
  data() {
    return {
      allAgreeements: [],
    }
  },
  apollo: {
    allAgreeements: {
      prefetch: true,
      query: allAgreeements
    }
  },
    head: {
      title: 'Agreements'
    }
  }

</script>
