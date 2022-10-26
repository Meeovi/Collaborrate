<template>
    <div>
        <form v-for="tax_rule in tax_rules" :key="tax_rule.id" @submit.prevent="addTaxrule()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Taxrule" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Taxrule</a>
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
                        <td style="text-align: right;">Tax Rule Name</td>
                        <td><input id="taxRuleName" v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Rate</td>
                        <td><input id="taxRate" v-model="tax_rate" type="text" required /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        </div>
        </div>
        </div>
    </form>
    </div>
</template>

<script>
import  gql from "graphql-tag";
// eslint-disable-next-line camelcase
import tax_rule from "~/graphql/generated/queries/tax_rules";

const DELETE_TAX_RULE = gql`
    mutation ($name:String!,$tax_rate:String){
    createOneTax_rule(data: {name: $name, tax_rate: $tax_rate}) {
        name
        tax_rate
  }
}`;

const UPDATE_TAX_RULE = gql`
  mutation updateOnetax_rules($id: Int!){
  updateOnetax_rules(where: {id: {equals: $id}}){
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
            query: tax_rules
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
            query: tax_rules
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