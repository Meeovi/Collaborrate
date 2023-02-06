<template>
    <div>
        <form enctype="multipart/form-data"  v-for="state in findManyStates" :key="state.id" @submit.prevent="updateState(state)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteState(state)">Delete</button></a>
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
              aria-controls="v-tabs-home" aria-selected="true">Edit State</a>
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
                        <td><input id="statesName" :hint="state.name" type="statesName" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State Country</td>
                      <td>
                        <select id="country" :hint="state.country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :hint="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <textarea :hint="state.description" cols="40" rows="10"></textarea>
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

  const UPDATE_STATE = gql`
    mutation ($name:String!,$description:String!,$image:String!,$country:String!){
    updateOneStates(data: {name: $name, description: $description, image: $image, country: $country} where: {id: $id}) {
        name
        description
        image
        country
  }
}`;

const DELETE_STATE = gql`
  mutation deleteOneStates($id: Int!){
  deleteOneStates(where: {id: $id}){
    name
        description
        image
        country
  }
}
`;

export default {
    head: {
        name: 'Edit State'
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
   async deleteState(state){
    await this.$apollo.mutate({
        mutation: DELETE_STATE,
        variables: {
          id: state.id
        },
        refetchQueries: [
          {
            query: findManyStates
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../inventory/states'})
            }).catch(err => console.log(err));
    },
    async updateState(state){
    await this.$apollo.mutate({
        mutation: UPDATE_STATE,
        variables: {
          id: state.id
        },
        refetchQueries: [
          {
            query: findManyStates
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyStates: {
      query: findManyStates,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
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