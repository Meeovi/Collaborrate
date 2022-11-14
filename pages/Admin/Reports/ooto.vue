<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/edit/ooto/add-new-ooto">
          <input type="submit" class="btn btn-warning" value="Create Out of Office">
        </a>
      </div>
    </nav>
    <br>
    <!-- OOTO Tracker -->
    <div class="table table-responsive table-bordered orderTable col">
      <h4>Out of the Office Tracker</h4>
      <table class="table">
        <thead>
          <tr>
            <th>Created On</th>
            <th>Login</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Description</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ooto in ootos" :key="ooto">
            <th>{{ ooto.created_at }}</th>
            <td>{{ ooto.login }}</td>
            <td>{{ ooto.start_date }}</td>
            <td>{{ ooto.end_date }}</td>
            <td>{{ ooto.note }}</td>
            <td>{{ ooto.location }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import  ootos from '~/graphql/query/ooto'

  export default {
    data() {
      return {
        ootos: [],
      }
    },
    apollo: {
      ootos: {
        prefetch: true,
        query: ootos
      },
    },
    head: {
      title: 'Out of the Office Tracker'
    }
  }

</script>
