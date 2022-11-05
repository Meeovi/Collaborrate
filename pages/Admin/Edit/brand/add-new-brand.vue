<template>
  <div>
    <form  @submit.prevent="addBrand">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Brand" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Brand</a>
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
                          <option v-for="products in findManyProducts" :key="products" :value="products">
                            {{ products.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td>
                        <input v-model="code" name="fullfillmentCompanyName" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Brand Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <input v-model="description" type="textarea" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Public</td>
                      <td>
                        <select name="brandType" id="brandType" v-model="isPublic">
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="cities">City</label><br>
                        <select id="cities" v-model="city" name="template" class="form-category">
                          <option v-for="cities in findManyCities" :key="cities" :value="cities">
                            {{ cities.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="states">State</label><br>
                        <select id="states" v-model="state" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states" :value="states">
                            {{ states.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="countries">Countries</label><br>
                        <select id="countries" v-model="country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :value="countries">
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
  import  gql from "graphql-tag";

  import  findManyBrands from "~/graphql/query/findManyBrands";
  import  findManyCountries from "~/graphql/query/findManyCountries"
  import  findManyProducts from "~/graphql/query/findManyProducts"
  import  findManyCities from "~/graphql/query/findManyCities"
  import  findManyStates from "~/graphql/query/findManyStates"

  const ADD_BRANDS = gql`
    mutation ($name: String!,$code: String!,$description: String!,$isPublic: String!,$created_at: String!,$product: String!,$state: String!,$media: String!,$country: String!,$city: String!){
    createOneBrands(data: {name: $name,code: $code,description: $description,isPublic: $isPublic,created_at: $created_at,media: $media,country: $country,product: $product,state: $state,country: $country,city: $city}) {
        country
        countries
        thumbnail
        name
        code
        description
        isPublic
        created_at
        product
        media
        city
  }
}`;


  export default {
    data() {
      return {
        country: [],
        countries: [],
        thumbnail: " ",
        name: " ",
        code: " ",
        description: " ",
        isPublic: " ",
        created_at: " ",
        product: " ",
        media: " ",
        city: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Brand'
    },

    methods: {
      async addBrand() {
        const name = this.name;
        const code = this.code;
        const description = this.description;
        const isPublic = this.isPublic;
        // eslint-disable-next-line camelcase
        const created_at = this.created_at;
        const media = this.media;
        const country = this.country;
        const product = this.product;
        const state = this.state;
        const city = this.city;

        await this.$apollo.mutate({
          mutation: ADD_BRANDS,
          variables: {
            name,
            code,
            description,
            isPublic,
            created_at,
            media,
            country,
            product,
            state,
            city,
          },
          update: (cache, {
            data: {
              insertBrands,
              insertCountries
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedBrand = insertBrands.returning;
              const insertedCountries = insertCountries.returning;
              console.log(insertedBrand, insertedCountries)
              cache.writeQuery({
                query: findManyBrands
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../shop/brands'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.code = ' ';
        this.description = ' ';
        this.isPublic = ' ';
        this.created_at = ' ';
        this.media = ' ';
        this.country = ' ';
        this.product = ' ';
        this.state = ' ';
        this.country = ' ';
        this.city = ' ';
      },
    },
    apollo: {
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyProducts: {
        prefetch: true,
        query: findManyProducts
      },
      findManyCities: {
        prefetch: true,
        query: findManyCities
      },
      findManyStates: {
        prefetch: true,
        query: findManyStates
      },
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
