<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-state"><FormulateInput type="button">Add New State</FormulateInput></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>State ID</th>
            <th>State Title</th>
            <th>Description</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="states in states" :key="states.id">
          <tr>
            <td>{{ states.id }}</td>
            <td>{{ states.name }}</td>
            <td>{{ states.description }}</td>
            <td>{{ states.country }}</td>
            <td><a :href="`/admin/edit/states/${states.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import states from '~/apollo/queries/shop/states'

export default {
  data() {
    return {
      states: [],
    }
  },
  apollo: {
    states: {
      prefetch: true,
      query: states
    }
  },
    head: {
      title: 'States'
    }
  }

</script>
