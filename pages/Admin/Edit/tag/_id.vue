<template>
    <div>
        <FormulateForm v-for="tag in tags" :key="tag.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="tagsAddOptions">
                            <li><FormulateInput type="submit" @click="addTag" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Tag Name</td>
                        <td><FormulateInput id="tagsName" type="tagsName" required />{{ tag.name }}</td>
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
                                                <FormulateInput
  type="textarea" id="tagDesc" name="tagDesc" cols="80" rows="10" />{{ tag.excerpt }}
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
    </FormulateForm>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import gql from 'graphql-tag'
import tags from '~/apollo/mutations/content/tags'
import allTags from '~/apollo/queries/content/tags'

const DELETE_TAG = gql `
  mutation delete_tags($id: Int!){
  delete_tags(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_TAG = gql `
  mutation update_tags($id: Int!){
  update_tags(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Tag'
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
   async deleteTag(tag){
    await this.$apollo.mutate({
        mutation: DELETE_TAG,
        variables: {
          id: tag.id
        },
        refetchQueries: [
          {
            query: allTags
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/content/tags'})
            }).catch(err => console.log(err));
    },
    async updateTag(tag){
    await this.$apollo.mutate({
        mutation: UPDATE_TAG,
        variables: {
          id: tag.id
        },
        refetchQueries: [
          {
            query: allTags
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    tags: {
      query: tags,
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