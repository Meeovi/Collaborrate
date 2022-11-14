<template>
  <div class="modal-content">
    <div v-for="mediamanager in mediamanager" :key="mediamanager.id" class="modal-header">
      <h5 id="exampleModalLabel" class="modal-title">
        Edit {{ mediamanager.name }}
      </h5>
      <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
    </div>
    <div class="modal-body">
      <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
          <div class="col-9">
            <div id="v-tabs-tabContent" class="tab-scope">
              <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
                <div class="table table-responsive">
                  <table class="table">
                    <tbody class="row">
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="media" type="file" label="Select an media to upload" />
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="name" type="text" required label="Media Name" />{{ mediamanager.name }}
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="keywords" type="text" label="Media Keywords" />{{ mediamanager.keywords }}
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="content_type" label="Content Type" type="text" />{{ mediamanager.content_type }}
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="copyright" type="text" label="Copyright" />{{ mediamanager.copyright }}
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="dimensions" type="text" label="Dimensions" />{{ mediamanager.dimensions }}
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="expiration_date" type="datetime-local" label="Expiration Date" />{{ mediamanager.expiration_date }}
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="versions" type="text" label="Version" />{{ mediamanager.versions }}
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="comment" type="textarea" label="Comment" />{{ mediamanager.comment }}
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="watermark_name" type="text" label="Watermark Name" />{{ mediamanager.name }}
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="watermark_media" type="image" label="Upload your watermark image" />
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="watermark_description" type="textarea" label="Watermark Description" />{{ mediamanager.watermark_description }}
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <label for="customers">Author(s)</label><br>
                          <select id="category" v-model="author" name="template" class="form-category">
                            <option v-for="customers in customers" :key="customers" :value="customers">
                              {{ customers.name }}
                            </option>{{ mediamanager.author }}
                          </select>
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <label for="brands">Brands</label><br>
                          <select id="category" v-model="brands" name="template" class="form-category">
                            <option v-for="brands in brands" :key="brands" :value="brands">
                              {{ brands.name }}
                            </option>{{ mediamanager.brands }}
                          </select>
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <label for="users">Members</label><br>
                          <select id="category" v-model="members" name="template" class="form-category">
                            <option v-for="users in users" :key="users" :value="users">
                              {{ users.name }}
                            </option>{{ mediamanager.members }}
                          </select>
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <label for="agreements">Agreements</label><br>
                          <select id="category" v-model="agreements" name="template" class="form-category">
                            <option v-for="agreements in agreements" :key="agreements" :value="agreements">
                              {{ agreements.name }}
                            </option>{{ mediamanager.agreements }}
                          </select>
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <label for="tags">Tags</label><br>
                          <select id="category" v-model="tags" name="template" class="form-category">
                            <option v-for="tags in tags" :key="tags" :value="tags">
                              {{ tags.name }}
                            </option>{{ mediamanager.tags }}
                          </select>
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <label for="workspace">Workspace</label><br>
                          <select id="category" v-model="author" name="template" class="form-category">
                            <option v-for="workspace in workspace" :key="workspace" :value="workspace">
                              {{ workspace.name }}
                            </option>{{ mediamanager.workspace }}
                          </select>
                        </td>
                      </tr>
                      <tr class="col-lg-12">
                        <td>
                          <label for="tasks">Task Name</label><br>
                          <select id="tasks" v-model="task_name" name="template" class="form-category">
                            <option v-for="tasks in tasks" :key="tasks" :value="tasks">
                              {{ tasks.name }}
                            </option>{{ mediamanager.task_name }}
                          </select>
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput
                            v-model="task_type"
                            type="select"
                            :options="{first: 'Published', second: 'In Review', third: 'Draft'}"
                            label="Task Type"
                          />
                        </td>
                      </tr>
                      <tr class="col-lg-6">
                        <td>
                          <FormulateInput v-model="task_description" type="textarea" label="Task Description" />
                        </td>
                      </tr>
                      <tr class="col-lg-12">
                        <td>
                          <label for="members">Related Products</label><br>
                          <select id="members" v-model="products" name="template" class="form-category">
                            <option v-for="members in products" :key="members" :value="members">
                              {{ members.name }}
                            </option>{{ mediamanager.products }}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <br><br>
                <div id="accordionExample" class="accordion">
                  <div class="accordion-item">
                    <h2 id="headingOne" class="accordion-header">
                      <FormulateInput
                        class="accordion-button"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Content
                      </FormulateInput>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-mdb-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div class="table table-responsive">
                          <table class="table">
                            <tbody>
                              <tr>
                                <td style="text-align: right;">
                                  Albums
                                </td>
                                <td>
                                  <div class="form-check form-switch">
                                    <FormulateInput v-model="albums" type="text" />{{ mediamanager.albums }}
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td style="text-align: right;">
                                  Description
                                </td>
                                <td>
                                  <div class="form-check form-switch">
                                    <vue-simplemde id="longDescription" v-model="description" />{{ mediamanager.description }}
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FormulateForm>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary" @submit.prevent="addMediamanager">
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
/* // eslint-disable-next-line camelcase
import gql from 'graphql-tag'
//import mediamanager from '~/graphql/mutation/createOneMediamanager'

const DELETE_MEDIAMANAGER = gql`
  mutation delete_mediamanager($id: Int!){
  delete_mediamanager(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`

const UPDATE_MEDIAMANAGER = gql`
  mutation update_mediamanager($id: Int!){
  update_mediamanager(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`

export default {
  head: {
    name: 'Edit Media'
  },
  mounted () {
    this.forceRerender()
  },
  // eslint-disable-next-line vue/order-in-components
  data () {
    return {
      componentKey: 0
    }
  },
  methods: {
    async deleteMediamanager (mediamanager) {
      await this.$apollo.mutate({
        mutation: DELETE_MEDIAMANAGER,
        variables: {
          id: mediamanager.id
        },
        refetchQueries: [
          {
            query: mediamanager
          }

        ]
      }).then(() => {
        this.$router.push({ path: '../../admin/content/mediamanager' })
      }).catch(err => console.log(err))
    },
    async updateMediamanager (mediamanager) {
      await this.$apollo.mutate({
        mutation: UPDATE_MEDIAMANAGER,
        variables: {
          id: mediamanager.id
        },
        refetchQueries: [
          {
            query: mediamanager
          }

        ]
      })
    },
    forceRerender () {
      this.componentKey += 1
    }
  },
  apollo: {
    mediamanager: {
      query: mediamanager,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
} */
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
