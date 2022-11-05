<template>
  <div>
    <form @submit.prevent="addPermission" >
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
              aria-controls="v-tabs-home" aria-selected="true">Create A New Permission</a>
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
                        <input v-model="update" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <client-only><Editor v-model="content" /></client-only>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Create</td>
                      <td>
                        <input v-model="create" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Read</td>
                      <td>
                        <input v-model="read" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Update</td>
                      <td>
                        <input v-model="update" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Delete</td>
                      <td>
                        <input v-model="Delete" type="text" />
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <label for="role">Role</label><br>
                        <select id="role" v-model="role" name="template" class="form-category">
                          <option v-for="role in findManyRoles" :key="role" :value="role">
                            {{ role.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <label for="users">Users</label><br>
                        <select id="users" v-model="users" name="template" class="form-category">
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

  const ADD_PERMISSIONS = gql`
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

  export default {
    data() {
      return {
        users: [],
        Delete: " ",
        update: " ",
        content: " ",
        read: " ",
        name: " ",
        created_at: " ",
        create: " ",
        role: " ",
      }
    },
    methods: {
      async addPermission() {
        const Delete = this.Delete;
        const content = this.content;
        const update = this.update;
        const users = this.users;
        const create = this.create;
        const name = this.name;
        const role = this.role;
        const created_at = this.created_at;
        const read = this.read;
        await this.$apollo.mutate({
          mutation: ADD_PERMISSIONS,
          variables: {
            content,
            users,
            name,
            create,
            read,
            update,
            Delete,
            role,
            created_at,
          },
          update: (cache, {
            data: {
              insertPermissions
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedPermission = insertPermissions.returning;
              console.log(insertedPermission)
              cache.writeQuery({
                query: findManyPermissions
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../system/permissions'
          })
        }).catch(err => console.log(err));
        this.Delete = ' ';
        this.content = ' ';
        this.update = ' ';
        this.users = ' ';
        this.create = ' ';
        this.name = ' ';
        this.role = ' ';
        this.created_at = ' ';
        this.read = ' ';
      },
    },
    head: {
      title: 'Add New Permission'
    },
    apollo: {
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
