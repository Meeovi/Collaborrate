<template>
    <div>
        <FormulateForm v-for="invoice in invoices" :key="invoice.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="eventAddOptions">
                            <li style="display:inline-block;"><FormulateInput type="button" @click="addInvoice" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Customer Name</td>
                        <td><FormulateInput name="customerName" type="text" label="Customer Name on the Invoice" required />{{ invoice.customer_name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Bill to Name</td>
                        <td><FormulateInput name="orderNumber" type="text" label="Who should we bill to?" required />{{ invoice.bill_to_name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Customer Email</td>
                        <td><FormulateInput type="text" required label="Customer's Email used to email the invoice" />{{ invoice.email }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Billing Address</td>
                        <td><FormulateInput type="text" label="Billing address for this invoice" required />{{ invoice.billing_address }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Customer Group</td>
                        <td><FormulateInput type="text" label="Group this customer belongs to" />{{ invoice.customer_group }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Shipping Information</td>
                        <td><FormulateInput name="shippingInformation" type="text" label="Shipping service used for shipping" />{{ invoice.shipping_information }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Shipping and Handling</td>
                        <td><FormulateInput name="shippingHandling" type="text" label="How much does shipping cost?" />{{ invoice.shipping_and_handling }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Shipping Address</td>
                        <td><FormulateInput name="shippingInformation" type="text" label="Where is this the address where the products are shipped to?" />{{ invoice.shipping_address }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Payment Method</td>
                        <td><FormulateInput name="payment" type="text" label="What payment method is used for this transaction?" />{{ invoice.payment_method }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Grand Total Base</td>
                        <td><FormulateInput name="grandTotal" type="text" label="Amount of transaction with tax excluded" />{{ invoice.grand_total_base }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Grand Total Purchased</td>
                        <td><FormulateInput name="grandTotal" type="text" label="Amount of transaction with tax included" />{{ invoice.grand_total_purchased }}</td>
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
import invoices from '~/apollo/mutations/sales/invoices'
import allInvoices from '~/apollo/queries/sales/invoices'

const DELETE_INVOICE = gql `
  mutation delete_invoices($id: Int!){
  delete_invoices(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_INVOICE = gql `
  mutation update_invoices($id: Int!){
  update_invoices(where: {id: {_eq: $id}}){
    affected_rows
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
            query: allInvoices
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/sales/invoices'})
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
            query: allInvoices
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    invoices: {
      query: invoices,
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