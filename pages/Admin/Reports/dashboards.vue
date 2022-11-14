<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <input type="submit" class="navbar-brand btn btn-warning" data-mdb-toggle="modal"
          data-mdb-target="#exampleModal" value="Create A New Dashboard">
      </div>
    </nav>

    <!-- Create A Dashboard Modal Popup -->
    <div class="modal fade dashboardModal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create A Dashboard</h5>
            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"><addNewDashboard /></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
            <!--<button type="button" class="btn btn-primary">Save changes</button>-->
          </div>
        </div>
      </div>
    </div>
    <!-- End of Create A Dashboard Modal Popup -->
    <br>
    <!-- Display Dashboards -->
    <div class="table table-responsive">
      <div class="row">
        <div class="col-sm-4" v-for="dashboards in findManyDashboards" :key="dashboards.id">
          <div class="card">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" class="card-img-top"
              :alt="dashboards.name" />
            <div class="card-body">
              Dashboard Name: <h5 class="card-title">{{ dashboards.name }}</h5>
              Category: <p class="card-text">{{ dashboards.category }}</p>
              <a :href="`/admin/edit/dashboard/${dashboards.id}`" class="btn btn-primary" target="_blank">Enter Dashboard</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import findManyDashboards from '~/graphql/query/findManyDashboards'
  import addNewDashboard from '~/components/create-dashboards/add-new-dashboard'

  export default {
    components: { addNewDashboard },
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
      title: 'Dashboard Hub'
    }
  }

</script>
