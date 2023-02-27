<template>
    <div>
        <v-toolbar class="databasebar" style="background-color: orange; color: white;">
            <v-row>
                <v-col cols="6">
                    <h5>Logs</h5>
                </v-col>
                <v-col cols="6"></v-col>
            </v-row>
        </v-toolbar>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="search" prepend-icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
            </v-col>

            <v-col cols="6">

            </v-col>
        </v-row>
        <v-table fixed-header height="300px">
            <thead>
                <tr>
                    <th class="text-left">
                        Key
                    </th>
                    <th class="text-left">
                        Labels
                    </th>
                    <th class="text-left">
                        Value
                    </th>
                    <th class="text-left">
                        Description
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="metrics in metrics" :key="metrics">
                    <td>{{ metrics[0].key }}</td>
                    <td>{{ metrics[0].labels }}</td>
                    <td>{{ metrics[0].value }}</td>
                    <td>{{ metrics[0].description }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                search: '',
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Logs - Database'
    })

    const {
        data: metrics
    } = await useFetch('/api/metrics')
</script>