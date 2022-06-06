<template>
    <div class="accordion-item">
        <h2 id="flush-headingFive" class="accordion-header">
          <button class="accordion-button" type="button" data-mdb-toggle="collapse"
            data-mdb-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
            Import Content
          </button>
        </h2>
        <div id="flush-collapseFive" class="accordion-collapse" aria-labelledby="flush-headingFive"
          data-mdb-parent="#accordionFlushExample">
          <div class="accordion-body">
            <div class="table table-responsive">
              <table id="table" data-toggle="table" class="table">
                <thead class="table table-dark">
                  <tr>
                    <th>Importer Name</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody v-for="importm in importm" :key="importm.id">
                  <tr>
                    <td>{{ importm.name }}</td>
                    <td><button type="button" class="btn btn-primary" data-mdb-toggle="modal"
                        data-mdb-target="#exampleModal">Import</button></td>
                    <div id="exampleModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 id="exampleModalLabel" class="modal-title">Edit Import</h5>
                            <button type="button" class="btn-close" data-mdb-dismiss="modal"
                              aria-label="Close"></button>
                          </div>
                          <div class="modal-body">...</div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Import</button>
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
import importm from '~/apollo/queries/system/importm'

export default {
  data() {
    return {
      importm: [],
    }
  },
  apollo: {
    importm: {
      prefetch: true,
      query: importm
    }
  }, 
  head: {
      title: 'Import Management'
  }
}
</script>