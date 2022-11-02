<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/target/add-new-target"><input type="submit" class="btn btn-warning" value="Add A Target"></a>
        
      </div>
    </nav>
    <br>
    
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Account Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Mobile</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="targets in findManyTargets" :key="targets.id">
          <tr>
            <td>{{ targets.id }}</td>
            <td>{{ targets.name }}</td>
            <td>{{ targets.email }}</td>
            <td>{{ targets.account_name }}</td>
            <td>{{ targets.address }}</td>
            <td>{{ targets.city }}</td>
            <td>{{ targets.state }}</td>
            <td>{{ targets.country }}</td>
            <td>{{ targets.mobile }}</td>
            <td>{{ targets.website }}</td>
            <td><a :href="`/admin/edit/targets/${targets.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import  findManyTargets from '~/graphql/query/findManyTargets'

export default {
   data() {
    return {
      findManyTargets: [],
    }
  },
  apollo: {
    findManyTargets: {
      prefetch: true,
      query: findManyTargets
    },
  }, 
    head: {
      title: 'Targets'
    }
  }

</script>
