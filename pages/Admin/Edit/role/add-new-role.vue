<template>
  <div>

    <form @submit.prevent="addRole()">

      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">

            <input type="submit" class="btn btn-warning" value="Save Role" /></a>

        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Role</a>
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
                      <td style="text-align: right;">Role Name</td>
                      <td><input v-model="role_name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td><client-only><Editor v-model="content" /></client-only></td>
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
  import gql from "graphql-tag";
  import findManyRoles from "~/graphql/query/findManyRoles";

  const ADD_ROLES = gql `
    mutation ($role_name:String!,$content:String!){
    createOneRoles(data: {role_name: $role_name, content: $content}) {
        content
        role_name
  }
}`;

  export default {
    data() {
      return {
        content: [],
        role_name: " ",
      }
    },
    methods: {
      async addRole() {
        const role_name = this.role_name;
        const content = this.content;
        await this.$apollo.mutate({
          mutation: ADD_ROLES,
          variables: {
            role_name,
            content,
          },
          update: (cache, {
            data: {
              insertRole
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedRole = insertRole.returning;
              console.log(insertedRole)
              cache.writeQuery({
                query: findManyRoles
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../system/general-settings'
          })
        }).catch(err => console.log(err));
        this.role_name = ' ';
        this.content = ' ';
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
      title: 'Add New Role'
    }
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

  li {
    display: inline-block;
  }

</style>
