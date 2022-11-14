<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Add New Media</h5>
      <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
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
                        <FormulateInput type="file" v-model="media" label="Select an media to upload" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="name" type="text" required label="Media Name" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="keywords" type="text" label="Media Keywords" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="content_type" label="Content Type" type="text" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="copyright" type="text" label="Copyright" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="dimensions" type="text" label="Dimensions" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="expiration_date" type="datetime-local" label="Expiration Date" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="versions" type="text" label="Version" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="comment" type="textarea" label="Comment" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="watermark_name" type="text" label="Watermark Name" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="watermark_media" type="image" label="Upload your watermark image" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="watermark_description" type="textarea" label="Watermark Description" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="customers">Author(s)</label><br>
                        <select id="category" v-model="author" name="template" class="form-category">
                          <option v-for="customers in findManyCustomers" :key="customers" :value="customers">
                            {{ customers.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="brands">Brands</label><br>
                        <select id="category" v-model="brands" name="template" class="form-category">
                          <option v-for="brands in findManyBrands" :key="brands" :value="brands">
                            {{ brands.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="users">Members</label><br>
                        <select id="category" v-model="members" name="template" class="form-category">
                          <option v-for="users in findManyUsers" :key="users" :value="users">
                            {{ users.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="agreements">Agreements</label><br>
                        <select id="category" v-model="agreements" name="template" class="form-category">
                          <option v-for="agreements in findManyAgreements" :key="agreements" :value="agreements">
                            {{ agreements.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="tags">Tags</label><br>
                        <select id="category" v-model="tags" name="template" class="form-category">
                          <option v-for="tags in findManyTags" :key="tags" :value="tags">
                            {{ tags.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="workspace">Workspace</label><br>
                        <select id="category" v-model="author" name="template" class="form-category">
                          <option v-for="workspace in findManyWorkspaces" :key="workspace" :value="workspace">
                            {{ workspace.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <label for="checklist">Task Name</label><br>
                        <select id="checklist" v-model="task_name" name="template" class="form-category">
                          <option v-for="checklist in checklists" :key="checklist" :value="checklist">
                            {{ checklist.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="task_type" type="select"
                          :options="{first: 'Published', second: 'In Review', third: 'Draft'}" label="Task Type" />
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
                            {{ members.name }}</option>
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
                    <FormulateInput class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Content
                    </FormulateInput>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="table table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Albums</td>
                              <td>
                                <div class="form-check form-switch">
                                  <FormulateInput v-model="albums" type="text" />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <vue-simplemde id="longDescription" v-model="description" />
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
      <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" @submit.prevent="addMediamanager">Save changes</button>
    </div>
  </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import findManyProducts from "~/graphql/query/findManyProducts"
  import findManyBrands from "~/graphql/query/findManyBrands"
  import findManyTags from "~/graphql/query/findManyTags"
  import findManyCustomers from "~/graphql/query/findManyCustomers"
  import findManyUsers from "~/graphql/query/findManyUsers"
  import findManyAgreements from "~/graphql/query/findManyAgreements"
  import findManyWorkspacess from "~/graphql/query/findManyWorkspaces"
  import checklists from "~/graphql/query/checklists"
  
  const ADD_MEDIAMANAGER = gql`
    mutation ($brands: String!, $products: String!, $description: String!, $workspace: String!, $albums: String!, $author: String!, $created_at: String!, $expiration_date: String!, $comment: String!, $media: String!, $copyright: String!, $content_type: String!, $dimensions: String!, $task_description: String!, $task_name: String!, $task_type: String!, $name: String!, $watermark_name: String!, $watermark_description: String!, $watermark_media: String!, $versions: String!, $keywords: String!, $members: String!, $status: String!, $tags: String!){
    createOneMediamanager(objects: {brands: $brands, products: $products, description: $description, workspace: $workspace, albums: $albums, author: $author, created_at: $created_at, expiration_date: $expiration_date, comment: $comment, media: $media, copyright: $copyright, content_type: $content_type, dimensions: $dimensions, task_description: $task_description, task_name: $task_name, task_type: $task_type, name: $name, watermark_description: $watermark_description, watermark_media: $watermark_media, watermark_name: $watermark_name, versions: $versions, keywords: $keywords, members: $members, status: $status, status: $status, tags: $tags}) {
        count
  }
}`;


  export default {
    data() {
      return {
        agreements: [ ],
        brands: [ ],
        products: [ ],
        description: " ",
        workspace: [ ],
        albums: " ",
        author: [ ],
        created_at: " ",
        expiration_date: " ",
        comment: " ",
        media: " ",
        copyright: " ",
        content_type: " ",
        dimensions: " ",
        task_description: [ ],
        task_name: " ",
        task_type: [ ],
        name: " ",
        watermark_name: " ",
        watermark_description: " ",
        watermark_media: " ",
        versions: " ",
        keywords: " ",
        members: [ ],
        status: " ",
        show: true
      }
    },

    methods: {
      async addMediamanager() {
        const agreements = this.agreements;
        const brands = this.brands;
        const products = this.products;
        const description = this.description;
        const workspace = this.workspace;
        const albums = this.albums;
        const author = this.author;
        const created_at = this.created_at;
        const expiration_date = this.expiration_date;
        const comment = this.comment;
        const media = this.media;
        const copyright = this.copyright;
        const content_type = this.content_type;
        const dimensions = this.dimensions;
        const task_description = this.task_description;
        const task_name = this.task_name;
        const task_type = this.task_type;
        const name = this.name;
        const watermark_name = this.watermark_name;
        const watermark_description = this.watermark_description;
        const watermark_media = this.watermark_media;
        const versions = this.versions;
        const keywords = this.keywords;
        const members = this.members;
        const status = this.status;


        await this.$apollo.mutate({
          mutation: ADD_MEDIAMANAGER,
          variables: {
            agreements,
            brands,
            products,
            description,
            workspace,
            albums,
            author,
            created_at,
            expiration_date,
            comment,
            media,
            copyright,
            content_type,
            dimensions,
            task_description,
            task_name,
            task_type,
            name,
            watermark_name,
            watermark_description,
            watermark_media,
            versions,
            keywords,
            members,
            status,

          },
          update: (cache, {
            data: {
              insertBrands,
              insertTags,
              insertMediamanagers,
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedBrands = insertBrands.returning;
              const insertedTags = insertTags.returning;
              const insertedMediamanagers = insertMediamanagers.returning;
              console.log(insertedBrands, insertedTags, insertedMediamanagers)
              cache.writeQuery({
                query: createOneMediamanager
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../content/media-manager'
          })
        }).catch(err => console.log(err));
        this.agreements = ' ';
        this.brands = ' ';
        this.products = ' ';
        this.description = ' ';
        this.workspace = ' ';
        this.albums = ' ';
        this.author = ' ';
        this.created_at = ' ';
        this.expiration_date = ' ';
        this.comment = ' ';
        this.media = ' ';
        this.copyright = ' ';
        this.content_type = ' ';
        this.dimensions = ' ';
        this.task_description = ' ';
        this.task_name = ' ';
        this.task_type = ' ';
        this.name = ' ';
        this.watermark_name = ' ';
        this.watermark_description = ' ';
        this.watermark_media = ' ';
        this.versions = ' ';
        this.keywords = ' ';
        this.members = ' ';
        this.status = ' ';
      },
    },
    apollo: {
      findManyProducts: {
        prefetch: true,
        query: findManyProducts
      },
      findManyBrands: {
        prefetch: true,
        query: findManyBrands
      },
      findManyTags: {
        prefetch: true,
        query: findManyTags
      },
      findManyCustomers: {
        prefetch: true,
        query: findManyCustomers
      },
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
    },
      findManyAgreements: {
        prefetch: true,
        query: findManyAgreements
    },
      findManyWorkspacess: {
        prefetch: true,
        query: findManyWorkspacess
    },
      checklists: {
        prefetch: true,
        query: checklists
    }
  }
}

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>