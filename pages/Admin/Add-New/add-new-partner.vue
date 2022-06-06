<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Partner" @click="addPartner" /></a>
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
        <table class="table">
          <tbody>
            <tr>
              <td style="text-align: right;">Partner Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Address</td>
              <td>
                <FormulateInput v-model="address" type="text" name="tax" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">City</td>
              <td>
                <FormulateInput v-model="city" type="text" required />
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
                  <option v-for="countries in countries" :key="countries" :value="countries">{{ countries.name }}
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Business Type</td>
              <td>
                <FormulateInput v-model="buiness_type" type="text" name="tax" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Is the Partner Public?</td>
              <td>
                <FormulateInput v-model="isPublic" type="checkbox" label="Check the box if the partner is public" />
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
  /* eslint-disable camelcase */
  import gql from "graphql-tag";
  import partners from "~/apollo/queries/shop/partners";
  import states from '~/apollo/queries/shop/states'
  import countries from '~/apollo/queries/shop/countries'

  const ADD_PARTNER = gql `
    mutation ($name:String!,$city:String!,$isPublic:String!,$state:String!,$country:String!,$business_type:String!,$address:String!){
    insert_partners(objects: {name: $name, city: $city, state: $state, isPublic: $isPublic, country: $country, business_type: $business_type, address: $address}) {
        affected_rows
        returning {
            name
            city
            state
            isPublic
            country
            business_type
            address
    }
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
                query: partners
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../shop/partners'
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
      states: {
        prefetch: true,
        query: states
      },
      countries: {
        prefetch: true,
        query: countries
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
