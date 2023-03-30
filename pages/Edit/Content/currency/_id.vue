<template>
  <div>
    <form enctype="multipart/form-data"  v-for="currency in findManyCurrencies" :key="currency.id" @submit="updateCurrency(currency)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" hint="Reset" @click="deleteCurrency(currency)" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" hint="Save Currency" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Currency</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-excerpt">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <v-table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td><input :hint="currency.code" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name</td>
                      <td><input :hint="currency.name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Region</td>
                      <td><select id="region" :hint="currency.region" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :hint="countries">
                            {{ countries.name }}
                          </option>
                        </select></td>
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
  import findManyCurrencies from "../../graphql/query/findManyCurrencies"
  import findManyCountries from "../../graphql/query/findManyCountries"

  const UPDATE_CURRENCY = gql`
    mutation ($code:String!,$name:String!$region:String!){
    updateOneCurrencies(data: {code: $code, name: $name, region: $region} where: {id: $id} where: {id: $id}) {
        code
        name
        region
  }
}`;

const DELETE_CURRENCY = gql`
  mutation updateOnecurrencies($id: Int){
  updateOneCurrencies(where: {id: $id}){
    code
    name
    region
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
            query: findManyCurrencies
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../system/system-settings'})
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
            query: findManyCurrencies
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyCurrencies: {
      query: findManyCurrencies,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
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
</style>
