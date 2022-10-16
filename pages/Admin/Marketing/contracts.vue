<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-contract"><input type="submit" class="btn btn-warning" value="Add New Contract"></a>
        
      </div>
    </nav>
    <br>
    
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Contract Title</th>
            <th>Status</th>
            <th>Contract Manager</th>
            <th>Account</th>
            <th>Contract Value</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="contracts in contracts" :key="contracts.id">
          <tr>
            <td>{{ contracts.contract_title }}</td>
            <td>{{ contracts.status }}</td>
            <td>{{ contracts.contract_manager }}</td>
            <td>{{ contracts.account }}</td>
            <td>{{ contracts.contract_value }}</td>
            <td>{{ contracts.start_date }}</td>
            <td>{{ contracts.end_date }}</td>
            <td><a :href="`/admin/edit/contracts/${contracts.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import  contracts from '~/graphql/queries/marketing/contracts'

export default {
   data() {
    return {
      contracts: [],
    }
  },
  apollo: {
    contracts: {
      prefetch: true,
      query: contracts
    },
  }, 
    head: {
      title: 'Contracts'
    }
  }

</script>
