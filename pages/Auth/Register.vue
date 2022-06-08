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
          <form method="POST" class="mbr-form form-with-styler mx-auto" enctype="multipart/form-data" @submit.prevent
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
                <input type="text" name="firstname" placeholder="First Name" data-form-field="name" class="form-control" value=""
                  id="name-form6-t" v-model="first_name">
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 form-group" data-for="name">
                <input type="text" name="lastname" placeholder="Last Name" data-form-field="name" class="form-control" value=""
                  id="name-form6-t" v-model="last_name">
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
  /* eslint-disable camelcase */
  import  gql from "graphql-tag";
  import 
    user
  from "~/apollo/queries/system/users";
  // import  tax from '~/apollo/queries/shop/tax'

  const ADD_USER = gql `
    mutation ($first_name:String!,$last_name:String!,$password:String!,$staff_email:String!){
    insert_user(objects: {first_name: $first_name, last_name: $last_name, staff_email: $staff_email, password: $password}) {
        affected_rows
        returning {
            first_name
            last_name
            staff_email
            password
    }
  }
}`;

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
      async addStaff() {
        const first_name = this.first_name;
        const last_name = this.last_name;
        const staff_email = this.staff_email;
        const password = this.password;
        await this.$apollo.mutate({
          mutation: ADD_USER,
          variables: {
            first_name,
            last_name,
            staff_email,
            password,
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
                query: user
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '/auth/login'
          })
        }).catch(err => console.log(err));
        this.first_name = ' ';
        this.last_name = ' ';
        this.staff_email = ' ';
        this.password = ' ';
      },
    },
    layout: 'nologin',
    head: {
      title: 'Register for AlternateCMS'
    }
  }

</script>
