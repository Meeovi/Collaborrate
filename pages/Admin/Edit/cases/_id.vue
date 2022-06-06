<template>
    <div>
        <FormulateForm v-for="cases in cases" :key="cases.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="caseAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addCase" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">State</td>
                        <td><FormulateInput v-model="state" type="text"  />{{ cases.state }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Type</td>
                        <td><FormulateInput v-model="type" type="text"  />{{ cases.type }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Subject</td>
                        <td><FormulateInput v-model="subject" type="text"  />{{ cases.subject }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput v-model="description" type="textarea"  />{{ cases.description }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Resolution</td>
                        <td><FormulateInput v-model="resolution" type="textarea"  />{{ cases.resolution }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned To</td>
                        <td><FormulateInput v-model="assigned_to" type="text"  />{{ cases.assigned_to }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Priority</td>
                        <td><FormulateInput v-model="priority" type="text"  />{{ cases.priority }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Status</td>
                        <td><FormulateInput v-model="status" type="text"  />{{ cases.status }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Account Name</td>
                        <td><FormulateInput v-model="account_name" type="text"  />{{ cases.account_name }}</td>
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
import cases from '~/apollo/mutations/reports/cases'
import allCases from '~/apollo/queries/reports/cases'

const DELETE_CASE = gql `
  mutation delete_cases($id: Int!){
  delete_cases(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_CASE = gql `
  mutation update_cases($id: Int!){
  update_cases(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Case'
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
   async deleteCase(cases){
    await this.$apollo.mutate({
        mutation: DELETE_CASE,
        variables: {
          id: cases.id
        },
        refetchQueries: [
          {
            query: allCases
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/reports/cases'})
            }).catch(err => console.log(err));
    },
    async updateCase(cases){
    await this.$apollo.mutate({
        mutation: UPDATE_CASE,
        variables: {
          id: cases.id
        },
        refetchQueries: [
          {
            query: allCases
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    cases: {
      query: cases,
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