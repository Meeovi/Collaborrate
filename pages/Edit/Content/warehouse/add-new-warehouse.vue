<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addWarehouse()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Warehouse" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Warehouse</a>
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
                      <td style="text-align: right;">Status</td>
                      <td>
                        <select id="status" v-model="status" name="template" class="form-category">
                          <option value="open">Open</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Warehouse Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <textarea v-model="description" cols="40" rows="10"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Category</td>
                      <td>
                        <select id="category" v-model="category" name="template" class="form-category">
                          <option v-for="category in findManyCategories" :key="category" :hint="category">{{ category.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">City</td>
                      <td>
                        <select id="city" v-model="city" name="template" class="form-category">
                          <option v-for="city in findManyCities" :key="city" :hint="city">{{ city.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td>
                        <select id="state" v-model="state" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states" :hint="states">{{ states.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="country" v-model="country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :hint="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Postal Code</td>
                      <td>
                        <input v-model="postal" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Products</td>
                      <td>
                        <input v-model="products" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Image</td>
                      <td>
                        <input v-model="image" type="image"
                          help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Public</td>
                      <td>
                        <select id="status" v-model="isPublic" name="template" class="form-category">
                          <option value="public">Public</option>
                          <option value="private">Not Public</option>
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
  import  gql from "graphql-tag";

  import warehouses from "../../graphql/query/warehouses";
  import  findManyStates from '../../graphql/query/findManyStates'
  import  findManyCountries from '../../graphql/query/findManyCountries'
  import  findManyCities from '../../graphql/query/findManyCities'
  import findManyCategories from '../../graphql/query/findManyCategories'

  const ADD_WAREHOUSES = gql`
    mutation ($name: String!,$description: String!,$image: String!,$products: String!,$status: String!,$state: String!,$postal: String!,$country: String!,$isPublic: String!,$city: String!, $category: String!){
    createOneWarehouse(data: {name: $name,description: $description,image: $image,postal: $postal,country: $country,products: $products,status: $status,state: $state,city: $city,isPublic: $isPublic, category: $category}){
      country
        thumbnail
        name
        description
        category
        image
        websites
        products
        postal
        status
        state
        city
        isPublic
    }
}`;


  export default {
    data() {
      return {
        country: [],
        thumbnail: " ",
        name: " ",
        description: " ",
        category: "",
        image: " ",
        websites: " ",
        products: [],
        postal: " ",
        status: " ",
        state: " ",
        city: " ",
        isPublic: " "
      }
    },
    head: {
      title: 'Add New Warehouse'
    },

    methods: {
      async addWarehouse() {
        const name = this.name;
        const description = this.description;
        const image = this.image;
        const postal = this.postal;
        const country = this.country;
        const products = this.products;
        const status = this.status;
        const state = this.state;
        const city = this.city;
        const isPublic = this.isPublic;
        const category = this.category;

        await this.$apollo.mutate({
          mutation: ADD_WAREHOUSES,
          variables: {
            name,
            description,
            image,
            postal,
            country,
            products,
            status,
            state,
            city,
            isPublic,
            category
          },
          update: (cache, {
            data: {
              insertCategories,
              insertCountries,
              insertCities,
              insertStates
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              const insertedCountry = insertCountries.returning;
              const insertedCity = insertCities.returning;
              const insertedState = insertStates.returning;
              console.log(insertedCategory, insertedCountry, insertedCity, insertedState)
              cache.writeQuery({
                query: warehouses
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../inventory/warehouses'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.description = ' ';
        this.image = ' ';
        this.postal = ' ';
        this.country = ' ';
        this.products = ' ';
        this.status = ' ';
        this.state = ' ';
        this.city = ' ';
        this.isPublic = ' ';
        this.category = ' ';
      },
    },
    apollo: {
      findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyCities: {
        prefetch: true,
        query: findManyCities
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
