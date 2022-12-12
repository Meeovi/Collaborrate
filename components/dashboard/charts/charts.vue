<template>
  <!-- Container for demo purpose -->
  <div class="container my-1 py-2">

    <!-- Section: Design Block -->
    <section class="mb-10">
      <h5 class="mb-4">
        <span>Metrics Overview</span><br />
      </h5>

      <div class="row">
        <div class="col-md-4 mb-4 mb-md-0">
          <canvas v-for="tickets in ticketings" :key="tickets.id" data-mdb-chart="bar" data-mdb-dataset-label="Tickets"
            :data-mdb-labels="['Sev 1', 'Sev 2' , 'Sev 3' , 'Sev 4' , 'Sev 5' , 'Patrol' , 'Investigate ']"
            data-mdb-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"></canvas>
        </div>
        <div class="col-md-4 mb-4 mb-md-0">
          <div class="card">
            <div class="card-body" v-for="tickets in ticketings" :key="tickets.id">
              <a class="mb-1" href="/admin/content/projects">Projects</a>
              <h2 class="mb-0 text-primary">{{ tickets.id }}</h2>
              <p class="text-muted mb-0 d-flex align-items-center justify-content-between">
                <span class="badge rounded-pill badge-success fw-normal"><i class="fas fa-arrow-up fa-sm me-1"></i>
                  <span style="font-size: 0.875rem">2.32</span></span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body" v-for="tickets in ticketings" :key="tickets.id">
              <a class="mb-1" href="/admin/marketing/events">Events</a>
              <h2 class="mb-0 text-primary">{{ tickets.id }}</h2>
              <p class="text-muted mb-0 d-flex align-items-center justify-content-between">
                <span class="badge rounded-pill badge-danger fw-normal"><i class="fas fa-arrow-down fa-sm me-1"></i>
                  <span style="font-size: 0.875rem">2.04%</span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->

  </div>
  <!-- Container for demo purpose -->
</template>

<script>
  import gql from 'graphql-tag';
  import ticketings from '~/graphql/query/ticketings'

  export default {
    apollo: {
      ticketing: {
        query: ticketings,
        prefetch: true,
      },
      ticketing: {
        query: ticketings,
        prefetch: true,
      },
    },
  }

</script>

<style scoped>

</style>
