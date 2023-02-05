<template>
  <div>
    <form enctype="multipart/form-data"  v-for="brands in findManyBrands" :key="brands.id" @submit.prevent="updateBrands(brand)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteBrands(brand)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Brand" /></a>
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
                <v-table class="table">
                  <tbody>
                    <tr class="col-lg-6">
                      <td>
                        <label for="products">Products</label><br>
                        <select id="products" :hint="brands.products" name="template" class="form-category">
                          <option v-for="products in findManyProducts" :key="products" :hint="products">
                            {{ products.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td>
                        <input :hint="brands.code" name="fullfillmentCompanyName" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Brand Name</td>
                      <td>
                        <input :hint="brands.name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <input :hint="brands.description" type="textarea" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Public</td>
                      <td>
                        <input :hint="brands.isPublic" type="checkbox" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="cities">City</label><br>
                        <select id="cities" :hint="brands.city" name="template" class="form-category">
                          <option v-for="cities in findManyCities" :key="cities" :hint="cities">
                            {{ cities.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="states">State</label><br>
                        <select id="states" :hint="brands.state" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states" :hint="states">
                            {{ states.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="countries">Countries</label><br>
                        <select id="countries" :hint="brands.country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :hint="countries">
                            {{ countries.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Media</td>
                      <td>
                        <input :hint="brands.media" type="image" name="uploaded_file" />
                      </td>
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
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  findManyBrands from '../../graphql/query/findManyBrands'

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
  mutation updateOnebrands($id: Int, $name: String, $code: String, $description: String, $isPublic: String, $media: String, $country: String, $product: String, $state: String, $city: String){
  updateOneBrands(data: {name: $name,code: $code,description: $description,isPublic: $isPublic,media: $media,country: $country,product: $product,state: $state,country: $country,city: $city} (where: {id: $id})){
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
            this.$router.push({path: '../../inventory/brands'})
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
