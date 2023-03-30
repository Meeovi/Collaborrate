<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Edit Dashboard
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
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
                                    Page ID
                                </th>
                                <th class="text-left">
                                    Page Name
                                </th>
                                <th class="text-left">
                                    URL
                                </th>
                                <th class="text-left">
                                    Meta Title
                                </th>
                                <th class="text-left">
                                    Created
                                </th>
                                <th class="text-left">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody v-for="pages in findManyDashboards" :key="pages.id">
                            <tr>
                                <td>{{ pages.id }}</td>
                                <td>{{ pages.title }}</td>
                                <td>{{ pages.url_key }}</td>
                                <td>{{ pages.meta_title }}</td>
                                <td>{{ pages.created_at }}</td>
                                <td><a :href="`/admin/database/${pages.id}`">
                                        <!--<editUser />--></a></td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
        }),
    }
</script>

<script setup>

</script>