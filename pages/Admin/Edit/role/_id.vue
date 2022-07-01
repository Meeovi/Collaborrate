/* eslint-disable camelcase */
<template>
  <div>
    <form v-for="role in allRolesList" :key="role.id" method="POST" @submit.prevent>
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="roleAddOptions">
                <li>
                  <input type="submit" @click="addRole" value="Save" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Role Name</td>
              <td>
                <input type="text" v-model="role_name" required />{{ role.name }}</td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <div class="form-check form-switch">
                  <vue-simplemde id="roleDescription" v-model="content" />{{ role.content }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
  // eslint-disable-next-line camelcase
  import  gql from 'graphql-tag'
  import  roles from '~/apollo/mutations/system/roles'
  import  allRoles from '~/apollo/queries/system/roles'

  const DELETE_PERMISSION = gql `
  mutation delete_roles($id: Int!){
  delete_roles(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

  const UPDATE_PERMISSION = gql `
  mutation update_roles($id: Int!){
  update_roles(where: {id: {_eq: $id}}){
    affected_rows
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
          mutation: DELETE_PERMISSION,
          variables: {
            id: role.id
          },
          refetchQueries: [{
              query: allRoles
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../admin/system/role-manager'
          })
        }).catch(err => console.log(err));
      },
      async updateRole(role) {
        await this.$apollo.mutate({
          mutation: UPDATE_PERMISSION,
          variables: {
            id: role.id
          },
          refetchQueries: [{
              query: allRoles
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      roles: {
        query: roles,
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
