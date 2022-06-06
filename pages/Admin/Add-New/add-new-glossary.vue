/* eslint-disable camelcase */
<template>
    <div id="editor">
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Glossary" @click="addGlossary" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Glossary</a>
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
                        <td style="text-align: right;">Glossary Name</td>
                        <td><FormulateInput v-model="name" type="text" required /></td>
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
                            <table class="table" >
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <vue-simplemde id="glossaryDescription" v-model="content" />
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

import { glossaries } from "~/apollo/queries/content/glossaries.gql";

const ADD_GLOSSARIES = gql`
    mutation ($name:String!,$product:String,$content:String,$image:String,$published:timestamp){
    insert_glossary(objects: {name: $name, content: $content, image: $image}) {
        affected_rows
        returning {
            name
            content
            image
    }
  }
}`;

export default {
  data() {
    return {
        name: " ",
        content: " ",
        image: " ",
        
      }
  },
  methods: {
      async addGlossary() {
            const name = this.name;
            const content = this.content;
            const image = this.image;
            // eslint-disable-next-line camelcase
            await this.$apollo.mutate({
                mutation: ADD_GLOSSARIES,
                variables: {
                    name,
                    content,
                    image,
                 },
        update: (cache, { data: { insertGlossaries }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedGlossary = insertGlossaries.returning;
                            console.log(insertedGlossary)
                            cache.writeQuery({
                                query: glossaries
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../content/glossary'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.content = ' ';
                this.image = ' ';
            },
            
        },
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Glossary'
    }
}
</script>

<style>
input, select, option {
    padding: 5px;
}

li {
    display: inline-block;
}
</style>