<template>
  <div>
    <section class="text-center">
        <div class="row">
          <div class="col-xl-4 mb-4">
            <div class="card">
              <div class="card-header bg-light border-0 py-3">
                <p class="mb-0"><strong>Users & Sessions</strong></p>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-around">
                  <div>
                    <p class="mb-2">Users</p>
                    <h5>38.6K</h5>
                    <p class="text-success small">
                      <i class="fas fa-caret-up me-1"></i><span>72.0%</span>
                    </p>
                  </div>
                  <div>
                    <p class="mb-2">Sessions</p>
                    <h5>50.9K</h5>
                    <p class="text-success small">
                      <i class="fas fa-caret-up me-1"></i><span>82.0%</span>
                    </p>
                  </div>
                  <div>
                    <p class="mb-2">New Users</p>
                    <h5>34.0K</h5>
                    <p class="text-danger small">
                      <i class="fas fa-caret-down me-1"></i><span>12.0%</span>
                    </p>
                  </div>
                </div>

                <div id="chart-users-sessions"></div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 mb-4">
            <div class="card">
              <div class="card-header bg-light border-0 py-3">
                <p class="mb-0"><strong>Revenue & Conversion Rate</strong></p>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-around">
                  <div>
                    <p class="mb-2">Product Revenue</p>
                    <h5>$5.35KK</h5>
                    <p class="text-success small">
                      <i class="fas fa-caret-up me-1"></i><span>-21.6%</span>
                    </p>
                  </div>
                  <div>
                    <p class="mb-2">Transactions</p>
                    <h5>88</h5>
                    <p class="text-danger small">
                      <i class="fas fa-caret-down me-1"></i><span>-22.8%</span>
                    </p>
                  </div>
                  <div>
                    <p class="mb-2">Conversion Rate</p>
                    <h5>0.2%</h5>
                    <p class="text-danger small">
                      <i class="fas fa-caret-down me-1"></i><span>-1.7%</span>
                    </p>
                  </div>
                </div>

                <div id="chart-revenue-conversion"></div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 mb-4">
            <div class="card">
              <div class="card-header bg-light border-0 py-3">
                <p class="mb-0"><strong>Site Health</strong></p>
              </div>
              <div class="card-body">
                <div class="d-flex justify-content-around">
                  <div>
                    <p class="mb-2">Bounce Rate</p>
                    <h5>41.4%</h5>
                    <p class="text-success small">
                      <i class="fas fa-caret-down me-1"></i><span>-3.3%</span>
                    </p>
                  </div>
                  <div>
                    <p class="mb-2">Avg. Session Duration</p>
                    <h5>03:20</h5>
                    <p class="text-success small">
                      <i class="fas fa-caret-up me-1"></i><span>3.6%</span>
                    </p>
                  </div>
                  <div>
                    <p class="mb-2">Avg. Page Load Time</p>
                    <h5>3.9s</h5>
                    <p class="text-danger small">
                      <i class="fas fa-caret-up me-1"></i><span>12.0%</span>
                    </p>
                  </div>
                </div>

                <div id="chart-site-health"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->

      <!--Section: Content-->
      <section class="text-center">
        <div class="row">
          <div class="col-xl-4 mb-4">
            <div class="card">
              <div class="card-header bg-light border-0 py-3">
                <p class="mb-0"><strong>Device Performance</strong></p>
              </div>
              <div class="card-body">
                <div id="chart-device-performance"></div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 mb-4">
            <div class="card">
              <div class="card-header bg-light border-0 py-3">
                <p class="mb-0"><strong>Transactions</strong></p>
              </div>
              <div class="card-body">
                <div id="chart-transactions"></div>
              </div>
            </div>
          </div>

          <div class="col-xl-4 mb-4">
            <div class="card">
              <div class="card-header bg-light border-0 py-3">
                <p class="mb-0"><strong>Sessions</strong></p>
              </div>
              <div class="card-body">
                <div id="chart-sessions"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->
  </div>
</template>

<script>

</script>

<style scoped>

</style>
