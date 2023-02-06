<template>

  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addState()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
          <a class="navbar-brand">

            <input type="submit" class="btn btn-warning" hint="Save State" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New State</a>
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
                        <td style="text-align: right;">State Name</td>
                        <td><input id="statesName" v-model="name" type="statesName" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State Country</td>
                      <td>
                        <select id="country" v-model="country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :hint="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
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
              <br><br>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import findManyStates from "../../graphql/query/findManyStates";
  import findManyCountries from "../../graphql/query/findManyCountries";

  const ADD_STATES = gql`
    mutation ($name:String!,$description:String!,$image:String!,$country:String!){
    createOneStates(data: {name: $name, description: $description, image: $image, country: $country}) {
        name
        description
        image
        country
  }
}`;

  export default {
    data() {
      return {
        name: " ",
        description: " ",
        image: " ",
        country: " ",
      }
    },

    methods: {
      async addState() {
        const name = this.name;
        const description = this.description;
        const image = this.image;
        const country = this.country;
        await this.$apollo.mutate({
          mutation: ADD_STATES,
          variables: {
            name,
            description,
            image,
            country
          },
          update: (cache, {
            data: {
              insertStates,
              insertCountries
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedState = insertStates.returning;
              const insertedCountry = insertCountries.returning;
              console.log(insertedState, insertedCountry)
              cache.writeQuery({
                query: findManyStates
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
        this.country = ' ';
      },
    },
    apollo: {
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
    },
    head: {
      title: 'Add New State'
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
