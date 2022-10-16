<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-meeting"><input type="submit" class="btn btn-warning" value="Create New Meeting"></a>
        
      </div>
    </nav>
    <br>
    
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Subject</th>
            <th>Contact</th>
            <th>Related To</th>
            <th>Start Date</th>
            <th>Assigned User</th>
            <th>Location</th>
            <th>Reminders</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="meetings in meetings" :key="meetings.id">
          <tr>
            <td>{{ meetings.subject }}</td>
            <td>{{ meetings.invitees }}</td>
            <td>{{ meetings.related_to }}</td>
            <td>{{ meetings.start_date }}</td>
            <td>{{ meetings.assigned_to }}</td>
            <td>{{ meetings.location }}</td>
            <td>{{ meetings.reminders }}</td>
            <td>{{ meetings.created_at }}</td>
            <td><a :href="`/admin/edit/meetings/${meetings.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
 import  meetings from '~/graphql/queries/customers/meetings'

export default {
   data() {
    return {
      meetings: [],
    }
  },
  apollo: {
    meetings: {
      prefetch: true,
      query: meetings
    },
  }, 
    head: {
      title: 'Meetings'
    }
  }

</script>
