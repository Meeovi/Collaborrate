<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addCountry()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Country" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Country</a>
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
                      <td style="text-align: right;">Country Name</td>
                      <td><input id="countriesName" v-model="name" type="countriesName" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country Region</td>
                      <td><select id="region" v-model="region" name="template" class="form-category">
                          <option value="NA">North America</option>
                          <option value="SA">South America</option>
                          <option value="CA">Central America</option>
                          <option value="EU">Europe</option>
                          <option value="AS">Asia</option>
                          <option value="OA">Oceania</option>
                          <option value="AN">Antartica</option>
                          <option value="AF">Africa</option>
                        </select></td>
                    </tr>
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
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import findManyCountries from "../../graphql/query/findManyCountries";

  const ADD_COUNTRIES = gql `
    mutation ($name:String!,$description:String,$image:String,$region:String){
    createOneCountries(data: {name: $name, description: $description, image: $image, region: $region}) {
        name
        description
        image
        region
  }
}`;

  export default {
    data() {
      return {
        name: " ",
        description: " ",
        image: " ",
        region: " ",
      }
    },

    methods: {
      async addCountry() {
        const name = this.name;
        const description = this.description;
        const image = this.image;
        const region = this.region;
        await this.$apollo.mutate({
          mutation: ADD_COUNTRIES,
          variables: {
            name,
            description,
            image,
            region
          },
          update: (cache, {
            data: {
              insertCountries
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCountry = insertCountries.returning;
              console.log(insertedCountry)
              cache.writeQuery({
                query: findManyCountries
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../system/general-settings'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.description = ' ';
        this.image = ' ';
        this.region = ' ';
      },
    },
    head: {
      title: 'Add New Country'
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
