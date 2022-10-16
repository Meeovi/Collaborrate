<template>
    <div>
        <form v-for="cases in findManyCases" :key="cases.id"  @submit.prevent="add()">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="caseAddOptions">
                            <li><input type="submit" value="Save" @submit.prevent="addCase" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">State</td>
                        <td><input v-model="state" type="text"  />{{ cases.state }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Type</td>
                        <td><input v-model="type" type="text"  />{{ cases.type }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Subject</td>
                        <td><input v-model="subject" type="text"  />{{ cases.subject }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><input v-model="description" type="textarea"  />{{ cases.description }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Resolution</td>
                        <td><input v-model="resolution" type="textarea"  />{{ cases.resolution }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned To</td>
                        <td><input v-model="assigned_to" type="text"  />{{ cases.assigned_to }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Priority</td>
                        <td><input v-model="priority" type="text"  />{{ cases.priority }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Status</td>
                        <td><input v-model="status" type="text"  />{{ cases.status }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Account Name</td>
                        <td><input v-model="account_name" type="text"  />{{ cases.account_name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </form>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  findManyCases from '~/graphql/mutations/reports/cases'

const DELETE_CASE = gql`
  mutation deleteOneCases($id: Int!){
  deleteOneCases(where: {id: {equals: $id}}){
    accountName
    assignedTo
    caseNumber
    createdAt
    dateModified
    description
    id
    nodeId
    priority
    resolution
    state
    status
    subject
    type
  }
}
`;

const UPDATE_CASE = gql`
  mutation updateOneCases($id: Int!){
  updateOneCases(data: {status: $status, state: $state, assigned_to: $assigned_to, description: $description, resolution: $resolution, subject: $subject, type: $type, priority: $priority}, where: {id: {equals: $id}}){
    accountName
    assignedTo
    caseNumber
    createdAt
    dateModified
    description
    id
    nodeId
    priority
    resolution
    state
    status
    subject
    type
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
            query: findManyCases
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
            query: findManyCases
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyCases: {
      query: findManyCases,
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