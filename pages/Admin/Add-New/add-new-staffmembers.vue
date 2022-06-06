<template>
    <div>
        <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save User" @click="addUser" /></a>
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
                        <td><FormulateInput v-model="first_name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Last Name</td>
                        <td><FormulateInput v-model="last_name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Email Address</td>
                        <td><FormulateInput v-model="staff_email" type="text" name="tax" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        </div>
        </div>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
/* eslint-disable camelcase */
import gql from "graphql-tag";
import { user } from "~/apollo/queries/system/users";
// import tax from '~/apollo/queries/shop/tax'

const ADD_USER = gql`
    mutation ($first_name:String!,$last_name:String!,$value:String!,$staff_email:String){
    insert_user(objects: {first_name: $first_name, last_name: $last_name, staff_email: $staff_email, value: $value}) {
        affected_rows
        returning {
            first_name
            last_name
            staff_email
            value
    }
  }
}`;

export default {
    data() {
    return {
        staff_email: [],
        first_name: " ",
        last_name: " ",
        value: " ",
      }
  },
  methods: {
      async addStaff() {
            const first_name = this.first_name;
            const last_name = this.last_name;
            const staff_email = this.staff_email;
            const value = this.value;
            await this.$apollo.mutate({
                mutation: ADD_USER,
                variables: {
                    first_name,
                    last_name,
                    staff_email,
                    value,
                },
        update: (cache, { data: { insertStaffMember }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedStaffMember = insertStaffMember.returning;
                            console.log(insertedStaffMember)
                            cache.writeQuery({
                                query: user
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../system/users'})
                }).catch(err => console.log(err));
                this.first_name = ' ';
                this.last_name = ' ';
                this.staff_email = ' ';
                this.value = ' ';
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