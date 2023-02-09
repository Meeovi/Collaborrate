<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-person-walking-luggage"></v-icon>Create New Role
                </v-btn>
            </template>
            <v-card>
                <form enctype="multipart/form-data" @submit.prevent="addRole()">
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="role_name" label="Name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="content" label="Description"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <div class="text-subtitle-1 text-medium-emphasis">Type of Role</div>
                            </v-col>
                            <v-col cols="12">
                                <v-autocomplete v-model="type" :items="['Super Admin', 'Editor', 'Author', 'User', 'Developer']" label="Role*" required></v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <div class="text-subtitle-1 text-medium-emphasis">Events</div>
                            </v-col>
                            <v-col cols="2">
                                <v-checkbox label=""></v-checkbox>
                            </v-col>
                            <v-col cols="2">
                                <h5>CREATE</h5>
                                <v-checkbox v-model="createRole" label=""></v-checkbox>
                            </v-col>
                            <v-col cols="2">
                                <h5>UPDATE</h5>
                                <v-checkbox v-model="updateRole" label=""></v-checkbox>
                            </v-col>
                            <v-col cols="2">
                                <h5>DELETE</h5>
                                <v-checkbox v-model="deleteRole" label=""></v-checkbox>
                            </v-col>
                            <v-col cols="2">
                                <h5>PUBLISH</h5>
                                <v-checkbox v-model="publishRole" label=""></v-checkbox>
                            </v-col>
                            <v-col cols="2">
                                <h5>UNPUBLISH</h5>
                                <v-checkbox v-model="unpublishRole" label=""></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Save
                    </v-btn>
                </v-card-actions>
            </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import gql from "graphql-tag";
  import findManyRoles from "../../../graphql/query/findManyRoles.gql";

  const ADD_ROLES = gql `
    mutation ($role_name:String!,$content:String!, $type: String!, $createRole: String!, $updateRole: String!, $deleteRole: String!, $publishRole: String!, $unpublishRole: String!, $role: String!){
    createOneRoles(data: {role_name: $role_name, content: $content, type: $type, createRole: $createRole, updateRole: $updateRole, deleteRole: $deleteRole, publishRole: $publishRole, unpublishRole: $unpublishRole, role: $role}) {
        content
        role_name
        type
        createRole
        updateRole
        deleteRole
        publishRole
        unpublishRole
        role
  }
}`;

  export default {
    data() {
      return {
        dialog: false,
        content: [],
        role_name: " ",
        type: " ",
        createRole: " ",
        updateRole: " ",
        deleteRole: " ",
        publishRole: " ",
        unpublishRole: " ",
        role: " ",
      }
    },
    methods: {
      async addRole() {
        const role_name = this.role_name;
        const content = this.content;
        const type = this.type;
        const createRole = this.createRole;
        const updateRole = this.updateRole;
        const deleteRole = this.deleteRole;
        const publishRole = this.publishRole;
        const unpublishRole = this.unpublishRole;
        const role = this.role;
        await this.$apollo.mutate({
          mutation: ADD_ROLES,
          variables: {
            content,
            role_name,
            type,
            createRole,
            updateRole,
            deleteRole,
            publishRole,
            unpublishRole,
            role
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
        this.type = ' ';
        this.createRole = ' ';
        this.updateRole = ' ';
        this.deleteRole = ' ';
        this.publishRole = ' ';
        this.unpublishRole = ' ';
        this.role = ' ';
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