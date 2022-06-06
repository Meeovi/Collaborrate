<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Collection" @click="addCollection" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Collection</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                <tbody>
                    <tr>
                        <td style="text-align: right;">Collection Name</td>
                        <td><FormulateInput id="collectionsName" v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput id="collectionsName" v-model="description" type="textarea" required /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>
        <div id="accordionExample" class="accordion">
            <div class="accordion-item">
                <h2 id="headingThree" class="accordion-header">
                    <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Images and Videos
                    </FormulateInput>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <td><FormulateInput type="image" name="headshot" v-model="image" label="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/></td>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 id="headingFour" class="accordion-header">
                    <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Search Engine Optimization
                    </FormulateInput>
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
                                        <td><FormulateInput v-model="meta_title" type="text" label="Collection Url" required /></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Keywords</td>
                                        <td><FormulateInput v-model="meta_keywords" type="text" label="Collection Keywords" /></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Description</td>
                                        <td><FormulateInput
  v-model="meta_description" type="textarea" label="Collection Description" rows="10" cols="50" /></td>
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
</template>

<script>
import gql from "graphql-tag";

import { collections } from "~/apollo/queries/shop/collections";

const ADD_COLLECTIONS = gql`
    mutation ($name:String!,$description:String!,$image:String!,$meta_description:String!,$meta_keywords:String!,$meta_title:String!){
    insert_collections(objects: {name: $name, description: $description, image: $image, meta_description: $meta_description, meta_title: $meta_title, meta_keywords: $meta_keywords}) {
        affected_rows
        returning {
            name
            description
            image
            meta_description
            meta_keywords
            meta_title
    }
  }
}`;

export default {
    data() {
    return {
        name: " ",
        description: " ",
        image: " ",
        meta_description: " ",
        meta_keywords: " ",
        meta_title: " ",
        
      }
  },
    head: {
        title: 'Add New Collection'
    }, 
   /* eslint-disable camelcase */
  methods: {
      async addCollection() {
            const name = this.name;
            const description = this.description;
            const image = this.image;
            const meta_description = this.meta_description;
            const meta_keywords = this.meta_keywords;
            const meta_title = this.meta_title;
            await this.$apollo.mutate({
                mutation: ADD_COLLECTIONS,
                variables: {
                    name,
                    description,
                    image,
                    meta_description,
                    meta_keywords,
                    meta_title,
                 },
        update: (cache, { data: { insertCollections }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCollection = insertCollections.returning;
                            console.log(insertedCollection)
                            cache.writeQuery({
                                query: collections
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/collections'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.description = ' ';
                this.image = ' ';
                this.meta_description = ' ';
                this.meta_keywords = ' ';
                this.meta_title = ' ';
            },
            onFileAdded(e) {},
            onError(e) {},
            onSuccess(e) {},
            onComplete(e) {}
        },
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