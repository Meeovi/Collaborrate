<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/event/add-new-event"><input type="submit" class="btn btn-warning" value="Add New Event"></a>
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
            <th>Invitation Customer Name</th>
            <th>Invitation Grand Total Purchased</th>
            <th>Event Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="events in findManyEvents" :key="events.id">
          <tr>
            <td>{{ events.id }}</td>
            <td>{{ events.name }}</td>
            <td>{{ events.start }} - {{ events.end }}</td>
            <td>{{ events.tickets }}</td>
            <td>{{ events.city }} {{ events.state }} {{ events.country }}</td>
            <td>{{ events.invitationCustomerName }}</td>
            <td>{{ events.invitationGrandTotalPurchased }}</td>
            <td>{{ events.created_at }}</td>
            <td><a :href="`/admin/edit/event/${events.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import  findManyEvents from '~/graphql/query/findManyEvents'

export default {
  data() {
    return {
      findManyEvents: [],
    }
  },
  apollo: {
    findManyEvents: {
      prefetch: true,
      query: findManyEvents
    }
  },
    head: {
      title: 'Events'
    }
  }

</script>
