<template>
    <div>
        <v-row>
            <v-col cols="9">
                <h5>Backups</h5>
            </v-col>

            <v-col cols="3">
                <createBackup />
            </v-col>

            <v-col cols="6">
                <v-text-field v-model="search" prepend-icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
            </v-col>

            <v-col cols="6">

            </v-col>
        <v-col cols="12">
                <v-table fixed-header height="100vh" class="contentRight">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Description
                            </th>
                            <th class="text-left">
                                Backup Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in schema" :key="item.name">
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
                            <td><a href="``">View</a>{{ item.calories }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import createBackup from './actions/create-backup.vue'

    export default {
        components: {
            createBackup
        },
        data() {
            return {
                search: '',
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Backup Data'
    })
</script>