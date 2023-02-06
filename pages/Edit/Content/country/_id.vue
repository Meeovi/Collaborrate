<template>
    <div>
        <form enctype="multipart/form-data"  v-for="country in findManyCountries" :key="country.id" @submit.prevent="updateCountry(country)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteCountry(country)">Delete</button></a>
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
              aria-controls="v-tabs-home" aria-selected="true">Edit Country</a>
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
                      <td><input id="countriesName" :hint="country.name" type="countriesName" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country Region</td>
                      <td><select id="region" :hint="country.region" name="template" class="form-category">
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
                        <textarea :hint="country.description" cols="40" rows="10"></textarea>
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

  const UPDATE_COUNTRY = gql`
    mutation ($name:String!,$description:String,$image:String,$region:String){
    updateOneCountries(data: {name: $name, description: $description, image: $image, region: $region} where: {id: $id} where: {id: $id}) {
        name
        description
        image
        region
  }
}`;

const DELETE_COUNTRY = gql`
  mutation deleteOnecountries($id: Int!){
  deleteOneCountries(where: {id: $id}){
    name
    description
    image
    region
  }
}
`;

export default {
    head: {
        name: 'Edit Country'
    },
 mounted(){
      this.forceRerender();
  },
  // eslint-disable-next-line vue/order-in-components
  data(){
      return{
          componentKey: 0
      }
  },
  methods: {
   async deleteCountry(country){
    await this.$apollo.mutate({
        mutation: DELETE_COUNTRY,
        variables: {
          id: country.id
        },
        refetchQueries: [
          {
            query: findManyCountries
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../system/general-settings'})
            }).catch(err => console.log(err));
    },
    async updateCountry(country){
    await this.$apollo.mutate({
        mutation: UPDATE_COUNTRY,
        variables: {
          id: country.id
        },
        refetchQueries: [
          {
            query: findManyCountries
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyCountries: {
      query: findManyCountries,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
input, select, option {
    padding: 5px;
}

li {
    display: inline-block;
}
</style>