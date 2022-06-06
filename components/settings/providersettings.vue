<template>
    <div class="accordion-item">
        <h2 id="flush-headingFive" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
            Login Providers
          </button>
        </h2>
        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table id="table" data-toggle="table" class="table">
                <thead class="table table-dark">
                  <tr>
                    <th>NAME</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody v-for="providers in providers" :key="providers.id">
                  <tr>
                    <td>{{ providers.icon }}</td>
                    <td>{{ providers.name }}</td>
                    <td>{{ providers.active }}</td>
                    <td><button type="button" class="btn btn-primary" data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal">Edit</button></td>
                    <div id="exampleModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 id="exampleModalLabel" class="modal-title">Edit Provider</h5>
                            <button type="button" class="btn-close" data-mdb-dismiss="modal"
                              aria-label="Close"></button>
                          </div>
                          <div class="modal-body">...</div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Save</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import providers from '~/apollo/queries/system/providers'

export default {
  data() {
    return {
      providers: [],
    }
  },
  apollo: {
    providers: {
      prefetch: true,
      query: providers
    }
  }, 
}
</script>