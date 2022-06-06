<template>
    <div>
        <FormulateForm  v-for="opportunities in opportunities" :key="opportunities.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="opportunityAddOptions">
                            <li><FormulateInput type="submit" label="Edit" @click="addOpportunity" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Currency</td>
                        <td><FormulateInput v-model="currency" type="text" required />{{ opportunities.currency }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Opportunity Amount</td>
                        <td><FormulateInput v-model="amount" type="text" required />{{ opportunities.amount }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Sales Stage</td>
                        <td><FormulateInput v-model="sales_stage" type="text" required />{{ opportunities.sales_stage }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Probability (%)</td>
                        <td><FormulateInput v-model="probability" type="text" required />{{ opportunities.probability }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Next Step</td>
                        <td><FormulateInput v-model="next_step" type="text" required />{{ opportunities.next_step }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput v-model="description" type="textarea" required />{{ opportunities.description }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Expected Close Date</td>
                        <td><FormulateInput v-model="expected_close_date" type="text" required />{{ opportunities.expected_close_date }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Type</td>
                        <td><FormulateInput v-model="type" type="text" required />{{ opportunities.type }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Lead Source</td>
                        <td><FormulateInput v-model="lead_source" type="text" required />{{ opportunities.lead_source }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Campaign</td>
                        <td><FormulateInput v-model="campaign" type="text" required />{{ opportunities.campaign }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Assigned To</td>
                        <td><FormulateInput v-model="assigned_to" type="text" required />{{ opportunities.assigned_to }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import opportunities from '~/apollo/mutations/customers/opportunities'
import allOpportunities from '~/apollo/queries/customers/opportunities'

const DELETE_OPPORTUNITY = gql `
  mutation delete_opportunities($id: Int!){
  delete_opportunities(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_OPPORTUNITY = gql `
  mutation update_opportunities($id: Int!){
  update_opportunities(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Opportunity'
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
   async deleteOpportunity(opportunity){
    await this.$apollo.mutate({
        mutation: DELETE_OPPORTUNITY,
        variables: {
          id: opportunity.id
        },
        refetchQueries: [
          {
            query: allOpportunities
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/customers/opportunities'})
            }).catch(err => console.log(err));
    },
    async updateOpportunity(opportunity){
    await this.$apollo.mutate({
        mutation: UPDATE_OPPORTUNITY,
        variables: {
          id: opportunity.id
        },
        refetchQueries: [
          {
            query: allOpportunities
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    opportunities: {
      query: opportunities,
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