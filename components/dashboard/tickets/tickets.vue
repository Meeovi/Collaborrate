<template>
    <div class="col">
        <div class="table table-responsive table-bordered orderTable col">
                <h4>Recent Tickets</h4>
                <table class="table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Assign To</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>Severity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ticket in ticketings" :key="ticket.id">
                            <td>{{ ticket.name }}</td>
                            <td>{{ ticket.location }}</td>
                            <td>{{ ticket.assigned_to }}</td>
                            <td>{{ ticket.department }}</td>
                            <td>{{ ticket.status }}</td>
                            <td>{{ ticket.severity }}</td>
                            <td><a :href="`/admin/edit/ticket/${ticket.id}`">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script>
import gql from 'graphql-tag';

const ticketings = gql`{
    ticketings {
    name
    severity
    location
    assigned_to
    department
    status
  }
}`
export default {
  apollo: {
    ticketings: {
      query: ticketings,
      prefetch: true,
    },
  },
}
</script>

<style scoped>

</style>