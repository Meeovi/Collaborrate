<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addPartner">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Partner" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Partner</a>
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
                      <td style="text-align: right;">Partner Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address</td>
                      <td>
                        <input v-model="address" type="text" name="tax" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">City</td>
                      <td>
                        <select id="city" v-model="city" name="template" class="form-category">
                          <option v-for="city in findManyCities" :key="city.id" :hint="city">{{ city.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td>
                        <select id="states" v-model="states" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states.id" :hint="states">{{ states.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="countries" v-model="countries" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries.id" :hint="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Business Type</td>
                      <td>
                        <select id="businessType" v-model="business_type" name="template" class="form-category">
                          <option value="digital">Digital</option>
                          <option value="physical">Has Physical Location</option>
                          <option value="digitalPhysical">Digital & Physical Location</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Is the Partner Public?</td>
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
  /* eslint-disable camelcase */
  import gql from "graphql-tag";
  import findManyPartners from "../../graphql/query/findManyPartners";
  import findManyStates from '../../graphql/query/findManyStates'
  import findManyCountries from '../../graphql/query/findManyCountries'
  import findManyCities from '../../graphql/query/findManyCities'

  const ADD_PARTNER = gql `
    mutation ($name:String!,$city:String!,$isPublic:String!,$state:String!,$country:String!,$business_type:String!,$address:String!){
    createOnePartners(data: {name: $name, city: $city, state: $state, isPublic: $isPublic, country: $country, business_type: $business_type, address: $address}) {
        state
        name
        city
        isPublic
        country
        business_type
        address
  }
}`;

  export default {
    data() {
      return {
        state: [],
        name: " ",
        city: [],
        isPublic: " ",
        country: [],
        business_type: " ",
        address: " ",
      }
    },
    methods: {
      async addPartner() {
        const name = this.name;
        const city = this.city;
        const state = this.state;
        const isPublic = this.isPublic;
        const country = this.country;
        const business_type = this.business_type;
        const address = this.address;
        await this.$apollo.mutate({
          mutation: ADD_PARTNER,
          variables: {
            name,
            city,
            state,
            isPublic,
            country,
            business_type,
            address,
          },
          update: (cache, {
            data: {
              insertPartners
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedPartners = insertPartners.returning;
              console.log(insertedPartners)
              cache.writeQuery({
                query: findManyPartners
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../inventory/partners'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.city = ' ';
        this.state = ' ';
        this.isPublic = ' ';
        this.country = ' ';
        this.business_type = ' ';
        this.address = ' ';
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
      findManyCities: {
        prefetch: true,
        query: findManyCities
      },
    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New Partner'
    }
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

  li {
    display: inline-block;
  }

</style>
