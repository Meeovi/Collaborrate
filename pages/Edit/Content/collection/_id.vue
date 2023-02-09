<template>
    <div>
        <form enctype="multipart/form-data"  v-for="collection in findManyCollections" :key="collection.id" @submit.prevent="updateCollection(collection)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteCollection(collection)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Collection" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Collection</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <v-table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Collection Name</td>
                      <td><input id="collectionsName" :hint="collection.name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td><textarea :hint="collection.description" cols="40" rows="10"></textarea></td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
              <br><br>
              <div id="accordionExample" class="accordion">
                <div class="accordion-item">
                  <h2 id="headingThree" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Images and Videos
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <td>
                        <div class="file-upload-wrapper">
                          <input type="file" id="input-file-now" class="file-upload-input" name="uploaded_file" />
                        </div>
                      </td>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 id="headingFour" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Search Engine Optimization
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <v-table class="table">
                        <tbody>
                          <tr>
                            <td></td>
                            <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to
                              potential customers using search engine like Google, Bing, etc.</td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Title</td>
                            <td><input :hint="collection.meta_title" type="text" required /></td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Keywords</td>
                            <td><input :hint="collection.meta_keywords" type="text" /></td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Description</td>
                            <td><textarea :hint="collection.meta_description" cols="40" rows="10"></textarea></td>
                          </tr>
                        </tbody>
                      </v-table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  findManyCollections from '../../graphql/query/findManyCollections'

  const DELETE_COLLECTION = gql`
    mutation ($id: Int){
    deleteOneCollections(where: {id: $id} where: {id: $id}) {
        name
        description
        image
        meta_description
        meta_keywords
        meta_title
  }
}`;

const UPDATE_COLLECTION = gql`
  mutation updateOnecollections($name:String!,$description:String!,$image:String!,$meta_description:String!,$meta_keywords:String!,$meta_title:String!){
  updateOneCollections(data: {name: $name, description: $description, image: $image, meta_description: $meta_description, meta_title: $meta_title, meta_keywords: $meta_keywords}, (where: {id: $id})){
    name
        description
        image
        meta_description
        meta_keywords
        meta_title
  }
}
`;

export default {
    head: {
        name: 'Edit Collection'
    },
 mounted(){
      this.forceRerender();
  },
  // eslint-disable-next-line vue/order-in-components
  data(){
      return{
          componentKey: 0
      }
  },
  methods: {
   async deleteCollection(collection){
    await this.$apollo.mutate({
        mutation: DELETE_COLLECTION,
        variables: {
          id: collection.id
        },
        refetchQueries: [
          {
            query: findManyCollections
          }
        ]
      }).then(() => {
            this.$router.push({path: '../../inventory/collections'})
            }).catch(err => console.log(err));
    },
    async updateCollection(collection){
    await this.$apollo.mutate({
        mutation: UPDATE_COLLECTION,
        variables: {
          id: collection.id
        },
        refetchQueries: [
          {
            query: findManyCollections
          }       
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyCollections: {
      query: findManyCollections,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
input, select, option {
    padding: 5px;
    width: 50%;
}

li {
    display: inline-block;
}
</style>