<template>
  <div>
    <form enctype="multipart/form-data"   v-for="quote in findManyQuotes" :key="quote.id" @submit.prevent="updateQuote(quote)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteQuote(quote)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Quote" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Quote</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <v-table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Title</td>
                      <td>
                        <input :hint="quote.name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Opportunity</td>
                      <td>
                        <input :hint="quote.opportunity" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Valid Until</td>
                      <td>
                        <input :hint="quote.valid_until" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Quote Stage</td>
                      <td>
                        <input :hint="quote.quote_stage" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Assigned To</td>
                      <td>
                        <select id="users" :hint="quote.assigned_to" name="template" class="form-category">
                                  <option v-for="users in findManyUsers" :key="users" :hint="users">
                                    {{ users.name }}
                                  </option>
                                </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Invoice Status</td>
                      <td>
                        <input :hint="quote.invoice_status" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Payment Terms</td>
                      <td>
                        <input :hint="quote.payment_terms" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Approval Status</td>
                      <td>
                        <input :hint="quote.approval_status" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Approval Issues:</td>
                      <td>
                        <input :hint="quote.approval_issues" type="textarea" />
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
              <br><br>
              <div id="accordionExample" class="accordion">
                <div class="accordion-item">
                  <h2 id="headingOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Address Information
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="table table-responsive">
                        <v-table class="table row">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Account</td>
                              <td>
                                <input :hint="quote.account" type="text" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Contact</td>
                              <td>
                                <select id="contact" :hint="quote.contact" name="template" class="form-category">
                                  <option v-for="contact in findManyUsers" :key="contact" :hint="contact">
                                    {{ contact.name }}
                                  </option>
                                </select>
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
                                <input :hint="quote.billing_street" type="text" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">City</td>
                              <td>
                                <select id="city" :hint="quote.billing_city" name="template" class="form-category">
                                  <option v-for="city in findManyCities" :key="city" :hint="city">{{ city.name }}
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">State/Region</td>
                              <td>
                                <select id="state" :hint="quote.billing_state" name="template" class="form-category">
                                  <option v-for="states in findManyStates" :key="states" :hint="states">
                                    {{ states.name }}
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Postal Code</td>
                              <td>
                                <input :hint="quote.billing_postal" type="text" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Country</td>
                              <td>
                                <select id="country" :hint="quote.billing_country" name="template" class="form-category">
                                  <option v-for="countries in findManyCountries" :key="countries" :hint="countries">
                                    {{ countries.name }}
                                  </option>
                                </select>
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
                                <input :hint="quote.shipping_street" type="text" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">City</td>
                              <td>
                                <select id="city" :hint="quote.shipping_city" name="template" class="form-category">
                                  <option v-for="city in findManyCities" :key="city" :hint="city">{{ city.name }}
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">State/Region</td>
                              <td>
                                <select id="state" :hint="quote.shipping_state" name="template" class="form-category">
                                  <option v-for="states in findManyStates" :key="states" :hint="states">
                                    {{ states.name }}
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Postal Code</td>
                              <td>
                                <input :hint="quote.shipping_postal" type="text" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Country</td>
                              <td>
                                <select id="country" :hint="quote.shipping_country" name="template" class="form-category">
                                  <option v-for="countries in findManyCountries" :key="countries" :hint="countries">
                                    {{ countries.name }}
                                  </option>
                                </select>
                              </td>
                            </tr>
                          </tbody>
                        </v-table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 id="headingFive" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      Line Items
                    </button>
                  </h2>
                  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <tbody>
                        <tr>
                          <td style="text-align: right;">Currency</td>
                          <td>
                            <select id="currency" :hint="quote.currency" name="template" class="form-category">
                              <option v-for="currency in findManyCurrencies" :key="currency" :hint="currency">
                                {{ currency.name }}
                              </option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Total:</td>
                          <td>
                            <input :hint="quote.total" type="number" />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Discount:</td>
                          <td>
                            <input :hint="quote.discount" type="number" />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Subtotal:</td>
                          <td>
                            <input :hint="quote.subtotal" type="number" />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Shipping:</td>
                          <td>
                            <input :hint="quote.shipping" type="number" />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Shipping Tax:</td>
                          <td>
                            <input :hint="quote.shipping_tax" type="number" />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Grand Total:</td>
                          <td>
                            <input :hint="quote.grand_total" type="number" />
                          </td>
                        </tr>
                      </tbody>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import findManyQuotes from "../../graphql/query/findManyQuotes";
  import findManyCategories from '../../graphql/query/findManyCategories'
  import findManyStates from '../../graphql/query/findManyStates'
  import findManyCountries from '../../graphql/query/findManyCountries'
  import findManyCities from '../../graphql/query/findManyCities'
  import findManyCurrencies from '../../graphql/query/findManyCurrencies'
  import findManyUsers from '../../graphql/query/findManyUsers'
  import findManyUsers from '../../graphql/query/findManyUsers'
  /* eslint-disable camelcase */

  const UPDATE_QUOTE = gql`
    mutation ($account: String!, $contact: String!, $name: String!, $grand_total: String!, $categories: String!, $quote_stage: String!, $valid_until: String!, $approval_issues: String!, $approval_status: String!, $assigned_to: String!, $billing_city: String!, $billing_country: String!, $billing_postal: String!, $billing_state: String!, $billing_street: String!, $contact: String!, $created_at: String!, $currency: String!, $cust_id: String!, $customers: String!, $discount: String!, $invoice_status: String!, $line_item_discount: String!, $line_item_group_total: String!, $line_item_name: String!, $name: String!, $line_item_total: String!, $line_item_tax: String!, $line_item_subtotal: String!, $prod_id: String!, $payment_terms: String!, $order_id: String!, $tax: String!, $subtotal: String!, $shipping_tax: String!, $shipping_street: String!, $shipping_state: String!, $shipping_postal: String!, $shipping_country: String!, $shipping_city: String!, $shipping: String!, $quote_stage: String!, $total: String!, $opportunity: String){
    updateOneQuotes(data: {account: $account, contact: $contact, name: $name, grand_total: $grand_total, categories: $categories, quote_stage: $quote_stage, valid_until: $valid_until, approval_issues: $approval_issues, approval_status: $approval_status, assigned_to: $assigned_to, billing_city: $billing_city, billing_country: $billing_country, billing_postal: $billing_postal, billing_state: $billing_state, billing_street: $billing_street, contact: $contact, created_at: $created_at, currency: $currency, cust_id: $cust_id, customers: $customers, discount: $discount, invoice_status: $invoice_status, line_item_discount: $line_item_discount, line_item_group_total: $line_item_group_total, line_item_name: $line_item_name, line_item_total: $line_item_total, line_item_tax: $line_item_tax, line_item_subtotal: $line_item_subtotal, prod_id: $prod_id, payment_terms: $payment_terms, order_id: $order_id, tax: $tax, subtotal: $subtotal, shipping_tax: $shipping_tax, shipping_street: $shipping_street, shipping_state: $shipping_state, shipping_postal: $shipping_postal, shipping_country: $shipping_country, shipping_city: $shipping_city, shipping: $shipping, total: $total, opportunity: $opportunity} where: {id: $id}) {
        categories
        account
        name
        grand_total
        quote_stage
        valid_until
        approval_issues
        approval_status
        assigned_to
        billing_city
        billing_country
        billing_postal
        billing_state
        billing_street
        contact
        opportunity
        created_at
        currency
        cust_id
        customers
        discount
        invoice_status
        line_item_discount
        line_item_group_total
        line_item_name
        line_item_total
        line_item_tax
        line_item_subtotal
        prod_id
        payment_terms
        order_id
        tax
        subtotal
        shipping_tax
        shipping_street
        shipping_state
        shipping_postal
        shipping_country
        shipping_city
        shipping
        total
  }
}`;

const DELETE_QUOTE = gql`
  mutation deleteOneQuotes($id: Int){
  deleteOneQuotes(where: {id: $id}){
    categories
        account
        name
        grand_total
        quote_stage
        valid_until
        approval_issues
        approval_status
        assigned_to
        billing_city
        billing_country
        billing_postal
        billing_state
        billing_street
        contact
        opportunity
        created_at
        currency
        cust_id
        customers
        discount
        invoice_status
        line_item_discount
        line_item_group_total
        line_item_name
        line_item_total
        line_item_tax
        line_item_subtotal
        prod_id
        payment_terms
        order_id
        tax
        subtotal
        shipping_tax
        shipping_street
        shipping_state
        shipping_postal
        shipping_country
        shipping_city
        shipping
        total
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
            query: findManyQuotes
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../inventory/quotes'})
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
            query: findManyQuotes
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyQuotes: {
      query: findManyQuotes,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyCities: {
        prefetch: true,
        query: findManyCities
      },
      findManyCurrencies: {
        prefetch: true,
        query: findManyCurrencies
      },
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
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
