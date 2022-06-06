<template>
  <div>
    <FormulateForm v-for="knowledgebase in knowledgebases" :key="knowledgebase.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
      <div class="table table-responsive">
        <table class="table" >
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="knowledgebaseAddOptions">
                <li>
                  <FormulateInput type="submit" label="Save" @click="addKnowledgebase" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Knowledgebase Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />{{ knowledgebase.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Content</td>
              <td>
                <vue-simplemde id="longDescription" v-model="content" required />{{ knowledgebase.content }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Resolution</td>
              <td>
                <FormulateInput v-model="resolution" type="textarea" />{{ knowledgebase.resolution }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Author</td>
              <td>
                <FormulateInput v-model="author" type="text" />{{ knowledgebase.author }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Approver</td>
              <td>
                <FormulateInput v-model="approver" type="text" />{{ knowledgebase.approver }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Revision</td>
              <td>
                <FormulateInput v-model="revision" type="text" />{{ knowledgebase.revision }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Status</td>
              <td>
                <FormulateInput v-model="status" type="text" /> {{ knowledgebase.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import gql from 'graphql-tag'
import knowledgebases from '~/apollo/mutations/system/knowledgebase'
import allKnowledgebases from '~/apollo/queries/system/knowledgebase'

const DELETE_KNOWLEDGEBASE = gql `
  mutation delete_knowledgebases($id: Int!){
  delete_knowledgebases(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_KNOWLEDGEBASE = gql `
  mutation update_knowledgebases($id: Int!){
  update_knowledgebases(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Knowledgebase'
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
   async deleteKnowledgebase(knowledgebase){
    await this.$apollo.mutate({
        mutation: DELETE_KNOWLEDGEBASE,
        variables: {
          id: knowledgebase.id
        },
        refetchQueries: [
          {
            query: allKnowledgebases
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/system/knowledgebases'})
            }).catch(err => console.log(err));
    },
    async updateKnowledgebase(knowledgebase){
    await this.$apollo.mutate({
        mutation: UPDATE_KNOWLEDGEBASE,
        variables: {
          id: knowledgebase.id
        },
        refetchQueries: [
          {
            query: allKnowledgebases
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    knowledgebases: {
      query: knowledgebases,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
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
