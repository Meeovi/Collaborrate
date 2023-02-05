<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addCity">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save City" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New City</a>
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
                      <td style="text-align: right;">City Name</td>
                      <td><input id="cityName" v-model="name" type="cityName" required /></td>
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
                      <td><input id="cityName" v-model="postalCode" type="text" /></td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
              <br><br>
              <div id="accordionExample" class="accordion">
                <div class="accordion-item">
                  <h2 id="headingOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Content
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="table table-responsive">
                        <v-table class="table">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <textarea v-model="description" cols="40" rows="10"></textarea>
                              </td>
                            </tr>
                          </tbody>
                        </v-table>
                      </div>
                    </div>
                  </div>
                </div>
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
  import findManyCities from "../../graphql/query/findManyCities";
  import findManyStates from '../../graphql/query/findManyStates'
  import findManyCountries from '../../graphql/query/findManyCountries'

  const ADD_CITIES = gql `
    mutation ($name:String!,$state:String,$country:String,$postalCode:String,$description:String){
    createOneCities(data: {name: $name, state: $state, country: $country, postalCode: $postalCode, description: $description}) {
        name
        state
        country
        postalCode
        description
  }
}`;

  export default {
    data() {
      return {
        name: " ",
        state: " ",
        country: " ",
        postalCode: " ",
        description: " ",
      }
    },

    methods: {
      async addCity() {
        const name = this.name;
        const state = this.state;
        const country = this.country;
        const postalCode = this.postalCode;
        const description = this.description;
        await this.$apollo.mutate({
          mutation: ADD_CITIES,
          variables: {
            name,
            state,
            country,
            postalCode,
            description,
          },
          update: (cache, {
            data: {
              insertCities
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCity = insertCities.returning;
              console.log(insertedCity)
              cache.writeQuery({
                query: findManyCities
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../inventory/cities'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.state = ' ';
        this.country = ' ';
        this.postalCode = ' ';
        this.description = ' ';
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
    },
    head: {
      title: 'Add New City'
    },
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
