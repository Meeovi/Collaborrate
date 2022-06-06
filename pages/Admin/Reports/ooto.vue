<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/add-new/add-new-ooto">
          <FormulateInput type="button">Create Out of Office</FormulateInput>
        </a>
      </div>
    </nav>
    <br>
    <!-- OOTO Tracker -->
    <div class="table table-responsive table-bordered orderTable col">
      <h4>OOTO Tracker</h4>
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
          <tr v-for="ooto in ooto" :key="ooto">
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
  import ooto from '~/apollo/queries/system/ooto'

  export default {
    data() {
      return {
        ooto: [],
      }
    },
    apollo: {
      ooto: {
        prefetch: true,
        query: ooto
      },
    },
    head: {
      title: 'Out of the Office Tracker'
    }
  }

</script>
