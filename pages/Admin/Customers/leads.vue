<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-lead"><FormulateInput type="button">Add New Lead</FormulateInput></a>
        
      </div>
    </nav>
    <br>
    
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Account Name</th>
            <th>Office Phone</th>
            <th>Email</th>
            <th>User</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="leads in leads" :key="leads.id">
          <tr>
            <td>{{ leads.customer_name }}</td>
            <td>{{ leads.status }}</td>
            <td>{{ leads.account_name }}</td>
            <td>{{ leads.office_phone }}</td>
            <td>{{ leads.email }}</td>
            <td>{{ leads.referred_by }}</td>
            <td>{{ leads.created_at }}</td>
            <td><a :href="`/admin/edit/leads/${leads.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import leads from '~/apollo/queries/customers/leads'

export default {
   data() {
    return {
      leads: [],
    }
  },
  apollo: {
    leads: {
      prefetch: true,
      query: leads
    },
  }, 
    head: {
      title: 'Leads'
    }
  }

</script>
