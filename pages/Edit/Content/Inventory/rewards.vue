<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/reward/add-new-rewards"><input type="submit" class="btn btn-warning" hint="Create A Reward"></a>
      </div>
</nav>
<br>
    <div class="table table-responsive">
        <v-table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Reward Name</th>
            <th>Expiration</th>
            <th>Level</th>
            <th>Category</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="rewards in findManyRewards" :key="rewards.id">
          <tr>
            <td>{{ rewards.id }}</td>
            <td>{{ rewards.name }}</td>
            <td>{{ rewards.expiration }}</td>
            <td>{{ rewards.level }}</td>
            <td>{{ rewards.categories }}</td>
            <td>{{ rewards.created_at }}</td>
            <td><a :href="`/admin/edit/reward/${rewards.id}`">View</a></td>
          </tr>
        </tbody>
      </v-table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  findManyRewards from '../../graphql/query/findManyRewards'

export default {
  data() {
    return {
      findManyRewards: [],
    }
  },
  apollo: {
    findManyRewards: {
      prefetch: true,
      query: findManyRewards
    }
  }, 
    head: {
      title: 'Rewards'
    }
  }

</script>
