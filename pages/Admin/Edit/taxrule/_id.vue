<template>
    <div>
        <FormulateForm v-for="tax_rule in tax_rules" :key="tax_rule.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th scope="col">
                        </th>
                        <th scope="col" class="taxRuleAddOptions">
                            <li><FormulateInput type="submit" @click="addTaxRule" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Tax Rule Name</td>
                        <td><FormulateInput id="taxRuleName" type="text" required />{{ tax_rule.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Rate</td>
                        <td><FormulateInput id="taxRate" type="text" required />{{ tax_rule.tax_rate }}</td>
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
import tax_rules from '~/apollo/mutations/shop/taxrule'
import allTax_rules from '~/apollo/queries/shop/taxrule'

const DELETE_TAX_RULE = gql `
  mutation delete_tax_rules($id: Int!){
  delete_tax_rules(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_TAX_RULE = gql `
  mutation update_tax_rules($id: Int!){
  update_tax_rules(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Tax_rule'
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
   async deleteTax_rule(tax_rule){
    await this.$apollo.mutate({
        mutation: DELETE_TAX_RULE,
        variables: {
          id: tax_rule.id
        },
        refetchQueries: [
          {
            query: allTax_rules
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/tax_rules'})
            }).catch(err => console.log(err));
    },
    async updateTax_rule(tax_rule){
    await this.$apollo.mutate({
        mutation: UPDATE_TAX_RULE,
        variables: {
          id: tax_rule.id
        },
        refetchQueries: [
          {
            query: allTax_rules
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    tax_rules: {
      query: tax_rules,
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