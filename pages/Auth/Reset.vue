<template>
    <div>
      <div class="alert" v-if="err" role="alert" data-mdb-color="primary">
        {{ err }}
      </div>
      <div class="alert" v-if="success" role="alert" data-mdb-color="primary">
        Your account has been created successfully you can now <a href="/auth/login">Login</a>
      </div>
      <form @submit.prevent="userRegister">
        <div class="text-center mb-3">
          <p>Sign up with:</p>
          <button type="button" class="btn btn-link btn-lg btn-floating mx-1" data-ripple-color="primary">
            <i class="fab fa-facebook-f"></i>
          </button>
  
          <button type="button" class="btn btn-link btn-lg btn-floating mx-1" data-ripple-color="primary">
            <i class="fab fa-google"></i>
          </button>
  
          <button type="button" class="btn btn-link btn-lg btn-floating mx-1" data-ripple-color="primary">
            <i class="fab fa-twitter"></i>
          </button>
  
          <button type="button" class="btn btn-link btn-lg btn-floating mx-1" data-ripple-color="primary">
            <i class="fab fa-github"></i>
          </button>
        </div>
  
        <p class="text-center">or:</p>

        <!-- Email input -->
        <div class="mb-4">
          <input type="password" v-model="password" id="passwordReset" class="form-control" placeholder="Password" />
        </div>
  
        <!-- Password input -->
        <div class="mb-4">
          <input type="password" v-model="passwordConfirmation" id="passwordConfirmation" class="form-control" placeholder="Password Confirmation" />
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-3">
          New Password
        </button>
      </form>
    </div>
  </template>

<script>

  export default {
    middleware: 'guest',
    layout: 'nologin',
    head: {
      title: 'Reset Your Password'
    },
    auth: 'guest',
      data() {
        return {
          success: false,
          err: null,
          password: '',
          passwordConfirmation: '',
        }
      },
      methods: {
        async userPassword() {
          try {
            await this.$axios.post('auth/reset-password', {
              code: this.$route.query.code,
              password: this.password,
              passwordConfirmation: this.passwordConfirmation,
            })
            this.success = true
          } catch (e) {
            if (e.response) this.err = e.response.data.error.message
          }
        },
      },
    }
</script>
