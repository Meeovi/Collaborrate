<template>
  <div>
    <div class="alert" v-if="err" role="alert" data-mdb-color="primary">
      {{ err }}
    </div>
    <div class="alert" v-if="success" role="alert" data-mdb-color="primary">
      Your account has been created successfully you can now <a href="/auth/login">Login</a>
    </div>
    <form @submit.prevent="addUser()">
      <!-- Name input -->
      <div class="mb-4">
        <input type="text" v-model="first_name" id="registerName" class="form-control" placeholder="First Name" />
      </div>

      <div class="mb-4">
        <input type="text" v-model="last_name" id="registerName" class="form-control" placeholder="Last Name" />
      </div>

      <!-- Username input -->
      <div class="mb-4">
        <input type="text" v-model="username" id="registerUsername" class="form-control" placeholder="Username" />
      </div>

      <!-- Email input -->
      <div class="mb-4">
        <input type="email" v-model="email" id="registerEmail" class="form-control" placeholder="Email" />
      </div>

      <!-- Password input -->
      <div class="mb-4">
        <input type="password" v-model="password" id="registerPassword" class="form-control" placeholder="Password" />
      </div>
      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-3">
        Register
      </button>
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import findManyUsers from "~/graphql/query/findManyUsers";

  const ADD_USER = gql`
    mutation ($first_name:String!,$last_name:String!,$username:String!,$email:String!, $password: String!){
    createOneUsers(data: {first_name: $first_name, last_name: $last_name, email: $email, username: $username, password: $password}) {
      email
      first_name
      last_name
      password
      username
  }
}`; 

  export default {
  /*  auth: 'guest',
      data() {
        return {
          success: false,
          err: null,
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          password: '',
        }
      },
      methods: {
        async userRegister() {
          try {
            this.$axios.setToken(false)
            await this.$axios.post('auth/local/register', {
              username: this.username,
              email: this.email,
              password: this.password,
            })
            this.success = true
          } catch (e) {
            if (e.response) this.err = e.response.data.error.message
          }
        },
      },
    auth: false, */
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
          update: (cache, {
            data: {
              insertStaffMember
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedStaffMember = insertStaffMember.returning;
              console.log(insertedStaffMember)
              cache.writeQuery({
                query: findManyUsers
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../auth/login'
          })
        }).catch(err => console.log(err));
        this.first_name = ' ';
        this.last_name = ' ';
        this.email = ' ';
        this.username = ' ';
        this.password = ' ';
      },
    },
    // eslint-disable-next-line vue/order-in-components
    layout: 'nologin',
    head: {
      title: 'Welcome to AlternateCMS'
    }
  }

</script>
