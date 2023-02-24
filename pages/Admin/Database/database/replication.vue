<template>
    <div>
        <v-row>
            <v-col cols="9">
                <h5>Replication</h5>
            </v-col>

            <v-col cols="12">
                <v-text-field v-model="search" prepend-icon="fas fa-search" label="Search" single-line hide-details>
                </v-text-field>
                <v-table fixed-header height="100vh" class="contentRight">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                System ID
                            </th>
                            <th class="text-left">
                                Insert
                            </th>
                            <th class="text-left">
                                Update
                            </th>
                            <th class="text-left">
                                Delete
                            </th>
                            <th class="text-left">
                                Truncate
                            </th>
                            <th>
                                Source
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in schema" :key="item.name">
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
                            <td>
                                <v-switch v-model="insertAction" inset></v-switch>
                            </td>
                            <td>
                                <v-switch v-model="updateAction" inset></v-switch>
                            </td>
                            <td>
                                <v-switch v-model="deleteAction" inset></v-switch>
                            </td>
                            <td>
                                <v-switch v-model="truncateAction" inset></v-switch>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    // import createTrigger from './actions/create-trigger.vue'

    export default {
        components: {
            //createTrigger
        },
        data() {
            return {
                search: '',
                insertAction: false,
                updateAction: false,
                deleteAction: false,
                truncateAction: false,
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Replication'
    })
</script>