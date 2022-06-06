<template>
  <section id="form3-f" class="form3 cid-t58In2B9NA mbr-fullscreen">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-12" style="height:100%;">
          <div class="image-wrapper" style="height:100%;">
            <img class="w-100" src="/assets/images/mbr-1802x1230.jpg" alt="AlternateCMS" style="height:100%;">
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
          <b-container>
            <div class="col-lg-12 col-md-12 col-sm-12">
              <h1 class="mbr-section-title mb-4 display-2">
                <strong>New Password</strong></h1>
            </div>
            <Notification v-if="error" :message="error" />
            <b-row>
              <b-col md="4" offset-md="4" class="mt-5">
                <FormulateForm method="post" @submit.prevent="userRegister">
                <div v-if="err" class=" p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                    {{ err }}
                    </div>
                  <div class="form-group">
                    <label for="password">New Password</label>
                    <FormulateInput id="password" v-model="password" type="password"
                      class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="password">Confirm New Password</label>
                    <FormulateInput id="password" v-model="passwordConfirmation" type="password"
                      class="form-control" />
                  </div>
                  <input type="hidden" name="_csrf" :value="csrfToken">
                  <FormulateInput type="submit" style="width:100%">New Password</FormulateInput>
                </FormulateForm>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="offset-lg-1"></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    layout: 'nologin',
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
