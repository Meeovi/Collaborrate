<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-ticket"><FormulateInput type="button" label="Create A Ticket"></FormulateInput></a>
      </div>
</nav>
<br>
    <div class="table table-responsive">
        <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>ID</th>
            <th>Ticket Name</th>
            <th>Severity</th>
            <th>Department</th>
            <th>Location</th>
            <th>Level</th>
            <th>Priority</th>
            <th>Requester</th>
            <th>Ticket Type</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Date Modified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-for="ticketing in ticketing" :key="ticketing.id">
          <tr>
            <td>{{ ticketing.id }}</td>
            <td>{{ ticketing.name }}</td>
            <td>{{ ticketing.severity }}</td>
            <td>{{ ticketing.location }}</td>
            <td>{{ ticketing.level }}</td>
            <td>{{ ticketing.priority }}</td>
            <td>{{ ticketing.requester }}</td>
            <td>{{ ticketing.ticket_type }}</td>
            <td>{{ ticketing.status }}</td>
            <td>{{ ticketing.created_at }}</td>
            <td>{{ ticketing.date_modified }}</td>
            <td><a :href="`/admin/edit/ticket/${ticketing.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import ticketing from '~/apollo/queries/marketing/ticketing'

export default {
  data() {
    return {
      ticketing: [],
    }
  },
  apollo: {
    ticketing: {
      prefetch: true,
      query: ticketing
    }
  }, 
    head: {
      title: 'Ticketing'
    }
  }

</script>
