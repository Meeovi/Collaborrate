<template>
  <div>
    <div class="container my-0 py-0">
      <section class="mb-10">
        <h5 class="mb-4">Create A New Dashboard</h5>
        <div class="row">
          <div class="col-md-4 mb-4 mb-md-0" v-for="dashboards in findManyDashboards" :key="dashboards.id">
            <a :href="`/admin/edit/dashboard/${dashboards.id}`">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <div class="p-3 badge-primary rounded-4">
                        <i class="fas fa-hand-point-up fa-lg fa-fw"></i>
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-4">
                      <p class="text-muted mb-1">{{ dashboards.name }}</p>
                      <h2 class="mb-0">
                        {{ dashboards.content }}
                        <span class="text-success" style="font-size: 0.875rem"><i class="fas fa-arrow-up fa-sm"></i>
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </a><br>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import findManyDashboards from '~/graphql/query/findManyDashboards'

  export default {
    data() {
      return {
        findManyDashboards: [],
      }
    },
    apollo: {
      findManyDashboards: {
        prefetch: true,
        query: findManyDashboards
      }
    },
    head: {
      title: 'Create A New Dashboard'
    }
  }

</script>
