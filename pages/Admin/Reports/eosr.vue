<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/reports/add-new-eosr"><input type="submit" class="btn btn-warning" value="Create End of Shift Report"></a>
        
      </div>
    </nav>
    
    <br>
    <div class="table table-responsive">
      <table id="table" data-toggle="table" class="table">
        <thead class="table table-dark">
          <tr>
            <th>Created On</th>
            <th>Login</th>
            <th>WHID</th>
            <th>Next Shift</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="eosr in allEndofshiftsList" :key="eosr.id">
          <tr>
            <td>{{ eosr.createdAt }}</td>
            <td>{{ eosr.login }}</td>
            <td>{{ eosr.whid }}</td>
            <td>{{ eosr.nextShift }}</td>
            <td><a :href="`/admin/edit/eosr/${eosr.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import  allEndofshiftsList from '~/apollo/queries/reports/eosr'

  export default {
    data() {
      return {
        allEndofshiftsList: [],
      }
    },
    apollo: {
      allEndofshiftsList: {
        prefetch: true,
        query: allEndofshiftsList
      },
    },
    head: {
      title: 'End of Shift Report'
    }
  }

</script>
