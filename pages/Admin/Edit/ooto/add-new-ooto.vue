<template>
  <div>
    <form @submit.prevent="addOoto">
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
              aria-controls="v-tabs-home" aria-selected="true">Create A New Out of Office</a>
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
                      <td><input v-model="login" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Location</td>
                      <td><input v-model="whid" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Start Date</td>
                      <td><input v-model="start_date" type="datetime-local" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">End Date</td>
                      <td><input v-model="end_date" type="datetime-local" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td><textarea v-model="description" cols="40" rows="10"></textarea></td>
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

  const ADD_OOTO = gql`
    mutation ($login:String!,$description:String!,$whid:String!,$start_date:String!,$end_date:String){
    createOneOoto(data: {login: $login, description: $description, whid: $whid, start_date: $start_date, end_date: $end_date}) {
        whid
        login
        description
        start_date
        end_date
  }
}`;

  export default {
    data() {
      return {
        whid: " ",
        login: " ",
        description: " ",
        start_date: " ",
        end_date: " ",

      }
    },
    methods: {
      async addOoto() {
        const login = this.login;
        // eslint-disable-next-line camelcase
        const start_date = this.start_date;
        const description = this.description;
        const whid = this.whid;
        // eslint-disable-next-line camelcase
        const end_date = this.end_date;
        await this.$apollo.mutate({
          mutation: ADD_OOTO,
          variables: {
            login,
            description,
            whid,
            start_date,
            end_date,
          },
          update: (cache, {
            data: {
              insertOoto
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedOoto = insertOoto.returning;
              console.log(insertedOoto)
              cache.writeQuery({
                query: ootos
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../system/ooto'
          })
        }).catch(err => console.log(err));
        this.login = ' ';
        this.description = ' ';
        this.whid = ' ';
        this.start_date = ' ';
        this.end_date = ' ';
      },

    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New OOTO'
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
