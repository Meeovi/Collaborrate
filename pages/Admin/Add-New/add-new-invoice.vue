<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Invoice" @click="addInvoice" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Invoice</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                <tbody>
                    <tr>
                        <td style="text-align: right;">Customer Name</td>
                        <td><FormulateInput v-model="customer_name" name="customerName" type="text" label="Customer Name on the Invoice" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Bill to Name</td>
                        <td><FormulateInput v-model="bill_to_name" name="orderNumber" type="text" label="Who should we bill to?" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Customer Email</td>
                        <td><FormulateInput v-model="email" type="text" required label="Customer's Email used to email the invoice" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Billing Address</td>
                        <td><FormulateInput v-model="billing_address" type="text" label="Billing address for this invoice" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Customer Group</td>
                        <td><FormulateInput v-model="customer_group" type="text" label="Group this customer belongs to" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Shipping Information</td>
                        <td><FormulateInput v-model="shipping_information" name="shippingInformation" type="text" label="Shipping service used for shipping" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Shipping and Handling</td>
                        <td><FormulateInput v-model="shipping_and_handling" name="shippingHandling" type="text" label="How much does shipping cost?" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Shipping Address</td>
                        <td><FormulateInput v-model="shipping_address" name="shippingInformation" type="text" label="Where is this the address where the products are shipped to?" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Payment Method</td>
                        <td><FormulateInput v-model="payment_method" name="payment" type="text" label="What payment method is used for this transaction?" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Grand Total Base</td>
                        <td><FormulateInput v-model="grand_total_base" name="grandTotal" type="text" label="Amount of transaction with tax excluded" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Grand Total Purchased</td>
                        <td><FormulateInput v-model="grand_total_purchased" name="grandTotal" type="text" label="Amount of transaction with tax included" /></td>
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
import gql from "graphql-tag";
import { invoices } from "~/apollo/queries/sales/invoices";
// import grand_total_base from "~/apollo/queries/shop/grand_total_base"
// import countries from "~/apollo/queries/shop/countries"
// import attributes from "~/apollo/queries/shop/attributes"

const ADD_INVOICES = gql`
    mutation ($subtotal: String!,$customer_name: String!,$shipping_information: String!,$shipping_address: String!,$shipping_and_handling: String!,$payment_method: String!,$bill_to_name: String!,$grand_total_purchased: String!,$customer_group: String!,$email: String!,$billing_address: String!,$grand_total_base: String){
    insert_invoices(objects: {subtotal: $subtotal,customer_name: $customer_name,shipping_information: $shipping_information,shipping_and_handling: $shipping_and_handling,shipping_address: $shipping_address,payment_method: $payment_method,bill_to_name: $bill_to_name,customer_group: $customer_group,grand_total_purchased: $grand_total_purchased,grand_total_base: $grand_total_base,email: $email,billing_address: $billing_address}) {
        affected_rows
        returning {
            subtotal
            customer_name
            shipping_information
            shipping_and_handling
            payment_method
            bill_to_name
            customer_group
            grand_total_purchased
            grand_total_base
            email
            billing_address
            shipping_address
    }
  }
}`;

export default {
    data() {
        return {
            grand_total_base: [],
            attributes: [],
            subtotal: " ",
            customer_name: " ",
            shipping_information: " ",
            shipping_and_handling: " ",
            payment_method: " ",
            bill_to_name: " ",
            customer_group: " ",
            grand_total_purchased: " ",
            email: " ",
            billing_address: " ",
            shipping_address: " ",
            options: {
                url: "../../media/",
                subtotalWidth: 150,
                maxFilesize: 10,
                createImageThumbnails: true,
                maxThumbnailFileSize: 4,
                duplicateCheck: true,
                includeStyling: true,
                headers: { "My-Awesome-Header": "header value" }
            }
        }
  },
    head: {
        title: 'Add New Invoice'
    }, 
   
  methods: {/* eslint-disable camelcase */
      async addInvoice() {
            const subtotal = this.subtotal;
            const customer_name = this.customer_name;
            const shipping_information = this.shipping_information;
            const shipping_and_handling = this.shipping_and_handling;
            const payment_method = this.payment_method;
            const bill_to_name = this.bill_to_name;
            const customer_group = this.customer_group;
            const grand_total_purchased = this.grand_total_purchased;
            const grand_total_base = this.grand_total_base;
            const email = this.email;
            const billing_address = this.billing_address;
            const shipping_address = this.shipping_address;

            await this.$apollo.mutate({
                mutation: ADD_INVOICES,
                variables: {
                    subtotal,
                    customer_name,
                    shipping_information,
                    shipping_and_handling,
                    payment_method,
                    bill_to_name,
                    customer_group,
                    grand_total_purchased,
                    grand_total_base,
                    email,
                    billing_address,
                    shipping_address,
                 },
        update: (cache, { data: { insertCategories, insertCountries }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCategory = insertCategories.returning;
                            const insertedCountries = insertCountries.returning;
                            console.log(insertedCategory, insertedCountries)
                            cache.writeQuery({
                                query: invoices
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../sales/invoices'})
                }).catch(err => console.log(err));
                    this.subtotal = ' ';
                    this.customer_name = ' ';
                    this.shipping_information = ' ';
                    this.shipping_and_handling = ' ';
                    this.payment_method = ' ';
                    this.bill_to_name = ' ';
                    this.customer_group = ' ';
                    this.grand_total_purchased = ' ';
                    this.grand_total_base = ' ';
                    this.email = ' ';
                    this.billing_address = ' ';
                    this.shipping_address = ' ';
                },
        },
        apollo: {/*
                    grand_total_base: {
                    prefetch: true,
                    query: grand_total_base
                    },
                 countries: {
                    prefetch: true,
                    query: countries
                    },
                    attributes: {
                    prefetch: true,
                    query: attributes
                    } */
            } 
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>