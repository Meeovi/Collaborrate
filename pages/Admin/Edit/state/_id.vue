<template>
    <div>
        <form v-for="state in findManyStates" :key="state.id" @submit.prevent="addState()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">

            <input type="submit" class="btn btn-warning" value="Save State" /></a>
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
                <table class="table">
                <tbody>
                    <tr>
                        <td style="text-align: right;">State Name</td>
                        <td><input id="statesName" :value="state.name" type="statesName" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State Country</td>
                      <td>
                        <select id="country" :value="state.country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :value="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <textarea :value="state.description" cols="40" rows="10"></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  import findManyStates from "~/graphql/query/findManyStates";
  import findManyCountries from "~/graphql/query/findManyCountries";

  const DELETE_STATE = gql`
    mutation ($name:String!,$description:String!,$image:String!,$country:String!){
    createOneStates(data: {name: $name, description: $description, image: $image, country: $country}) {
        name
        description
        image
        country
  }
}`;

const UPDATE_STATE = gql`
  mutation updateOnestates($id: Int!){
  updateOneStates(where: {id: $id}){
    affected_rows
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
            this.$router.push({path: '../../admin/shop/states'})
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