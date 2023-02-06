<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addFullFillment" >
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save FullFillment" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New FullFillment</a>
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
                      <td style="text-align: right;">Pickup</td>
                      <td>
                        <select id="pickup" v-model="pickup" name="template" class="form-category">
                          <option value="allow">Allows Pickup</option>
                          <option value="noPickups">No Pickups</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Stock</td>
                      <td>
                        <input v-model="stock" name="fullfillmentStock" type="number" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Company Name</td>
                      <td>
                        <input v-model="company" name="fullfillmentCompanyName" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">FullFillment Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Phone Number</td>
                      <td>
                        <input v-model="phone" type="phone" placeholder="#" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shipping Zones</td>
                      <td>
                        <select id="zones" v-model="shipping_zones" name="template" class="form-zones">
                          <option v-for="zones in findManyZones" :key="zones" :hint="zones">{{ zones.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address</td>
                      <td>
                        <input v-model="address" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address Line 2</td>
                      <td>
                        <input v-model="address_two" type="text" name="addressTwo" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">City</td>
                      <td>
                        <select id="category" v-model="city" name="template" class="form-category">
                          <option v-for="city in findManyCities" :key="city" :hint="city">{{ city.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td>
                        <select id="category" v-model="state" name="template" class="form-category">
                          <option v-for="state in findManyStates" :key="state" :hint="state">{{ state.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country Area</td>
                      <td>
                        <select id="countryArea" v-model="country_area" name="template" class="form-category">
                          <option value="NA">North America</option>
                          <option value="SA">South America</option>
                          <option value="CA">Central America</option>
                          <option value="EU">Europe</option>
                          <option value="AS">Asia</option>
                          <option value="OA">Oceania</option>
                          <option value="AN">Antartica</option>
                          <option value="AF">Africa</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="category" v-model="country" name="template" class="form-category">
                          <option v-for="country in findManyCountries" :key="country" :hint="country">{{ country.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Zipcode</td>
                      <td>
                        <input v-model="zipcode" name="fullfillmentZipcode" type="text" />
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

  import 
    findManyFullfillments
  from "../../graphql/query/findManyFullfillments";
  import  findManyStates from '../../graphql/query/findManyStates'
  import  findManyCountries from '../../graphql/query/findManyCountries'
  import  findManyCities from '../../graphql/query/findManyCities'
  import  findManyZones from "../../graphql/query/findManyZones"
  // import  companys from "../../graphql/query/findManyCompanys"

  const ADD_FULLFILLMENTS = gql`
    mutation ($name: String!,$company: String!,$phone: String!,$address: String!,$country_area: String!,$stock: String!,$shipping_zones: String!,$address_two: String!,$state: String!,$zipcode: String!,$country: String!,$pickup: String!,$city: String!,$pickup: String!){
    createOneFullfillments(data: {name: $name,company: $company,phone: $phone,address: $address,country_area: $country_area,zipcode: $zipcode,country: $country,stock: $stock,shipping_zones: $shipping_zones,address_two: $address_two,state: $state,country: $country,city: $city,pickup: $pickup,pickup: $pickup}) {
        country
        countries
        thumbnail
        name
        company
        phone
        address
        country_area
        stock
        shipping_zones
        zipcode
        address_two
        state
        city
        pickup
  }
}`;


  export default {
    data() {
      return {
        country: [],
        countries: [],
        thumbnail: " ",
        name: " ",
        company: " ",
        phone: " ",
        address: " ",
        country_area: " ",
        stock: " ",
        shipping_zones: " ",
        zipcode: " ",
        address_two: " ",
        state: " ",
        city: " ",
        pickup: " ",
        show: true
      }
    },
    head: {
      title: 'Add New FullFillment'
    },

    methods: {
      async addFullfillment() {
        const name = this.name;
        const company = this.company;
        const phone = this.phone;
        const address = this.address;
        // eslint-disable-next-line camelcase
        const country_area = this.country_area;
        const zipcode = this.zipcode;
        const country = this.country;
        const stock = this.stock;
        // eslint-disable-next-line camelcase
        const shipping_zones = this.shipping_zones;
        // eslint-disable-next-line camelcase
        const address_two = this.address_two;
        const state = this.state;
        const city = this.city;
        const pickup = this.pickup;

        await this.$apollo.mutate({
          mutation: ADD_FULLFILLMENTS,
          variables: {
            name,
            company,
            phone,
            address,
            country_area,
            zipcode,
            country,
            stock,
            shipping_zones,
            address_two,
            state,
            city,
            pickup,
          },
          update: (cache, {
            data: {
              insertFullfillments,
              insertCountries
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedFullfillment = insertFullfillments.returning;
              const insertedCountry = insertCountries.returning;
              const insertedCity = insertCities.returning;
              const insertedState = insertStates.returning;
              console.log( insertedFullfillment, insertedCountry, insertedCity, insertedState)
              cache.writeQuery({
                query: findManyFullfillments
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../inventory/fullfillments'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.company = ' ';
        this.phone = ' ';
        this.address = ' ';
        this.country_area = ' ';
        this.zipcode = ' ';
        this.country = ' ';
        this.stock = ' ';
        this.shipping_zones = ' ';
        this.address_two = ' ';
        this.state = ' ';
        this.country = ' ';
        this.city = ' ';
        this.pickup = ' ';
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
      findManyZones: {
        prefetch: true,
        query: findManyZones
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
