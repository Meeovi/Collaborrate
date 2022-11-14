<template>
    <div>
        <form  v-for="ooto in ootos" :key="ooto.id" @submit.prevent="addOoto">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save OOTO" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Out of Office</a>
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
                      <td style="text-align: right;">Login</td>
                      <td><input :value="ooto.login" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Location</td>
                      <td><input :value="ooto.whid" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Start Date</td>
                      <td><input :value="ooto.start_date" type="datetime-local" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">End Date</td>
                      <td><input :value="ooto.end_date" type="datetime-local" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td><textarea :value="ooto.description" cols="40" rows="10"></textarea></td>
                    </tr>
                  </tbody>
                </table>
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

  import ootos from "~/graphql/query/ootos";

  const DELETE_OOTO = gql`
    mutation ($login:String!,$description:String!,$whid:String!,$start_date:String!,$end_date:String){
    createOneOoto(data: {login: $login, description: $description, whid: $whid, start_date: $start_date, end_date: $end_date}) {
        whid
        login
        description
        start_date
        end_date
  }
}`;

const UPDATE_OOTO = gql`
  mutation updateOneooto($id: Int!){
  updateOneOoto(where: {id: $id}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit OOTO'
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
   async deleteOOTO(ooto){
    await this.$apollo.mutate({
        mutation: DELETE_OOTO,
        variables: {
          id: ooto.id
        },
        refetchQueries: [
          {
            query: ootos
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/system/ooto'})
            }).catch(err => console.log(err));
    },
    async updateOOTO(ooto){
    await this.$apollo.mutate({
        mutation: UPDATE_OOTO,
        variables: {
          id: ooto.id
        },
        refetchQueries: [
          {
            query: ootos
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    ootos: {
      query: ootos,
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