<template>
  <div>
    <FormulateForm  v-for="quote in quotes" :key="quote.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="quoteAddOptions">
                <li>
                  <FormulateInput type="submit" label="Edit" @click="addQuote" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Title</td>
              <td>
                <FormulateInput v-model="name" type="text" required />{{ quotes.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Opportunity</td>
              <td>
                <FormulateInput v-model="opportunity" type="text" />{{ quotes.opportunity }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Valid Until</td>
              <td>
                <FormulateInput v-model="valid_until" type="text" required />{{ quotes.valid_until }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Quote Stage</td>
              <td>
                <FormulateInput v-model="quote_stage" type="text" required />{{ quotes.quote_stage }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Assigned To</td>
              <td>
                <FormulateInput v-model="assigned_to" type="text" />{{ quotes.assigned_to }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Invoice Status</td>
              <td>
                <FormulateInput v-model="invoice_status" type="text" />{{ quotes.invoice_status }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Payment Terms</td>
              <td>
                <FormulateInput v-model="payment_terms" type="text" />{{ quotes.payment_terms }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Approval Status</td>
              <td>
                <FormulateInput v-model="approval_status" type="text" />{{ quotes.approval_status }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Approval Issues:</td>
              <td>
                <FormulateInput v-model="approval_issues" type="textarea" />{{ quotes.approval_issues }}
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
              Address Information
            </FormulateInput>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-mdb-parent="#accordionExample">
            <div class="accordion-body">
              <div class="table table-responsive">
                <table class="table row">
                  <tbody>
                        <tr>
                          <td style="text-align: right;">Account</td>
                          <td>
                            <FormulateInput v-model="account" type="text" />{{ quotes.account }}
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Contact</td>
                          <td>
                            <FormulateInput v-model="contact" type="text" />{{ quotes.contact }}
                          </td>
                        </tr>
                        </tbody>
                        <tbody class="col">
                        <tr>
                          <td style="text-align: right;">Billing Address</td>
                          <td></td>
                          </tr>
                          <tr> 
                          <td style="text-align: right;">Street Address</td>
                          <td>
                            <FormulateInput v-model="billing_street" type="text" />{{ quotes.billing_street }}
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">City</td>
                          <td>
                            <FormulateInput v-model="billing_city" type="text" />{{ quotes.billing_city }}
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">State/Region</td>
                          <td>
                            <FormulateInput v-model="billing_state" type="text" />{{ quotes.billing_state }}
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Postal Code</td>
                          <td>
                            <FormulateInput v-model="billing_postal" type="text" />{{ quotes.billing_postal }}
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Country</td>
                          <td>
                            <FormulateInput v-model="billing_country" type="text" />{{ quotes.billing_country }}
                          </td>
                        </tr>
                  </tbody>
                  <tbody class="col">
                        <tr>
                          <td style="text-align: right;">Shipping Address</td>
                          <td></td>
                          </tr>
                          <tr> 
                          <td style="text-align: right;">Street Address</td>
                          <td>
                            <FormulateInput v-model="shipping_street" type="text" />{{ quotes.shipping_street }}
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">City</td>
                          <td>
                            <FormulateInput v-model="shipping_city" type="text" />{{ quotes.shipping_city }}
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">State/Region</td>
                          <td>
                            <FormulateInput v-model="shipping_state" type="text" />{{ quotes.shipping_state }}
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Postal Code</td>
                          <td>
                            <FormulateInput v-model="shipping_postal" type="text" />{{ quotes.shipping_postal }}
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Country</td>
                          <td>
                            <FormulateInput v-model="shipping_country" type="text" />{{ quotes.shipping_country }}
                          </td>
                        </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="headingFive" class="accordion-header">
            <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
              data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Line Items
            </FormulateInput>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
            data-mdb-parent="#accordionExample">
            <div class="accordion-body">
              <tbody>
                <tr>
                  <td style="text-align: right;">Currency</td>
                  <td>
                    <FormulateInput v-model="currency" :options="{us: 'US Dollar:: $'}" type="select" />{{ quotes.currency }}
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Total:</td>
                  <td>
                    <FormulateInput v-model="total" type="text" label="0.00"></FormulateInput>{{ quotes.total }}
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Discount:</td>
                  <td>
                    <FormulateInput v-model="discount" type="text" label="0.00"></FormulateInput>{{ quotes.discount }}
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Subtotal:</td>
                  <td>
                    <FormulateInput v-model="subtotal" type="text" label="0.00"></FormulateInput>{{ quotes.subtotal }}
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Shipping:</td>
                  <td>
                    <FormulateInput v-model="shipping" type="text" label="0.00"></FormulateInput>{{ quotes.shipping }}
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Shipping Tax:</td>
                  <td>
                    <FormulateInput v-model="shipping_tax" type="text" label="0.00"></FormulateInput>{{ quotes.shipping_tax }}
                  </td>
                </tr>
                <tr>
                  <td style="text-align: right;">Grand Total:</td>
                  <td>
                    <FormulateInput v-model="grand_total" type="text" label="0.00"></FormulateInput> {{ quotes.grand_total }}
                  </td>
                </tr>
              </tbody>
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
import quotes from '~/apollo/mutations/sales/quotes'
import allQuotes from '~/apollo/queries/sales/quotes'

const DELETE_QUOTE = gql `
  mutation delete_quotes($id: Int!){
  delete_quotes(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_QUOTE = gql `
  mutation update_quotes($id: Int!){
  update_quotes(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Quote'
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
   async deleteQuote(quote){
    await this.$apollo.mutate({
        mutation: DELETE_QUOTE,
        variables: {
          id: quote.id
        },
        refetchQueries: [
          {
            query: allQuotes
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/sales/quotes'})
            }).catch(err => console.log(err));
    },
    async updateQuote(quote){
    await this.$apollo.mutate({
        mutation: UPDATE_QUOTE,
        variables: {
          id: quote.id
        },
        refetchQueries: [
          {
            query: allQuotes
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    quotes: {
      query: quotes,
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
