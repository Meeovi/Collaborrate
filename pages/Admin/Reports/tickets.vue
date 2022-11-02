<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/ticket/add-new-ticket"><input type="submit" class="btn btn-warning" value="Create A Ticket"></a>
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
        <tbody v-for="ticketings in ticketings" :key="ticketings.id">
          <tr>
            <td>{{ ticketings.id }}</td>
            <td>{{ ticketings.name }}</td>
            <td>{{ ticketings.severity }}</td>
            <td>{{ ticketings.department }}</td>
            <td>{{ ticketings.location }}</td>
            <td>{{ ticketings.level }}</td>
            <td>{{ ticketings.priority }}</td>
            <td>{{ ticketings.requester }}</td>
            <td>{{ ticketings.ticket_type }}</td>
            <td>{{ ticketings.status }}</td>
            <td>{{ ticketings.created_at }}</td>
            <td>{{ ticketings.date_modified }}</td>
            <td><a :href="`/admin/edit/ticket/${ticketings.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 // eslint-disable-next-line camelcase
 import  ticketings from '~/graphql/query/ticketing'

export default {
  data() {
    return {
      ticketings: [],
    }
  },
  apollo: {
    ticketings: {
      prefetch: true,
      query: ticketings
    }
  }, 
    head: {
      title: 'Tickets'
    }
  }

</script>
