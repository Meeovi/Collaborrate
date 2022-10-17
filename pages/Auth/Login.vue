<template>
  <div>
<<<<<<< HEAD
    <div class="alert" v-if="err" role="alert" data-mdb-color="primary">
      {{ err }}
=======
    <div class="alert" v-if="errors.length" role="alert" data-mdb-color="primary">
      <p v-for="(error, i) in errors" :key="i + 1"></p>
      {{ error }}
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
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
<<<<<<< HEAD
                  <form action="/" method="post" @submit.prevent="userLogin">
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input type="email" id="loginName" class="form-control" v-model="email" required />
=======
                  <form method="post" @submit.prevent="handleLoginSubmit">
                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input type="email" id="loginName" class="form-control" v-model="form.email" required />
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
                      <label class="form-label" for="loginName">Email</label>
                    </div>

                    <!-- Password input -->
                    <div class="form-outline mb-4">
<<<<<<< HEAD
                      <input type="password" id="loginPassword" class="form-control" v-model="password" required />
=======
                      <input type="password" id="loginPassword" class="form-control" v-model="form.password" required />
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
                      <label class="form-label" for="loginPassword">Password</label>
                    </div>

                    <!-- Forgot Password input -->
                    <div class="form-outline mb-4">
                      <p>Forgot your Password? <a href="/auth/forgot">Reset Password</a></p>
                    </div>
                    <!-- Submit button -->
<<<<<<< HEAD
                    <button type="submit" class="btn btn-primary btn-block mb-4">
                      Sign in
=======
                    <button type="submit" class="btn btn-primary btn-block mb-4" :disabled="formBusy">
                      <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>Sign In
                      </div>
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
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

<<<<<<< HEAD
=======
  import gql from "graphql-tag";

>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
  export default {
    components: {
      Register
    },
<<<<<<< HEAD
    auth: 'guest',
      data() {
        return {
          err: null,
          email: '',
          password: '',
        }
      },
      methods: {
        async userLogin() {
          try {
            await this.$auth.loginWith('local', {
              data: { identifier: this.email, password: this.password },
            })
          } catch (e) {
            if (e.response) this.err = e.response.data.error.message
          }
        },
      },
=======
    data() {
    return {
      form: {
        email: '',
        password: '',
      },
      formBusy: false,
      errors: [],
    }
  },
  methods: {
    async handleLoginSubmit() {
      const credentials = this.form
      this.formBusy = true
      this.errors = []
      try {
        await this.$auth.loginWith('graphql', credentials)
        this.formBusy = false
      } catch ({ graphQLErrors: errors }) {
        this.formBusy = false
        // Handle hour custom error
        if (errors && errors.length) {
          errors.forEach((error) => {
            if (error.extensions.key === 'InvalidCredentials') {
              this.errors = [...this.errors, error.message]
            }
          })
        } else {
          // Handle other errors
        }
      }
    },
  },
>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
    layout: 'nologin',
    head: {
      title: 'Welcome Back!'
    }
  }
<<<<<<< HEAD
=======

>>>>>>> b83d1c369a927637e8b7afa7b4a8ab7c58d3d194
</script>
