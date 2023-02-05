<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Quote
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Quote</span>
                        </v-card-title>
                    </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal first name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal middle name" hint="example of helper text only on focus">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                                <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                    persistent-hint required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Password*" type="password" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-autocomplete
                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Interests" multiple></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Save
                    </v-btn>
                </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
  import gql from "graphql-tag";

  import findManyQuotes from "../../../../graphql/query/findManyQuotes.gql";
  import findManyCategories from '../../../../graphql/query/findManyCategories.gql'
  import findManyStates from '../../../../graphql/query/findManyStates.gql'
  import findManyCountries from '../../../../graphql/query/findManyCountries.gql'
  import findManyCities from '../../../../graphql/query/findManyCities.gql'
  import findManyCurrencies from '../../../../graphql/query/findManyCurrencies.gql'
  import findManyCustomers from '../../../../graphql/query/findManyCustomers.gql'
  import findManyUsers from '../../../../graphql/query/findManyUsers.gql'
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
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
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
              insertCustomers
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              const insertedCountry = insertCountries.returning;
              const insertedCity = insertCities.returning;
              const insertedState = insertStates.returning;
              const insertedCurrency = insertCurrencies.returning;
              const insertedCustomer = insertCustomers.returning;
              console.log(insertedCategory, insertedCountry, insertedCity, insertedState, insertedCurrency,
                insertedCustomers)
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
      findManyCustomers: {
        prefetch: true,
        query: findManyCustomers
      },
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
    },
    }
</script>