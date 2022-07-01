<template>
    <div>
        <form v-for="collection in allCollectionsList" :key="collection.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="collectionsAddOptions">
                            <li><input type="submit" value="Save" @click="addCollection" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Collection Name</td>
                        <td><input id="collectionsName" v-model="name" type="collectionsName" required />{{ collection.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>
        <div id="accordionExample" class="accordion">
            <div class="accordion-item">
                <h2 id="headingOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Content
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="table table-responsive">
                            <table class="table" >
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <input
  v-model="description" type="textarea" value="Product Description" rows="10" cols="50" />{{ collection.description }}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
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
                        <td><input type="image" upload-url="/media" name="headshot" value="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/>{{ collection.image }}</td>
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
                        <table class="table" >
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to potential customers using search engine like Google, Bing, etc.</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Title</td>
                                        <td><input type="text" value="Product Url" required />{{ collection.meta_title }}</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Keywords</td>
                                        <td><input type="text" value="Product Keywords" />{{ collection.meta_keywords }}</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Description</td>
                                        <td><input
  type="textarea" value="Product Description" rows="10" cols="50" />{{ collection.meta_description }}</td>
                                    </tr>
                                </tbody>
                            </table>
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
import  collections from '~/apollo/mutations/shop/collections'
import  allCollections from '~/apollo/queries/shop/collections'

const DELETE_COLLECTION = gql `
  mutation delete_collections($id: Int!){
  delete_collections(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_COLLECTION = gql `
  mutation update_collections($id: Int!){
  update_collections(where: {id: {_eq: $id}}){
    affected_rows
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
            query: allCollections
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/collections'})
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
            query: allCollections
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    collections: {
      query: collections,
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