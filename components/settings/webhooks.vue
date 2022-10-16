<template>
    <div class="accordion-item">
        <h2 id="flush-headingSeven" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
            Webhooks
          </button>
        </h2>
        <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table id="table" data-toggle="table" class="table">
                <thead class="table table-dark">
                  <tr>
                    <th>NAME</th>
                    <th>Url</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-for="webhooks in webhooks" :key="webhooks.id">
                  <tr>
                    <td>{{ webhooks.name }}</td>
                    <td>{{ webhooks.url }}</td>
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
import webhooks from '~/graphql/queries/system/webhooks'

export default {
  data() {
    return {
      webhooks: [],
    }
  },
  apollo: {
    webhooks: {
      prefetch: true,
      query: webhooks
    }
  }, 
}
</script>