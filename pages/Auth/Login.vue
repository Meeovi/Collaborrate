<template>
  <div>
    <div class="alert" role="alert" data-mdb-color="primary">

    </div>
    <div class="container">

      <div class="row d-flex justify-content-center">
        <div class="col-xl-5 col-md-8">
          <div class="card shadow-0">
            <div class="card-body p-4">
              <!-- Pills navs -->
              <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                  <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                    aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li class="nav-item" role="presentation">
                  <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                    aria-controls="pills-register" aria-selected="false">Register</a>
                </li>
              </ul>
              <!-- Pills navs -->

              <!-- Pills content -->
              <div class="tab-content">
                <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                  <form method="post" @submit.prevent="login">
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input type="email" id="loginName" class="form-control" v-model="email" required />
                      <label class="form-label" for="loginName">Email</label>
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <input type="password" id="loginPassword" class="form-control" v-model="password" required />
                      <label class="form-label" for="loginPassword">Password</label>
                    </div>

                    <!-- Forgot Password input -->
                    <div class="form-outline mb-4">
                      <p>Forgot your Password? <a href="/auth/forgot">Reset Password</a></p>
                    </div>
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary btn-block mb-4">
                      Sign In
                    </button>

                    <!-- Register buttons -->
                    <div class="text-center">
                      <p>Not a member? <a href="#!">Register</a></p>
                    </div>
                  </form>
                </div>
                <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                  <Register />
                </div>
              </div>
              <!-- Pills content -->
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Register from '~/pages/Auth/Register'
  import { LOGIN_MUTATION } from '../../graphql/code/login'
  import gql from "graphql-tag";

  export default {
    components: {
      Register
    },
    data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$apollo
        .mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        .then(response => {
          // save user token to localstorage
          localStorage.setItem('blog-app-token', response.data.login)

          // redirect user
          this.$router.replace('/')
        })
    }
  },
    layout: 'nologin',
    head: {
      title: 'Welcome Back!'
    }
  }
</script>
