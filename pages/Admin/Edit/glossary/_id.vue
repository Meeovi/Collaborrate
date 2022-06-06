/* eslint-disable camelcase */
<template>
    <div id="editor">
        <FormulateForm v-for="glossary in glossaries" :key="glossary.id"  method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="glossaryAddOptions">
                            <li><FormulateInput type="submit" @click="addGlossary" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Glossary Name</td>
                        <td><FormulateInput type="text" required />{{ glossary.name }}</td>
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
                                                <vue-simplemde id="glossaryDescription" />{{ glossary.content }}
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
                        <td><FormulateInput type="image" upload-url="/media" name="headshot" label="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/>{{ glossary.image }}</td>
                    </div>
                </div>
            </div>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import gql from 'graphql-tag'
import glossaries from '~/apollo/mutations/content/glossaries'
import allGlossaries from '~/apollo/queries/content/glossaries'

const DELETE_GLOSSARY = gql `
  mutation delete_glossaries($id: Int!){
  delete_glossaries(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_GLOSSARY = gql `
  mutation update_glossaries($id: Int!){
  update_glossaries(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Glossary'
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
   async deleteCountry(glossary){
    await this.$apollo.mutate({
        mutation: DELETE_GLOSSARY,
        variables: {
          id: glossary.id
        },
        refetchQueries: [
          {
            query: allGlossaries
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/content/glossaries'})
            }).catch(err => console.log(err));
    },
    async updateCountry(glossary){
    await this.$apollo.mutate({
        mutation: UPDATE_GLOSSARY,
        variables: {
          id: glossary.id
        },
        refetchQueries: [
          {
            query: allGlossaries
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    glossaries: {
      query: glossaries,
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
}

li {
    display: inline-block;
}
</style>