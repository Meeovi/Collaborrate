<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/reports/add-new-schedule"><FormulateInput type="button">Create New Schedule Request</FormulateInput></a>
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
            <th>Notes</th>
            <th>Need by Date</th>
            <th>How Many People Needed?</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sit</td>
            <td>Amet</td>
            <td>Consectetur</td>
            <td>Consectetur</td>
            <td>Consectetur</td>
            <td>Consectetur</td>
            <td><a :href="`/admin/edit/agreement/${agreements.id}`">View</a></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>

  export default {

    head: {
      title: 'Team Scheduler'
    }
  }

</script>
