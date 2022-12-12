<template>
  <div>
    <form v-for="brands in findManyBrands" :key="brands.id" @submit.prevent="add()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Brand" @submit.prevent="addBrand" /></a>
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
                        <select id="products" :value="brands.products" name="template" class="form-category">
                          <option v-for="products in productss" :key="products" :value="products">
                            {{ products.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td>
                        <input :value="brands.code" name="fullfillmentCompanyName" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Brand Name</td>
                      <td>
                        <input :value="brands.name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <input :value="brands.description" type="textarea" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Public</td>
                      <td>
                        <input :value="brands.isPublic" type="checkbox" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="cities">City</label><br>
                        <select id="cities" :value="brands.city" name="template" class="form-category">
                          <option v-for="cities in cities" :key="cities" :value="cities">
                            {{ cities.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="states">State</label><br>
                        <select id="states" :value="brands.state" name="template" class="form-category">
                          <option v-for="states in states" :key="states" :value="states">
                            {{ states.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="countries">Countries</label><br>
                        <select id="countries" :value="brands.country" name="template" class="form-category">
                          <option v-for="countries in countries" :key="countries" :value="countries">
                            {{ countries.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Media</td>
                      <td>
                        <input :value="brands.media" type="image" />
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
import  findManyBrands from '~/graphql/query/findManyBrands'

const DELETE_BRAND = gql`
  mutation deleteOnebrands($id: Int!){
  deleteOneBrands(where: {id: $id}){
    city
    code
    country
    createdAt
    description
    id
    isPublic
    media
    name
    nodeId
    product
    state
  }
}
`;

const UPDATE_BRAND = gql`
  mutation updateOnebrands($id: Int!){
  updateOneBrands(data: {name: $name,code: $code,description: $description,isPublic: $isPublic,created_at: $created_at,media: $media,country: $country,product: $product,state: $state,country: $country,city: $city}, (where: {id: $id})){
    city
    code
    country
    createdAt
    description
    id
    isPublic
    media
    name
    nodeId
    product
    state
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
            query: findManyBrands
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/shop/brands'})
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
            query: findManyBrands
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyBrands: {
      query: findManyBrands,
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
