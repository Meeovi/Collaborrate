<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-agreement"><input type="submit" class="btn btn-warning" value="Create New Agreement"></a>
      </div>
    </nav>

    <br>
    <div class="table table-responsive">
      <table class="table">
        <thead class="table table-dark">
          <tr>
            <th>Agreement ID</th>
            <th>Agreement Name</th>
            <th>Agreement Excerpt</th>
            <th>Agreement Created On</th>
            <th>Agreement Updated On</th>
            <th>Agreement Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="agreements in findManyAgreements" :key="agreements.id">
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
import findManyAgreements from '~/graphql/queries/sales/agreements'

export default {
  data () {
    return {
      findManyAgreements: []
    }
  },
  apollo: {
    findManyAgreements: {
      prefetch: true,
      query: findManyAgreements
    }
  },
  head: {
    title: 'Agreements'
  }
}

</script>
