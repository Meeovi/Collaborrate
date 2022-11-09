<template>
    <div>
        <form @submit.prevent="addUser()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">

            <input type="submit" class="btn btn-warning" username="Save User" /></a>

        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New User</a>
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
                        <td style="text-align: right;">First Name</td>
                        <td><input v-model="first_name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Last Name</td>
                        <td><input v-model="last_name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Email Address</td>
                        <td><input v-model="email" type="email" name="email" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Username</td>
                        <td><input v-model="username" type="username" name="username" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Password</td>
                        <td><input v-model="password" type="password" name="password" required /></td>
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
/* eslint-disable camelcase */
import  gql from "graphql-tag";
import findManyUsers from "~/graphql/query/findManyUsers";
// import  tax from '~/graphql/query/findManyTax'

const ADD_USER = gql`
    mutation ($first_name:String!,$last_name:String!,$username:String!,$email:String!, $password: String!){
    createOneUsers(data: {first_name: $first_name, last_name: $last_name, email: $email, username: $username, password: $password}) {
        email
        first_name
        last_name
        username
        password
  }
}`;

export default {
    data() {
    return {
        email: " ",
        first_name: " ",
        last_name: " ",
        username: " ",
        password: " ",
      }
  },
  methods: {
      async addUser() {
            const first_name = this.first_name;
            const last_name = this.last_name;
            const email = this.email;
            const username = this.username;
            const password = this.password;
            await this.$apollo.mutate({
                mutation: ADD_USER,
                variables: {
                    first_name,
                    last_name,
                    email,
                    username,
                    password
                },
        update: (cache, { data: { insertStaffMember }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedStaffMember = insertStaffMember.returning;
                            console.log(insertedStaffMember)
                            cache.writeQuery({
                                query: findManyUsers
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../../system/staff-members'})
                }).catch(err => console.log(err));
                this.first_name = ' ';
                this.last_name = ' ';
                this.email = ' ';
                this.username = ' ';
                this.password = ' ';
            },
        },
    /* apollo: {
        tax: {
        prefetch: true,
        query: tax
        } 
    }, */
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Add New Staff Members'
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