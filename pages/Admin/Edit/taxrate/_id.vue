<template>
    <div>
        <FormulateForm v-for="tax_rate in tax_rates" :key="tax_rate.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th scope="col">
                        </th>
                        <th scope="col" class="taxRateAddOptions">
                            <li><FormulateInput type="submit" @click="addTaxRate" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Country</td>
                        <td><FormulateInput id="taxRateName" type="text" required />{{ tax_rate.country }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">State</td>
                        <td><FormulateInput id="taxRateName" type="text" />{{ tax_rate.state }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Zip/Postalcode</td>
                        <td><FormulateInput id="taxRateName" type="text" />{{ tax_rate.postcode }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Rate Percent</td>
                        <td><FormulateInput id="taxRateName" type="text" required />{{ tax_rate.rate_percent }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Identifier</td>
                        <td><FormulateInput id="taxRateName" type="text" required />{{ tax_rate.tax_identifier }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Zip/Postcode is Range</td>
                        <td><FormulateInput id="taxRateName" type="text" required />{{ tax_rate.zip_post_is_range }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
/* eslint-disable camelcase */
import gql from 'graphql-tag'
import tax_rates from '~/apollo/mutations/shop/taxrate'
import allTax_rates from '~/apollo/queries/shop/taxrate'

const DELETE_TAX_RATE = gql `
  mutation delete_tax_rates($id: Int!){
  delete_tax_rates(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_TAX_RATE = gql `
  mutation update_tax_rates($id: Int!){
  update_tax_rates(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Tax_rate'
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
   async deleteTax_rate(tax_rate){
    await this.$apollo.mutate({
        mutation: DELETE_TAX_RATE,
        variables: {
          id: tax_rate.id
        },
        refetchQueries: [
          {
            query: allTax_rates
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/sales/tax_rates'})
            }).catch(err => console.log(err));
    },
    async updateTax_rate(tax_rate){
    await this.$apollo.mutate({
        mutation: UPDATE_TAX_RATE,
        variables: {
          id: tax_rate.id
        },
        refetchQueries: [
          {
            query: allTax_rates
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    tax_rates: {
      query: tax_rates,
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