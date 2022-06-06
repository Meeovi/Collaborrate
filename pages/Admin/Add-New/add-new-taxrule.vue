<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Taxrule" @click="addTaxrule" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Taxrule</a>
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
                        <td><FormulateInput id="taxRuleName" v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Rate</td>
                        <td><FormulateInput id="taxRate" v-model="tax_rate" type="text" required /></td>
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
// eslint-disable-next-line camelcase
import { tax_rule } from "~/apollo/queries/shop/taxrule";

const ADD_TAX_RULE = gql`
    mutation ($name:String!,$tax_rate:String){
    insert_tax_rule(objects: {name: $name, tax_rate: $tax_rate}) {
        affected_rows
        returning {
            name
            tax_rate
    }
  }
}`;

export default {
    data() {
    return {
        name: " ",
        tax_rate: " ",
      }
  },
    head: {
        title: 'Add New TaxRule'
    }, 
   
  methods: {
      async addTaxRule() {
            const name = this.name;
            // eslint-disable-next-line camelcase
            const tax_rate = this.tax_rate;
            await this.$apollo.mutate({
                mutation: ADD_TAX_RULE,
                variables: {
                    name,
                    tax_rate,
                 },
        update: (cache, { data: { insertTaxRules }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedTaxRule = insertTaxRules.returning;
                            console.log(insertedTaxRule)
                            cache.writeQuery({
                                query: tax_rule
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/tax-rule'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.tax_rate = ' ';
            },
        },
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