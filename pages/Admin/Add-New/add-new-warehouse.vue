<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Warehouse" @click="addWarehouse" /></a>
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
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Status</td>
                      <td>
                        <FormulateInput v-model="status" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Warehouse Name</td>
                      <td>
                        <FormulateInput v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <FormulateInput v-model="description" type="textarea" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Category</td>
                      <td>
                        <FormulateInput v-model="category" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">City</td>
                      <td>
                        <FormulateInput v-model="city" type="text" placeholder="#" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td>
                        <select id="category" v-model="states" name="template" class="form-category">
                          <option v-for="states in states" :key="states" :value="states">{{ states.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="category" v-model="countries" name="template" class="form-category">
                          <option v-for="countries in countries" :key="countries" :value="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Postal Code</td>
                      <td>
                        <FormulateInput v-model="postal" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Products</td>
                      <td>
                        <FormulateInput v-model="products" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Image</td>
                      <td>
                        <FormulateInput v-model="image" type="image" label="Select an image for the warehouse"
                          help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Public</td>
                      <td>
                        <FormulateInput v-model="isPublic" type="checkbox" />
                      </td>
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
  import gql from "graphql-tag";

  import {
    warehouses
  } from "~/apollo/queries/shop/warehouses";
  import states from '~/apollo/queries/shop/states'
  import countries from '~/apollo/queries/shop/countries'

  const ADD_WAREHOUSES = gql `
    mutation ($name: String!,$description: String!,$image: String!,$products: String!,$status: String!,$state: String!,$postal: String!,$country: String!,$isPublic: String!,$city: String){
    insert_warehouses(objects: {name: $name,description: $description,image: $image,postal: $postal,country: $country,products: $products,status: $status,state: $state,country: $country,city: $city,isPublic: $isPublic}) {
        affected_rows
        returning {
            name
            description
            image
            postal
            country
            websites
            products
            status
            state
            country
            city
            isPublic
    }
  }
}`;


  export default {
    data() {
      return {
        country: [],
        countries: [],
        thumbnail: " ",
        name: " ",
        description: " ",
        image: " ",
        websites: " ",
        products: [],
        postal: " ",
        status: " ",
        state: " ",
        city: " ",
        isPublic: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Warehouse'
    },

    methods: {
      async addWarehouse({
        target
      }) {
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
          },
          update: (cache, {
            data: {
              insertCategories,
              insertCountries
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              const insertedCountries = insertCountries.returning;
              console.log(insertedCategory, insertedCountries)
              cache.writeQuery({
                query: warehouses
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../shop/warehouses'
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
        this.country = ' ';
        this.city = ' ';
        this.isPublic = ' ';
      },
    },
    apollo: {
      states: {
        prefetch: true,
        query: states
      },
      countries: {
        prefetch: true,
        query: countries
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
