<template>
  <div>
    <FormulateForm v-for="currency in currencies" :key="currency.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><FormulateInput type="reset" class="btn btn-warning" label="Reset" /></a>
          <a class="navbar-brand"><FormulateInput type="button" label="Save Currency" @click="addCurrency" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Currency</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-excerpt">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table" >
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td><FormulateInput v-model="code" type="text" label="Example is AUD for Australia" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name</td>
                      <td><FormulateInput v-model="name" type="text" label="Example is Australian Dollar" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Region</td>
                      <td><FormulateInput v-model="region" type="text" label="What is the country of this currency?" /></td>
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
/* eslint-disable camelcase */
import gql from 'graphql-tag'
import currencies from '~/apollo/mutations/system/currencies'
import allCurrencies from '~/apollo/queries/system/currencies'

const DELETE_CURRENCY = gql `
  mutation delete_currencies($id: Int!){
  delete_currencies(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_CURRENCY = gql `
  mutation update_currencies($id: Int!){
  update_currencies(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Currency'
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
   async deleteCurrency(currency){
    await this.$apollo.mutate({
        mutation: DELETE_CURRENCY,
        variables: {
          id: currency.id
        },
        refetchQueries: [
          {
            query: allCurrencies
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/system/system-settings'})
            }).catch(err => console.log(err));
    },
    async updateCurrency(currency){
    await this.$apollo.mutate({
        mutation: UPDATE_CURRENCY,
        variables: {
          id: currency.id
        },
        refetchQueries: [
          {
            query: allCurrencies
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    currencies: {
      query: currencies,
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
