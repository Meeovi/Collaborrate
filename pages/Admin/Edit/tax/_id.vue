<template>
    <div>
        <form v-for="tax in findManyTaxes" :key="tax.id" @submit.prevent="addTaxrate()">
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
                        <select id="category" :value="tax.state" name="template" class="form-category">
                          <option v-for="state in findManyStates" :key="state" :value="state">{{ state.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="category" :value="tax.country" name="template" class="form-category">
                          <option v-for="country in findManyCountries" :key="country" :value="country">
                            {{ country.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Zip/Postalcode</td>
                      <td><input id="taxRateName" :value="tax.postcode" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Rate Percent</td>
                      <td><input id="taxRateName" :value="tax.rate_percent" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tax Identifier</td>
                      <td><input id="taxRateName" :value="tax.tax_identifier" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Zip/Postcode is Range</td>
                      <td><input id="taxRateName" :value="tax.zip_post_is_range" type="text" required /></td>
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
  import findManyTaxes from "~/graphql/query/findManyTaxes";
  import findManyCountries from "~/graphql/query/findManyCountries";
  import findManyStates from "~/graphql/query/findManyStates";

  const DELETE_TAX = gql`
    mutation ($country:String! $default_store_view:String! $zip_post_is_range:Boolean! $tax_identifier:String! $state:String! $rate_percent:String! $postcode:String){
    createOneTax(data: {country: $country, default_store_view: $default_store_view, zip_post_is_range: $zip_post_is_range, tax_identifier: $tax_identifier, state: $state, rate_percent: $rate_percent, postcode: $postcode}) {
    country
        default_store_view
        postcode
        rate_percent
        state
        tax_identifier
        zip_post_is_range
  }
}`;

const UPDATE_TAX = gql`
  mutation updateOneTaxes($id: Int!){
  updateOneTaxs(where: {id: $id}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Tax'
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
   async deleteTax(tax){
    await this.$apollo.mutate({
        mutation: DELETE_TAX,
        variables: {
          id: tax.id
        },
        refetchQueries: [
          {
            query: findManyTaxes
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/sales/taxes'})
            }).catch(err => console.log(err));
    },
    async updateTax(tax){
    await this.$apollo.mutate({
        mutation: UPDATE_TAX,
        variables: {
          id: tax.id
        },
        refetchQueries: [
          {
            query: findManyTaxes
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyTaxes: {
      query: findManyTaxes,
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