<template>
  <div>
    <form enctype="multipart/form-data"  v-for="vendor in findManyVendors" :key="vendor.id"  @submit.prevent="updateVendor(vendor)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteVendor(vendor)">Delete</button></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Vendor</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <v-table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Vendor Name</td>
                      <td>
                        <input :hint="vendor.name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Vendor Type</td>
                      <td>
                        <select id="type" v-model="type" name="template" class="form-category">
                          <option value="reseller">Reseller</option>
                          <option value="contentCreator">Content Creator</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="category" v-model="country" name="template" class="form-country">
                          <option v-for="country in findManyCountries" :key="country" :hint="categories">
                            {{ country.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Categories</td>
                      <td>
                        <select id="category" v-model="categories" name="template" class="form-category">
                          <option v-for="categories in findManyCategories" :key="categories" :hint="categories">
                            {{ categories.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Physical Store</td>
                      <td>
                        <select id="status" v-model="physical_store" name="template" class="form-category">
                          <option value="public">Has Physical Store</option>
                          <option value="private">Doesn't Have Physical Store</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Website</td>
                      <td>
                        <input :hint="vendor.website" type="url" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <textarea :hint="vendor.description" cols="40" rows="10"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Vendor Image</td>
                      <td>
                        <input :hint="vendor.image" type="image" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tags</td>
                      <td>
                        <input :hint="vendor.tags" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Products</td>
                      <td>
                        <select id="products" v-model="products" name="template" class="form-products">
                          <option v-for="products in findManyProducts" :key="products" :hint="categories">
                            {{ products.name }}</option>
                        </select>
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
  import gql from "graphql-tag";
  /* eslint-disable camelcase */
  import findManyVendors from "../../graphql/query/findManyVendors";
  import findManyCategories from "../../graphql/query/findManyCategories"
  import findManyCountries from "../../graphql/query/findManyCountries"
  import findManyProducts from "../../graphql/query/findManyProducts"

  const DELETE_VENDOR = gql`
    mutation ($name: String!,$products: String!,$website: String!,$categories: String!,$country: String!,$description: String!,$image: String!,$tags: String!,$physical_store: String!,$type: String!){
    updateOneVendors(data: {name: $name,products: $products,categories: $categories,website: $website,country: $country,description: $description,image: $image,tags: $tags,physical_store: $physical_store,type: $type} where: {id: $id}) {
        categories
        name
        products
        website
        country
        description
        image
        tags
        physical_store
        type
  }
}`;

const UPDATE_VENDOR = gql`
  mutation deleteOneVendors($id: Int){
  deleteOneVendors(where: {id: $id}){
    categories
        name
        products
        website
        country
        description
        image
        tags
        physical_store
        type
  }
}
`;

export default {
    head: {
        name: 'Edit Vendor'
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
   async deleteVendor(vendor){
    await this.$apollo.mutate({
        mutation: DELETE_VENDOR,
        variables: {
          id: vendor.id
        },
        refetchQueries: [
          {
            query: findManyVendors
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../inventory/vendors'})
            }).catch(err => console.log(err));
    },
    async updateVendor(vendor){
    await this.$apollo.mutate({
        mutation: UPDATE_VENDOR,
        variables: {
          id: vendor.id
        },
        refetchQueries: [
          {
            query: findManyVendors
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyVendors: {
      query: findManyVendors,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyProducts: {
        prefetch: true,
        query: findManyProducts
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
