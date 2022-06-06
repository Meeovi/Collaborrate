<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Taxrate" @click="addTaxrate" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Taxrate</a>
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
                        <td style="text-align: right;">Country</td>
                        <td><FormulateInput id="taxRateName" v-model="country" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">State</td>
                        <td><FormulateInput id="taxRateName" v-model="state" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Zip/Postalcode</td>
                        <td><FormulateInput id="taxRateName" v-model="postcode" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Rate Percent</td>
                        <td><FormulateInput id="taxRateName" v-model="rate_percent" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Identifier</td>
                        <td><FormulateInput id="taxRateName" v-model="tax_identifier" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Zip/Postcode is Range</td>
                        <td><FormulateInput id="taxRateName" v-model="zip_post_is_range" type="text" required /></td>
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
import { taxRate } from "~/apollo/queries/shop/taxrate";

const ADD_TAX_RATE = gql`
    mutation ($country:String! $default_store_view:String! $zip_post_is_range:Boolean! $tax_identifier:String! $state:String! $rate_percent:String! $postcode:String){
    insert_tax_rate(objects: {country: $country, default_store_view: $default_store_view, zip_post_is_range: $zip_post_is_range, tax_identifier: $tax_identifier, state: $state, rate_percent: $rate_percent, postcode: $postcode}) {
    affected_rows
    returning {
      country
      default_store_view
      postcode
      rate_percent
      state
      tax_identifier
      zip_post_is_range
    }
  }
}`;

export default {
    data() {
    return {
        country: " ",
        default_store_view: " ",
        postcode: " ",
        rate_percent: " ",
        state: " ",
        tax_identifier: " ",
        zip_post_is_range: " ",
      }
  },
    head: {
        title: 'Add New Tax Rate'
    }, 
/* eslint-disable camelcase */  
  methods: {
      async addTaxRate() {
            const country = this.country;
            const default_store_view = this.default_store_view;
            const postcode = this.postcode;
            const rate_percent = this.rate_percent;
            const state = this.state;
            const tax_identifier = this.tax_identifier;
            const zip_post_is_range = this.zip_post_is_range;
            await this.$apollo.mutate({
                mutation: ADD_TAX_RATE,
                variables: {
                    country,
                    default_store_view,
                    postcode,
                    rate_percent,
                    state,
                    tax_identifier,
                    zip_post_is_range,
                 },
        update: (cache, { data: { insertTaxRates }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedTaxRate = insertTaxRates.returning;
                            console.log(insertedTaxRate)
                            cache.writeQuery({
                                query: taxRate
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/tax-rate'})
                }).catch(err => console.log(err));
                this.country = " ";
                this.default_store_view = " ";
                this.postcode = " ";
                this.rate_percent = " ";
                this.state = " ";
                this.tax_identifier = " ";
                this.zip_post_is_range = " ";
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