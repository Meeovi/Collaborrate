<template>
  <div>
    <form v-for="role in findManyRoles" :key="role.id" @submit.prevent="updateRole(role)">

<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">
      <button type="reset" class="btn btn-warning" @click="deleteRole(role)">Delete</button></a>
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
        aria-controls="v-tabs-home" aria-selected="true">Edit Role</a>
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
                <td><input :value="role.role_name" type="text" required /></td>
              </tr>
              <tr>
                <td style="text-align: right;">Description</td>
                <td><client-only><Editor :value="role.content" /></client-only></td>
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

const UPDATE_ROLE = gql`
mutation ($role_name:String!,$content:String!){
updateOneRoles(data: {role_name: $role_name, content: $content} where: {id: $id}) {
  content
  role_name
}
}`;

  const DELETE_ROLE = gql`
  mutation deleteOneRoles($id: Int!){
  deleteOneRoles(where: {id: $id}){
    content
    role_name
  }
}
`;

  export default {
    head: {
      name: 'Edit Role'
    },
    mounted() {
      this.forceRerender();
    },
    // eslint-disable-next-line vue/order-in-components
    data() {
      return {
        componentKey: 0
      }
    },
    methods: {
      async deleteRole(role) {
        await this.$apollo.mutate({
          mutation: DELETE_ROLE,
          variables: {
            id: role.id
          },
          refetchQueries: [{
              query: findManyRoles
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../../system/role-manager'
          })
        }).catch(err => console.log(err));
      },
      async updateRole(role) {
        await this.$apollo.mutate({
          mutation: UPDATE_ROLE,
          variables: {
            id: role.id
          },
          refetchQueries: [{
              query: findManyRoles
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      findManyRoles: {
        query: findManyRoles,
        prefetch: ({
          route
        }) => ({
          id: route.params.id
        }),
        variables() {
          return {
            id: this.$route.params.id
          }
        }
      }
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
