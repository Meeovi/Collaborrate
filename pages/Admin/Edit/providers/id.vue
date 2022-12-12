<template>
  <div>
    <table id="table" data-toggle="table" class="table">
      <tbody>
        <tr>
          <td>Apple</td>
          <td>{{ article.name }}</td>
          <td><input type="submit" class="btn btn-primary fas fa-pencil" data-mdb-toggle="modal"
              data-mdb-target="#exampleModal"></td>
          <div id="exampleModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 id="exampleModalLabel" class="modal-title">Edit Provider > Apple</h5>
                  <input type="submit" class="btn-close" data-mdb-dismiss="modal" aria-value="Close">
                </div>
                <div class="modal-body">
                  <form id="input_0" class="formkit-form" name="form_1">
                    <div class="form-body">
                      <div class="formkit-outer" data-type="email">
                        <div class="formkit-wrapper">
                          <label for="input_1" class="formkit-label">Client ID</label>
                          <div class="formkit-inner">
                            <input type="email" class="formkit-input" name="email_2" id="input_1" placeholder="TEXT">
                          </div>
                        </div>
                      </div>
                      <div class="formkit-outer" data-type="text">
                        <div class="formkit-wrapper">
                          <label for="input_2" class="formkit-label">Client Secret</label>
                          <div class="formkit-inner">
                            <input type="text" class="formkit-input" name="text_3" id="input_2" placeholder="TEXT">
                          </div>
                        </div>
                      </div>
                      <div class="formkit-outer" data-type="textarea">
                        <div class="formkit-wrapper">
                          <label for="input_3" class="formkit-label">Host URI (Subdomain)</label>
                          <div class="formkit-inner">
                            <input type="text" class="formkit-input" name="text_3" id="input_2">
                          </div>
                        </div>
                      </div>
                      <div class="formkit-outer" data-type="textarea">
                        <div class="formkit-wrapper">
                          <label for="input_3" class="formkit-label">The redirect URL to your front-end app</label>
                          <div class="formkit-inner">
                            <input type="text" class="formkit-input" name="text_3" id="input_2">
                          </div>
                        </div>
                      </div>
                      <div class="formkit-outer" data-type="textarea">
                        <div class="formkit-wrapper">
                          <label for="input_3" class="formkit-label">The redirect URL to add in your cas application configurations</label>
                          <div class="formkit-inner">
                            <input type="text" class="formkit-input" name="text_3" id="input_2" placeholder="/connect/apple/callback" disabled>
                          </div>
                        </div>
                      </div>
                      <details>
                        <summary>Form data</summary>
                        <pre>{}</pre>
                      </details>
                    </div>
                    <div class="modal-footer">
                      <input type="submit" class="btn btn-secondary" data-mdb-dismiss="modal" value="Cancel">
                      <input type="submit" class="btn btn-primary" value="Save">
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {

  }

</script>
