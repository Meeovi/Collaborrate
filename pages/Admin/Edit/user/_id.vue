<template>
    <div>
        <form v-for="user in findManyUsers" :key="user.id" @submit.prevent="updateUser(user)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteUser(user)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Ticket" /></a>
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
                        <td><input :value="user.first_name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Last Name</td>
                        <td><input :value="user.last_name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Email Address</td>
                        <td><input :value="user.email" type="email" name="email" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Username</td>
                        <td><input :value="user.username" type="username" name="username" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Password</td>
                        <td><input :value="user.password" type="password" name="password" required /></td>
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
    /* eslint-disable camelcase */
    import findManyUsers from "~/graphql/query/findManyUsers";
  
    const UPDATE_USER = gql`
      mutation ($first_name:String!,$last_name:String!,$username:String!,$email:String!, $password: String!){
        updateOneUsers(data: {first_name: $first_name, last_name: $last_name, email: $email, username: $username, password: $password} where: {id: $id}) {
            email
            first_name
            last_name
            username
            password
    }
    }`;
  
  const DELETE_USER = gql`
    mutation deleteOneUsers($id: Int){
    deleteOneUsers(where: {id: $id}){
        email
            first_name
            last_name
            username
            password
    }
  }
  `;
  
  export default {
      head: {
          name: 'Edit User'
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
     async deleteUser(user){
      await this.$apollo.mutate({
          mutation: DELETE_USER,
          variables: {
            id: user.id
          },
          refetchQueries: [
            {
              query: findManyUsers
            }       
            
          ]
        }).then(() => {
              this.$router.push({path: '../../system/staff-members'})
              }).catch(err => console.log(err));
      },
      async updateUser(user){
      await this.$apollo.mutate({
          mutation: UPDATE_USER,
          variables: {
            id: user.id
          },
          refetchQueries: [
            {
              query: findManyUsers
            }       
            
          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;  
      }
    },
    apollo: {
      findManyUsers: {
        query: findManyUsers,
        prefetch: ({ route }) => ({ id: route.params.id }),
        variables() {
          return { id: this.$route.params.id }
        }
      },
    }
  }
  </script>
  
  <style>
    input,
    select,
    option {
      padding: 5px;
    }
  
  </style>
  