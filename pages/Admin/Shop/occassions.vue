/* eslint-disable vue/order-in-components */
<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-occassion"><input type="button" class="btn btn-warning" value="Add New Occassion"></a>
        
</div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Occassion ID</th>
            <th>Occassion Name</th>
            <th>Occassion Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="occassions in allOccassionsList" :key="occassions.id">
          <tr>
            <td>{{ occassions.id }}</td>
            <td>{{ occassions.name }}</td>
            <td>{{ occassions.code }}</td>
            <td><a :href="`/admin/edit/occassion/${occassions.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  allOccassionsList from '~/apollo/queries/shop/occassions.gql'

export default {
  data() {
    return {
      allOccassionsList: [],
    }
  },
  apollo: {
    allOccassionsList: {
      prefetch: true,
      query: allOccassionsList
    }
  }, 
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Occassions'
    }
  }

</script>
