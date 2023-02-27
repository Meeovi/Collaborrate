<template>
    <v-card class="contentSection">
        <v-card-title>
            <v-toolbar style="background-color: transparent;color: black;">
                <v-col cols="9">
                    <v-toolbar-title>Dashboard Name</v-toolbar-title>
                </v-col>
                <v-col cols="2">
                    <editDashboard />
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
        <v-data-table v-model="selected" show-select class="elevation-1" 
 item-value="name" :headers="headers" :items="desserts" :search="search"></v-data-table>
    </v-card>
</template>

<script>
import editDashboard from '../../../components/dashboards/add-dashboard.vue'

    export default {
        components: { editDashboard },
        data() {
            return {
                search: '',
               selected: [],
                headers: [{
                        align: 'start',
                        key: 'name',
                        sortable: true,
                        title: 'Dessert (100g serving)',
                    },
                    {
                        key: 'calories',
                        title: 'Calories'
                    },
                    {
                        key: 'fat',
                        title: 'Fat (g)'
                    },
                    {
                        key: 'carbs',
                        title: 'Carbs (g)'
                    },
                    {
                        key: 'protein',
                        title: 'Protein (g)'
                    },
                    {
                        key: 'iron',
                        title: 'Iron (%)'
                    },
                ],
                desserts: [{
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: 1,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: 1,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: 7,
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: 8,
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: 16,
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: 0,
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: 2,
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: 45,
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: 22,
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: 6,
                    },
                ],
            }
        },
    }
</script>

<script setup>
    useHead({
        title: ''
    })
</script>