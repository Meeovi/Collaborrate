/* eslint-disable camelcase */
<template>
  <div>
    <form v-for="permission in findManyPermissions" :key="permission.id" @submit.prevent="addPermission" >
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Permission" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Permission</a>
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
                      <td style="text-align: right;">Name</td>
                      <td>
                        <input :value="permission.update" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <client-only><Editor :value="permission.content" /></client-only>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Create</td>
                      <td>
                        <input :value="permission.create" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Read</td>
                      <td>
                        <input :value="permission.read" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Update</td>
                      <td>
                        <input :value="permission.update" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Delete</td>
                      <td>
                        <input :value="permission.Delete" type="text" />
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <label for="role">Role</label><br>
                        <select id="role" :value="permission.role" name="template" class="form-category">
                          <option v-for="role in findManyRoles" :key="role" :value="role">
                            {{ role.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <label for="users">Users</label><br>
                        <select id="users" :value="permission.users" name="template" class="form-category">
                          <option v-for="users in findManyUsers" :key="users" :value="users">
                            {{ users.name }}</option>
                        </select>
                      </td>
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
  import gql from "graphql-tag";
  /* eslint-disable camelcase */
  import findManyPermissions from "~/graphql/query/findManyPermissions";
  import findManyRoles from "~/graphql/query/findManyRoles";
  import findManyUsers from "~/graphql/query/findManyUsers";

  const DELETE_PERMISSION = gql`
    mutation ($Delete:String!,$update:String,$users:String,$content:String,$read:String!,$role:String!,$created_at:String!,$create:String!,$name:String){
    createOnePermissions(data: {Delete: $Delete, update: $update, users: $users, content: $content, read: $read, role: $role, created_at: $created_at, create: $create}) {
            content
            users
            name
            create
            read
            update
            Delete
            role
            created_at
    }
}`;

  const UPDATE_PERMISSION = gql`
  mutation updateOnepermissions($id: Int!){
  updateOnePermissions(where: {id: $id}){
    affected_rows
  }
}
`;

  export default {
    head: {
      name: 'Edit Permission'
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
      async deletePermission(permission) {
        await this.$apollo.mutate({
          mutation: DELETE_PERMISSION,
          variables: {
            id: permission.id
          },
          refetchQueries: [{
              query: findManyPermissions
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../../admin/system/role-manager'
          })
        }).catch(err => console.log(err));
      },
      async updatePermission(permission) {
        await this.$apollo.mutate({
          mutation: UPDATE_PERMISSION,
          variables: {
            id: permission.id
          },
          refetchQueries: [{
              query: findManyPermissions
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      findManyPermissions: {
        query: findManyPermissions,
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
      },
      findManyRoles: {
        prefetch: true,
        query: findManyRoles
      },
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
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
