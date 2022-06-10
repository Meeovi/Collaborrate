<template>
  <section class="form6 cid-t852tobk80" id="form6-t">

    <div class="mbr-overlay"></div>
    <div class="container-fluid">
      <div class="mbr-section-head">
        <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
          <strong>Register</strong></h3>

      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
          <form method="POST" class="mbr-form form-with-styler mx-auto" enctype="multipart/form-data" @submit="addStaff"
            data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true"
              value="W5lBG14rRjTLHtdtr8q1Ax5lVPhEsE8JlIMrBMLaQuhtmNlbKhMJ1zBU/dksb4PJKhuf5nS96Ze5Oli3366snzK3pXpUivYX7dydc451tOyrunCW2WX6kF53RnCi495B">
            <div class="">
              <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling
                out the form!</div>
              <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">Oops...! some
                problem!</div>
            </div>
            <div class="dragArea row">
              <div class="col-lg-12 col-md-12 col-sm-12 form-group" data-for="name">
                <input type="text" name="firstname" placeholder="First Name" data-form-field="name" class="form-control"
                  value="" id="name-form6-t" v-model="first_name">
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 form-group" data-for="name">
                <input type="text" name="lastname" placeholder="Last Name" data-form-field="name" class="form-control"
                  value="" id="name-form6-t" v-model="last_name">
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 form-group" data-for="email">
                <input type="email" name="email" placeholder="Email" data-form-field="email" class="form-control"
                  value="" id="email-form6-t" v-model="staff_email">
              </div>
              <div data-for="password" class="col-lg-12 col-md-12 col-sm-12 form-group">
                <input type="password" name="password" placeholder="Password" data-form-field="password"
                  class="form-control" value="" id="password-form6-t" v-model="password">
              </div>
              <div class="col-auto mbr-section-btn align-center"><button type="submit" class="btn btn-primary display-4"
                  @click="addUser">Register&nbsp;</button></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        staff_email: [],
        first_name: " ",
        last_name: " ",
        password: " ",
      }
    },
    methods: {
      addStaff: async function (e) {
        e.preventDefault()
        try {
          const body = {
            first_name: this.first_name,
            last_name: this.last_name,
            staff_email: this.staff_email,
            password: this.password,
          }

          const res = await fetch(`http://localhost:8000/api/user`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
          })
          const data = await res.json()
          this.$router.push({
            path: '/auth/login'
          })
        } catch (error) {
          console.error(error)
        }
      },
    },
    layout: 'nologin',
    head: {
      title: 'Register for AlternateCMS'
    }
  }

</script>
