<template>
    <div>
        <v-row>
            <v-col cols="9">
                <h5>Reviews</h5>
            </v-col>
            <v-col cols="3">
                <h5><addReview /></h5>
            </v-col>
        </v-row>
       <v-table fixed-header height="100vh" class="contentRight">
            <thead>
                <tr>
                    <th class="text-left">
                        Message
                    </th>
                    <th class="text-left">
                        Timestamp
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in schema" :key="item.name">
                    <td>{{ item.title }}</td>
                    <td>{{ item.title }}</td>
                    <td><a href="``">View</a>{{ item.calories }}</td>
                </tr>
            </tbody>
        </v-table> 
    </div>
</template>

<script>
import addReview from './addCustomer/add-review.vue'

    export default {
        components: { addReview },
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
        title: 'Reviews'
    })
</script>