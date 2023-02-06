<template>
    <div>
        <form enctype="multipart/form-data"  v-for="invoice in findManyInvoices" :key="invoice.id" @submit.prevent="addInvoice">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Invoice" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Invoice</a>
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
                      <td style="text-align: right;">Customer Name</td>
                      <td><input :hint="invoice.customer_name" name="customerName" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Bill to Name</td>
                      <td><input :hint="invoice.bill_to_name" name="orderNumber" type="number"
                          required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Customer Email</td>
                      <td><input :hint="invoice.email" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Billing Address</td>
                      <td><input :hint="invoice.billing_address" type="text"
                          required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Customer Group</td>
                      <td><input :hint="invoice.customer_group" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shipping Information</td>
                      <td><input :hint="invoice.shipping_information" name="shippingInformation" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shipping and Handling</td>
                      <td><input :hint="invoice.shipping_and_handling" name="shippingHandling" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shipping Address</td>
                      <td><input :hint="invoice.shipping_address" name="shippingInformation" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Payment Method</td>
                      <td><input :hint="invoice.payment_method" name="payment" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Grand Total Base</td>
                      <td><input :hint="invoice.grand_total_base" name="grandTotal" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Grand Total Purchased</td>
                      <td><input :hint="invoice.grand_total_purchased" name="grandTotal" type="text" /></td>
                    </tr>
                  </tbody>
                </v-table>
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
  import findManyInvoices from "../../graphql/query/findManyInvoices";
  // import  grand_total_base from "../../graphql/query/findManyGrand_total_base"
  // import  findManyCountries from "../../graphql/query/findManyCountries"
  // import  attributes from "../../graphql/query/findManyAttributes"

  const UPDATE_INVOICE = gql`
    mutation ($subtotal: String!,$customer_name: String!,$shipping_information: String!,$shipping_address: String!,$shipping_and_handling: String!,$payment_method: String!,$bill_to_name: String!,$grand_total_purchased: String!,$customer_group: String!,$email: String!,$billing_address: String!,$grand_total_base: String){
    updateOneInvoices(data: {subtotal: $subtotal,customer_name: $customer_name,shipping_information: $shipping_information,shipping_and_handling: $shipping_and_handling,shipping_address: $shipping_address,payment_method: $payment_method,bill_to_name: $bill_to_name,customer_group: $customer_group,grand_total_purchased: $grand_total_purchased,grand_total_base: $grand_total_base,email: $email,billing_address: $billing_address} where: {id: $id}) {
        grand_total_base
            attributes
            subtotal
            customer_name
            shipping_information
            shipping_and_handling
            payment_method
            bill_to_name
            customer_group
            grand_total_purchased
            email
            billing_address
            shipping_address
  }
}`;

const DELETE_INVOICE = gql`
  mutation updateOneinvoices($id: Int!){
  deleteOneInvoices(where: {id: $id}){
    grand_total_base
            attributes
            subtotal
            customer_name
            shipping_information
            shipping_and_handling
            payment_method
            bill_to_name
            customer_group
            grand_total_purchased
            email
            billing_address
            shipping_address
  }
}
`;

export default {
    head: {
        name: 'Edit Invoice'
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
   async deleteInvoice(invoice){
    await this.$apollo.mutate({
        mutation: DELETE_INVOICE,
        variables: {
          id: invoice.id
        },
        refetchQueries: [
          {
            query: findManyInvoices
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../inventory/invoices'})
            }).catch(err => console.log(err));
    },
    async updateInvoice(invoice){
    await this.$apollo.mutate({
        mutation: UPDATE_INVOICE,
        variables: {
          id: invoice.id
        },
        refetchQueries: [
          {
            query: findManyInvoices
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyInvoices: {
      query: findManyInvoices,
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
</style>