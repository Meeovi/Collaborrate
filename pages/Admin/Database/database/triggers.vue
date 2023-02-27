<template>
    <div>
        <v-row>
            <v-col cols="9">
                <h5>Triggers</h5>
            </v-col>

            <v-col cols="3">
                <createTrigger />
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
                                Schema
                            </th>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Table
                            </th>
                            <th class="text-left">
                                Function
                            </th>
                            <th class="text-left">
                                Events
                            </th>
                            <th>
                                Edit Trigger
                            </th>
                            <th>
                                <createContent />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in schema" :key="item.name">
                            <td>{{ item.title }}</td>
                            <td>{{ item.title }}</td>
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
    import createTrigger from './actions/create-trigger.vue'

    export default {
        components: {
            createTrigger
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
        title: 'Triggers'
    })
</script>