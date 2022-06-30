<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-agreement"><input type="button" class="btn btn-warning" value="Create New Agreement"></a>
<<<<<<< HEAD
=======
        
>>>>>>> acd45e72049d02adc615a74e9b6de518fe877971
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
        <tbody v-for="agreements in allAgreements" :key="agreements.id">
          <tr>
            <td>{{ agreements.id }}</td>
            <td>{{ agreements.name }}</td>
            <td>{{ agreements.excerpt }}</td>
            <td>{{ agreements.created }}</td>
            <td>{{ agreements.updated }}</td>
            <td>{{ agreements.type }}</td>
            <td><a :href="`/admin/edit/agreement/${agreements.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import gql from 'graphql-tag';

const query = gql`
  {
    allAgreements {
    nodes {
      id
      name
      excerpt
      created
      updated
      type
    }
  }
}
`

export default {

    head: {
      title: 'Agreements'
    }
  }

</script>
