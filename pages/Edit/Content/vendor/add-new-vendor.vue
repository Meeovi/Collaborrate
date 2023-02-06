<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addVendor()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Vendor</a>
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
                        <input v-model="name" type="text" required />
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
                        <input v-model="website" type="url" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <textarea v-model="description" cols="40" rows="10"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Vendor Image</td>
                      <td>
                        <input v-model="image" type="image" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tags</td>
                      <td>
                        <input v-model="tags" type="text" />
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

  const ADD_VENDORS = gql `
    mutation ($name: String!,$products: String!,$website: String!,$categories: String!,$country: String!,$description: String!,$image: String!,$tags: String!,$physical_store: String!,$type: String!){
    createOneVendors(data: {name: $name,products: $products,categories: $categories,website: $website,country: $country,description: $description,image: $image,tags: $tags,physical_store: $physical_store,type: $type}) {
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


  export default {
    data() {
      return {
        categories: "",
        name: " ",
        products: " ",
        website: " ",
        country: " ",
        description: " ",
        image: " ",
        tags: " ",
        physical_store: " ",
        type: " "
      }
    },
    head: {
      title: 'Add New Vendor'
    },

    methods: {
      async addVendor() {
        const name = this.name;
        const products = this.products;
        const categories = this.categories;
        const website = this.website;
        const country = this.country;
        const description = this.description;
        const image = this.image;
        const tags = this.tags;
        const physical_store = this.physical_store;
        const type = this.type;

        await this.$apollo.mutate({
          mutation: ADD_VENDORS,
          variables: {
            name,
            products,
            categories,
            website,
            country,
            description,
            image,
            tags,
            physical_store,
            type,
          },
          update: (cache, {
            data: {
              insertCategories,
              insertCountries,
              insertProducts
            }
          }) => {
            try {
              const insertedCategory = insertCategories.returning;
              const insertedCountry = insertCountries.returning;
              const insertedProduct = insertProducts.returning;
              console.log(insertedCategory, insertedCountry, insertedProduct)
              cache.writeQuery({
                query: findManyVendors
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../inventory/vendors'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.products = ' ';
        this.categories = ' ';
        this.website = ' ';
        this.country = ' ';
        this.description = ' ';
        this.image = ' ';
        this.tags = ' ';
        this.physical_store = ' ';
        this.type = ' ';
      },
    },
    apollo: {
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

</style>
