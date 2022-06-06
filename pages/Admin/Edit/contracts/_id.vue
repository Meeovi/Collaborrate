
<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="contractAddOptions">
                <li>
                  <FormulateInput type="submit" label="Save" @click="addContract" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Contract Title</td>
              <td>
                <FormulateInput v-model="contract_title" type="text" />{{ contract.contract_title }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Contract Value</td>
              <td>
                <FormulateInput v-model="contract_value" type="text" />{{ contract.contract_value }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Start Date</td>
              <td>
                <FormulateInput v-model="start_date" type="text" />{{ contract.start_date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">End Date</td>
              <td>
                <FormulateInput v-model="end_date" type="text" />{{ contract.end_date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Renewal Reminder Date</td>
              <td>
                <FormulateInput v-model="renewal_reminder" type="text" />{{ contract.renewal_reminder }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Customer Signed Date</td>
              <td>
                <FormulateInput v-model="customer_signed_date" type="text" />{{ contract.customer_signed_date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Company Signed Date</td>
              <td>
                <FormulateInput v-model="company_signed_date" type="text" />{{ contract.company_signed_date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <FormulateInput v-model="description" type="text" />{{ contract.description }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Contract Manager</td>
              <td>
                <FormulateInput v-model="contract_manager" type="text" />{{ contract.contract_manager }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Status</td>
              <td>
                <FormulateInput v-model="status" type="text" />{{ contract.status }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Account</td>
              <td>
                <FormulateInput v-model="account" type="text" />{{ contract.account }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Contact</td>
              <td>
                <FormulateInput v-model="contact" type="text" />{{ contract.contact }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Opportunity</td>
              <td>
                <FormulateInput v-model="opportunity" type="text" />{{ contract.opportunity }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Contract Type</td>
              <td>
                <FormulateInput v-model="contract_type" type="text" />{{ contract.contract_type }}
              </td>
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
              Line Items
            </FormulateInput>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-mdb-parent="#accordionExample">
            <div class="accordion-body">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Currency</td>
                      <td>
                        <FormulateInput v-model="currency" type="text" />{{ contract.currency }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Total</td>
                      <td>
                        <FormulateInput v-model="total" type="text" />{{ contract.total }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount</td>
                      <td>
                        <FormulateInput v-model="discount" type="text" />{{ contract.discount }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Subtotal</td>
                      <td>
                        <FormulateInput v-model="subtotal" type="text" />{{ contract.subtotal }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shipping</td>
                      <td>
                        <FormulateInput v-model="shipping" type="text" />{{ contract.shipping }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shipping Tax</td>
                      <td>
                        <FormulateInput v-model="shipping_tax" type="text" />{{ contract.shipping_tax }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tax</td>
                      <td>
                        <FormulateInput v-model="tax" type="text" />{{ contract.tax }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Grand Total</td>
                      <td>
                        <FormulateInput v-model="grand_total" type="text" />{{ contract.grand_total }}
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
import contracts from '~/apollo/mutations/marketing/contracts'
import allContracts from '~/apollo/queries/marketing/contracts'

const DELETE_CONTRACT = gql `
  mutation delete_contracts($id: Int!){
  delete_contracts(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_CONTRACT = gql `
  mutation update_contracts($id: Int!){
  update_contracts(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Contract'
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
   async deleteContract(contract){
    await this.$apollo.mutate({
        mutation: DELETE_CONTRACT,
        variables: {
          id: contract.id
        },
        refetchQueries: [
          {
            query: allContracts
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/contracts'})
            }).catch(err => console.log(err));
    },
    async updateContract(contract){
    await this.$apollo.mutate({
        mutation: UPDATE_CONTRACT,
        variables: {
          id: contract.id
        },
        refetchQueries: [
          {
            query: allContracts
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    contracts: {
      query: contracts,
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

  li {
    display: inline-block;
  }

</style>
