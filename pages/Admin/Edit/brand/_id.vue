<template>
  <div>
    <form v-for="brands in allBrandsList" :key="brands.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Brand" @click="addBrand" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Brand</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr class="col-lg-6">
                      <td>
                        <label for="products">Products</label><br>
                        <select id="products" v-model="products" name="template" class="form-category">
                          <option v-for="products in allProductssList" :key="products" :value="products">
                            {{ products.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td>
                        <input v-model="code" name="fullfillmentCompanyName" type="text" />{{ brands.code }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Brand Name</td>
                      <td>
                        <input v-model="name" type="text" required />{{ brands.name }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <input v-model="description" type="textarea" />{{ brands.description }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Public</td>
                      <td>
                        <input v-model="isPublic" type="checkbox" value="Check the box if Brand is public" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="cities">City</label><br>
                        <select id="cities" v-model="city" name="template" class="form-category">
                          <option v-for="cities in allCitiesList" :key="cities" :value="cities">
                            {{ cities.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="states">State</label><br>
                        <select id="states" v-model="state" name="template" class="form-category">
                          <option v-for="states in allStatesList" :key="states" :value="states">
                            {{ states.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="countries">Countries</label><br>
                        <select id="countries" v-model="country" name="template" class="form-category">
                          <option v-for="countries in allCountriesList" :key="countries" :value="countries">
                            {{ countries.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Media</td>
                      <td>
                        <input v-model="media" type="image" />
                      </td>
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
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  brands from '~/apollo/mutations/shop/brands'

const DELETE_BRAND = gql `
  mutation delete_brands($id: Int!){
  delete_brands(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_BRAND = gql `
  mutation update_brands($id: Int!){
  update_brands(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Brand'
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
   async deleteBrand(brand){
    await this.$apollo.mutate({
        mutation: DELETE_BRAND,
        variables: {
          id: brand.id
        },
        refetchQueries: [
          {
            query: brands
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/brands'})
            }).catch(err => console.log(err));
    },
    async updateBrand(brand){
    await this.$apollo.mutate({
        mutation: UPDATE_BRAND,
        variables: {
          id: brand.id
        },
        refetchQueries: [
          {
            query: brands
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    brands: {
      query: brands,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
