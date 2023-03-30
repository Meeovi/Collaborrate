<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addQuote">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
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
              aria-controls="v-tabs-home" aria-selected="true">Create A New Quote</a>
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
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Opportunity</td>
                      <td>
                        <input v-model="opportunity" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Valid Until</td>
                      <td>
                        <input v-model="valid_until" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Quote Stage</td>
                      <td>
                        <input v-model="quote_stage" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Assigned To</td>
                      <td>
                        <select id="users" v-model="assigned_to" name="template" class="form-category">
                                  <option v-for="users in findManyUsers" :key="users" :hint="users">
                                    {{ users.name }}
                                  </option>
                                </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Invoice Status</td>
                      <td>
                        <input v-model="invoice_status" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Payment Terms</td>
                      <td>
                        <input v-model="payment_terms" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Approval Status</td>
                      <td>
                        <input v-model="approval_status" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Approval Issues:</td>
                      <td>
                        <input v-model="approval_issues" type="textarea" />
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
                                <input v-model="account" type="text" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Contact</td>
                              <td>
                                <select id="contact" v-model="contact" name="template" class="form-category">
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
                                <input v-model="billing_street" type="text" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">City</td>
                              <td>
                                <select id="city" v-model="billing_city" name="template" class="form-category">
                                  <option v-for="city in findManyCities" :key="city" :hint="city">{{ city.name }}
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">State/Region</td>
                              <td>
                                <select id="state" v-model="billing_state" name="template" class="form-category">
                                  <option v-for="states in findManyStates" :key="states" :hint="states">
                                    {{ states.name }}
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Postal Code</td>
                              <td>
                                <input v-model="billing_postal" type="text" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Country</td>
                              <td>
                                <select id="country" v-model="billing_country" name="template" class="form-category">
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
                                <input v-model="shipping_street" type="text" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">City</td>
                              <td>
                                <select id="city" v-model="shipping_city" name="template" class="form-category">
                                  <option v-for="city in findManyCities" :key="city" :hint="city">{{ city.name }}
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">State/Region</td>
                              <td>
                                <select id="state" v-model="shipping_state" name="template" class="form-category">
                                  <option v-for="states in findManyStates" :key="states" :hint="states">
                                    {{ states.name }}
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Postal Code</td>
                              <td>
                                <input v-model="shipping_postal" type="text" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Country</td>
                              <td>
                                <select id="country" v-model="shipping_country" name="template" class="form-category">
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
                            <select id="currency" v-model="currency" name="template" class="form-category">
                              <option v-for="currency in findManyCurrencies" :key="currency" :hint="currency">
                                {{ currency.name }}
                              </option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Total:</td>
                          <td>
                            <input v-model="total" type="number" hint="0.00" />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Discount:</td>
                          <td>
                            <input v-model="discount" type="number" hint="0.00" />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Subtotal:</td>
                          <td>
                            <input v-model="subtotal" type="number" hint="0.00" />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Shipping:</td>
                          <td>
                            <input v-model="shipping" type="number" hint="0.00" />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Shipping Tax:</td>
                          <td>
                            <input v-model="shipping_tax" type="number" hint="0.00" />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Grand Total:</td>
                          <td>
                            <input v-model="grand_total" type="number" hint="0.00" />
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

  const ADD_QUOTES = gql `
    mutation ($account: String!, $contact: String!, $name: String!, $grand_total: String!, $categories: String!, $quote_stage: String!, $valid_until: String!, $approval_issues: String!, $approval_status: String!, $assigned_to: String!, $billing_city: String!, $billing_country: String!, $billing_postal: String!, $billing_state: String!, $billing_street: String!, $contact: String!, $created_at: String!, $currency: String!, $cust_id: String!, $customers: String!, $discount: String!, $invoice_status: String!, $line_item_discount: String!, $line_item_group_total: String!, $line_item_name: String!, $name: String!, $line_item_total: String!, $line_item_tax: String!, $line_item_subtotal: String!, $prod_id: String!, $payment_terms: String!, $order_id: String!, $tax: String!, $subtotal: String!, $shipping_tax: String!, $shipping_street: String!, $shipping_state: String!, $shipping_postal: String!, $shipping_country: String!, $shipping_city: String!, $shipping: String!, $quote_stage: String!, $total: String!, $opportunity: String){
    createOneQuotes(data: {account: $account, contact: $contact, name: $name, grand_total: $grand_total, categories: $categories, quote_stage: $quote_stage, valid_until: $valid_until, approval_issues: $approval_issues, approval_status: $approval_status, assigned_to: $assigned_to, billing_city: $billing_city, billing_country: $billing_country, billing_postal: $billing_postal, billing_state: $billing_state, billing_street: $billing_street, contact: $contact, created_at: $created_at, currency: $currency, cust_id: $cust_id, customers: $customers, discount: $discount, invoice_status: $invoice_status, line_item_discount: $line_item_discount, line_item_group_total: $line_item_group_total, line_item_name: $line_item_name, line_item_total: $line_item_total, line_item_tax: $line_item_tax, line_item_subtotal: $line_item_subtotal, prod_id: $prod_id, payment_terms: $payment_terms, order_id: $order_id, tax: $tax, subtotal: $subtotal, shipping_tax: $shipping_tax, shipping_street: $shipping_street, shipping_state: $shipping_state, shipping_postal: $shipping_postal, shipping_country: $shipping_country, shipping_city: $shipping_city, shipping: $shipping, total: $total, opportunity: $opportunity}) {
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

  export default {
    data() {
      return {
        categories: [],
        account: " ",
        name: " ",
        grand_total: " ",
        quote_stage: " ",
        valid_until: " ",
        approval_issues: " ",
        approval_status: " ",
        assigned_to: " ",
        billing_city: " ",
        billing_country: " ",
        billing_postal: " ",
        billing_state: " ",
        billing_street: " ",
        contact: " ",
        opportunity: " ",
        created_at: " ",
        currency: " ",
        cust_id: " ",
        customers: " ",
        discount: " ",
        invoice_status: " ",
        line_item_discount: " ",
        line_item_group_total: " ",
        line_item_name: " ",
        line_item_total: " ",
        line_item_tax: " ",
        line_item_subtotal: " ",
        prod_id: " ",
        payment_terms: " ",
        order_id: " ",
        tax: " ",
        subtotal: " ",
        shipping_tax: " ",
        shipping_street: " ",
        shipping_state: " ",
        shipping_postal: " ",
        shipping_country: " ",
        shipping_city: " ",
        shipping: " ",
        total: " ",
      }
    },
    methods: {
      async addQuote() {
        const name = this.name;
        const grand_total = this.grand_total;
        const categories = this.categories;
        const quote_stage = this.quote_stage;
        const valid_until = this.valid_until;
        const approval_issues = this.approval_issues;
        const approval_status = this.approval_status;
        const assigned_to = this.assigned_to;
        const billing_city = this.billing_city;
        const billing_country = this.billing_country;
        const billing_postal = this.billing_postal;
        const billing_state = this.billing_state;
        const billing_street = this.billing_street;
        const account = this.account;
        const contact = this.contact;
        const created_at = this.created_at;
        const currency = this.currency;
        const cust_id = this.cust_id;
        const customers = this.customers;
        const discount = this.discount;
        const opportunity = this.opportunity;
        const invoice_status = this.invoice_status;
        const line_item_discount = this.line_item_discount;
        const line_item_group_total = this.line_item_group_total;
        const line_item_name = this.line_item_name;
        const line_item_total = this.line_item_total;
        const line_item_tax = this.line_item_tax;
        const line_item_subtotal = this.line_item_subtotal;
        const prod_id = this.prod_id;
        const payment_terms = this.payment_terms;
        const order_id = this.order_id;
        const tax = this.tax;
        const subtotal = this.subtotal;
        const shipping_tax = this.shipping_tax;
        const shipping_street = this.shipping_street;
        const shipping_state = this.shipping_state;
        const shipping_postal = this.shipping_postal;
        const shipping_country = this.shipping_country;
        const shipping_city = this.shipping_city;
        const shipping = this.shipping;
        const total = this.total;

        await this.$apollo.mutate({
          mutation: ADD_QUOTES,
          variables: {
            name,
            opportunity,
            grand_total,
            categories,
            quote_stage,
            valid_until,
            approval_issues,
            approval_status,
            assigned_to,
            billing_city,
            billing_country,
            billing_postal,
            billing_state,
            billing_street,
            contact,
            created_at,
            account,
            currency,
            cust_id,
            customers,
            discount,
            invoice_status,
            line_item_discount,
            line_item_group_total,
            line_item_name,
            line_item_total,
            line_item_tax,
            line_item_subtotal,
            prod_id,
            payment_terms,
            order_id,
            tax,
            subtotal,
            shipping_tax,
            shipping_street,
            shipping_state,
            shipping_postal,
            shipping_country,
            shipping_city,
            shipping,
            total,
          },
          update: (cache, {
            data: {
              insertCategories,
              insertCountries,
              insertCities,
              insertStates,
              insertCurrencies,
              insertUsers
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              const insertedCountry = insertCountries.returning;
              const insertedCity = insertCities.returning;
              const insertedState = insertStates.returning;
              const insertedCurrency = insertCurrencies.returning;
              const insertedCustomer = insertUsers.returning;
              console.log(insertedCategory, insertedCountry, insertedCity, insertedState, insertedCurrency,
                insertedUsers)
              console.log(insertedCategory)
              cache.writeQuery({
                query: findManyQuotes
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../../marketing/quotes'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.grand_total = ' ';
        this.categories = ' ';
        this.quote_stage = ' ';
        this.valid_until = ' ';
        this.approval_issues = ' ';
        this.approval_status = ' ';
        this.assigned_to = ' ';
        this.billing_city = ' ';
        this.billing_country = ' ';
        this.billing_postal = ' ';
        this.billing_state = ' ';
        this.billing_street = ' ';
        this.categories = ' ';
        this.contact = ' ';
        this.account = ' ';
        this.created_at = ' ';
        this.currency = ' ';
        this.cust_id = ' ';
        this.customers = ' ';
        this.discount = ' ';
        this.grand_total = ' ';
        this.invoice_status = ' ';
        this.line_item_discount = ' ';
        this.line_item_group_total = ' ';
        this.line_item_name = ' ';
        this.opportunity = ' ';
        this.line_item_total = ' ';
        this.line_item_tax = ' ';
        this.line_item_subtotal = ' ';
        this.prod_id = ' ';
        this.payment_terms = ' ';
        this.order_id = ' ';
        this.tax = ' ';
        this.subtotal = ' ';
        this.shipping_tax = ' ';
        this.shipping_street = ' ';
        this.shipping_state = ' ';
        this.shipping_postal = ' ';
        this.shipping_country = ' ';
        this.shipping_city = ' ';
        this.shipping = ' ';
        this.quote_stage = ' ';
        this.total = ' ';
        this.valid_until = ' ';
      },

    },
    apollo: {
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
    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New Quote'
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
