<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-rewards"><input type="button" class="btn btn-warning" value="Create A Reward"></a>
      </div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Reward Name</th>
            <th>Expiration</th>
            <th>Level</th>
            <th>URL</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="rewards in allRewardsList" :key="rewards.id">
          <tr>
            <td>{{ rewards.id }}</td>
            <td>{{ rewards.name }}</td>
            <td>{{ rewards.expiration }}</td>
            <td>{{ rewards.level }}</td>
            <td>{{ rewards.slug }}</td>
            <td>{{ rewards.created_at }}</td>
            <td><a :href="`/admin/edit/reward/${rewards.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  allRewardsList from '~/apollo/queries/marketing/rewards'

export default {
  data() {
    return {
      allRewardsList: [],
    }
  },
  apollo: {
    allRewardsList: {
      prefetch: true,
      query: allRewardsList
    }
  }, 
    head: {
      title: 'Rewards'
    }
  }

</script>
