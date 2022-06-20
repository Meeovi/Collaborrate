<template>
  <div>
    <div class="container my-5 py-5">

      <!-- Section: Design Block -->
      <section class="mb-10">
        <h5 class="mb-4">
          <span>25 Jan 2022 - 23 Feb 2022</span><br /><small class="text-muted me-1 fw-normal">Compare to</small><small
            class="fw-normal">26 Dec 2021 - 24 Jan 2022</small>
        </h5>

        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card">
              <div class="card-body">
                <p class="mb-1">Clicks</p>
                <h2 class="mb-0 text-primary">179,333</h2>
                <p class="text-muted mb-0 d-flex align-items-center justify-content-between">
                  <span>vs 174,541</span>
                  <span class="badge rounded-pill badge-success fw-normal"><i class="fas fa-arrow-up fa-sm me-1"></i>
                    <span style="font-size: 0.875rem">12%</span></span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4 mb-md-0">
            <div class="card">
              <div class="card-body">
                <p class="mb-1">Impressions</p>
                <h2 class="mb-0 text-primary">547,987</h2>
                <p class="text-muted mb-0 d-flex align-items-center justify-content-between">
                  <span>vs 535,569</span>
                  <span class="badge rounded-pill badge-success fw-normal"><i class="fas fa-arrow-up fa-sm me-1"></i>
                    <span style="font-size: 0.875rem">2.32</span></span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <p class="mb-1">Average CTR</p>
                <h2 class="mb-0 text-primary">13.17%</h2>
                <p class="text-muted mb-0 d-flex align-items-center justify-content-between">
                  <span>vs 12.91%</span>
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
  </div>
</template>

<script>
  import statistics from '~/apollo/queries/reports/statistics'

  export default {
    data() {
      return {
        statistics: [],
      }
    },
    apollo: {
      statistics: {
        prefetch: true,
        query: statistics
      }
    },
    head: {
      title: 'Statistics'
    }
  }

</script>
