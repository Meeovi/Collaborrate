<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-event"><FormulateInput type="button">Add New Event</FormulateInput></a>
        
      </div>
    </nav>

    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Event Dates</th>
            <th>Event Ticket Count</th>
            <th>Event Location</th>
            <th>Event Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="events in events" :key="events.id">
          <tr>
            <td>{{ events.id }}</td>
            <td>{{ events.name }}</td>
            <td>{{ events.start }} - {{ events.end }}</td>
            <td>{{ events.tickets }}</td>
            <td>{{ events.city }} {{ events.state }} {{ events.country }}</td>
            <td>{{ events.created_at }}</td>
            <td><a :href="`/admin/edit/event/${events.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import events from '~/apollo/queries/marketing/events'

export default {
  data() {
    return {
      events: [],
    }
  },
  apollo: {
    events: {
      prefetch: true,
      query: events
    }
  },
    head: {
      title: 'Events'
    }
  }

</script>
