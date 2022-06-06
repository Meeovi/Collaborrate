<template>
    <div class="accordion-item">
        <h2 id="flush-headingSix" class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
            API Tokens
          </button>
        </h2>
        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table id="table" data-toggle="table" class="table">
                <thead class="table table-dark">
                  <tr>
                    <th>NAME</th>
                    <th>Description</th>
                    <th>Token Type</th>
                    <th>Created At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody v-for="apitokens in apitokens" :key="apitokens.id">
                  <tr>
                    <td>{{ apitokens.name }}</td>
                    <td>{{ apitokens.description }}</td>
                    <td>{{ apitokens.token_type }}</td>
                    <td>{{ apitokens.created_at }}</td>
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
import apitokens from '~/apollo/queries/system/apitokens'

export default {
  data() {
    return {
      apitokens: [],
    }
  },
  apollo: {
    apitokens: {
      prefetch: true,
      query: apitokens
    }
  }, 
}
</script>