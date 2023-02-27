<template>
    <v-card class="contentRight">
        <v-card-title>
            <v-toolbar style="background-color: rosybrown;color: white;">
                <v-col cols="9">
                    <v-toolbar-title>Dashboards</v-toolbar-title>
                </v-col>
                <v-col cols="3">
                 <addDashboard />
                </v-col>
            </v-toolbar>
            <v-spacer></v-spacer>
            <v-row>
            <v-col cols="6">
                <v-text-field v-model="search" prepend-icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
            </v-col>

            <v-col cols="6">

            </v-col>
        </v-row>
        </v-card-title>
        <v-table fixed-header height="100vh" class="contentRight">
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Description
                </th>
                <th>
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in read" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.name }}</td>
                <td><a :href="`/Admin/Dashboard/${item.id}`"></a></td>
            </tr>
        </tbody>
    </v-table>
    </v-card>
</template>

<script>
import addDashboard from '../../../components/dashboards/add-dashboard.vue'

    export default {
        components: { addDashboard },
        data() {
            return {
                search: '',
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Dashboards'
    })

    const { data: read } = await useFetch('/api/read')
</script>