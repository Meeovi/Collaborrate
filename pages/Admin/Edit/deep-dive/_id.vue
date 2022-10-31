<template>
  <div>
    <form v-for="deepdive in deepdives" :key="deepdive.id" @submit.prevent="addDeepdive">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Deep Dive" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Deep Dive</a>
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
                      <td style="text-align: right;">Login (Username)</td>
                      <td>
                        <input :value="deepdive.login" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Start Date</td>
                      <td>
                        <input :value="deepdive.start_date" type="datetime-local" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">End Date</td>
                      <td>
                        <input :value="deepdive.end_date" type="datetime-local" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Attendees</td>
                      <td>
                        <select id="assignedTo" :value="deepdive.attendees">
                          <option v-for="users in findManyUsers" :key="users.id" :value="users">
                            {{ users.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discussion</td>
                      <td>
                        <client-only><Editor :value="deepdive.content" /></client-only>
                      </td>
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

  import deepdives from "~/graphql/generated/queries/deepdives";
  import findManyUsers from '~/graphql/generated/queries/findManyUsers'

  const DELETE_DEEPDIVE = gql`
    mutation ($login:String!,$whid:String!,$start_date:String!,$content:String!,$end_date:String!,$attendees:String){
    createOneDeepdive(data: {login: $login, whid: $whid, start_date: $start_date, content: $content, end_date: $end_date, attendees: $attendees}) {
        login
            whid
            start_date
            content
            end_date
            attendees
  }
}`;

const UPDATE_DEEPDIVE = gql`
  mutation updateOnedeepdive($id: Int!){
  updateOnedeepdive(where: {id: {equals: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Deep Dive'
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
   async deleteDeepdive(deepdive){
    await this.$apollo.mutate({
        mutation: DELETE_DEEPDIVE,
        variables: {
          id: deepdive.id
        },
        refetchQueries: [
          {
            query: deepdives
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/reports/deep-dive'})
            }).catch(err => console.log(err));
    },
    async updateDeepdive(deepdive){
    await this.$apollo.mutate({
        mutation: UPDATE_DEEPDIVE,
        variables: {
          id: deepdive.id
        },
        refetchQueries: [
          {
            query: deepdives
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    deepdives: {
      query: deepdives,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
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
