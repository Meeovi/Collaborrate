<template>
    <div>
        <form v-for="tax_rate in findManyTax_rates" :key="tax_rate.id" @submit.prevent="addTaxrate()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Taxrate" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Taxrate</a>
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
                      <td style="text-align: right;">State</td>
                      <td>
                        <select id="category" v-model="state" name="template" class="form-category">
                          <option v-for="state in findManyStates" :key="state" :value="state">{{ state.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="category" v-model="country" name="template" class="form-category">
                          <option v-for="country in findManyCountries" :key="country" :value="country">
                            {{ country.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Zip/Postalcode</td>
                      <td><input id="taxRateName" v-model="postcode" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Rate Percent</td>
                      <td><input id="taxRateName" v-model="rate_percent" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tax Identifier</td>
                      <td><input id="taxRateName" v-model="tax_identifier" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Zip/Postcode is Range</td>
                      <td><input id="taxRateName" v-model="zip_post_is_range" type="text" required /></td>
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
  import gql from "graphql-tag";
  import findManyTax_rates from "~/graphql/generated/queries/tax_rates";
  import findManyCountries from "~/graphql/generated/queries/findManyCountries";
  import findManyStates from "~/graphql/generated/queries/findManyStates";

  const DELETE_TAX_RATE = gql `
    mutation ($country:String! $default_store_view:String! $zip_post_is_range:Boolean! $tax_identifier:String! $state:String! $rate_percent:String! $postcode:String){
    createOneTax_rate(data: {country: $country, default_store_view: $default_store_view, zip_post_is_range: $zip_post_is_range, tax_identifier: $tax_identifier, state: $state, rate_percent: $rate_percent, postcode: $postcode}) {
    country
        default_store_view
        postcode
        rate_percent
        state
        tax_identifier
        zip_post_is_range
  }
}`;

const UPDATE_TAX_RATE = gql`
  mutation updateOnetax_rates($id: Int!){
  updateOneTax_rates(where: {id: {equals: $id}}){
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
            query: findManyTax_rates
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
            query: findManyTax_rates
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyTax_rates: {
      query: findManyTax_rates,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
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