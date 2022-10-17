<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/admin/reports/add-new-schedule"><input type="submit" class="btn btn-warning"
            value="Create New Schedule Request"></a>
      </div>
    </nav>

    <br>
    <div v-for="scheduler in schedulers" :key="scheduler.id">
      <div class="card text-center">
        <div class="card-header">{{ scheduler.whid }}</div>
        <div class="card-body">
          <h5 class="card-title">{{ scheduler.start_date }} - {{ scheduler.end_date }}</h5>
          <p class="card-text">{{ scheduler.notes }}</p>
          <a href="#" class="btn btn-primary">Accept</a>
        </div>
        <div class="card-footer text-muted">Level needed - {{ scheduler.level }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import  schedulers from '~/graphql/queries/reports/scheduler'

  export default {
    data() {
      return {
        schedulers: [],
      }
    },
    apollo: {
      schedulers: {
        prefetch: true,
        query: schedulers
      },
    },
    head: {
      title: 'Team Scheduler'
    }
  }

</script>
