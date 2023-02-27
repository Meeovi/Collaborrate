<template>
    <div>
        <v-toolbar color="transparent">
            <v-col cols="9">
                <v-toolbar-title>Roles</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createRole />
            </v-col>
        </v-toolbar>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="search" prepend-icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
            </v-col>

            <v-col cols="6">

            </v-col>
        </v-row>
<v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Role Name
                    </th>
                    <th class="text-left">
                        Role Type
                    </th>
                    <th class="text-left">
                        Role
                    </th>
                    <th class="text-left">
                        Create
                    </th>
                    <th class="text-left">
                        Update
                    </th>
                    <th class="text-left">
                        Delete
                    </th>
                    <th class="text-left">
                        Publish
                    </th>
                    <th class="text-left">
                        Unpublish
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="roles in findManyRoles" :key="roles.id">
                  <tr>
                    <td>{{ roles.role_name }}</td>
                    <td>{{ roles.type }}</td>
                    <td>{{ roles.role }}</td>
                    <td>{{ roles.createRole }}</td>
                    <td>{{ roles.updateRole }}</td>
                    <td>{{ roles.deleteRole }}</td>
                    <td>{{ roles.publishRole }}</td>
                    <td>{{ roles.unpublishRole }}</td>
                    <td>{{ roles.created_at }}</td>
                    <td><a :href="`/admin/settings/general-settings/${roles.id}`">
                            <!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createRole from './addSetting/add-role.vue'
    import findManyRoles from '../../graphql/query/findManyRoles.gql'

    export default {
        components: {
            createRole,
            //editUser
        },
        data() {
            return {
                findManyRoles: [],
            }
        },
        apollo: {
            findManyRoles: {
                prefetch: true,
                query: findManyRoles
            }
        },
    }
</script>