<template>
    <div>
        <v-toolbar style="background-color: red; color: white;">
            <v-col cols="9">
                <v-toolbar-title>Notifications</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                
            </v-col>
        </v-toolbar>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="search" prepend-icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
            </v-col>

            <v-col cols="6">

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
        title: 'Notifications'
    })

    const {
        data: schema
    } = await useAsyncData('home', () => queryContent('/').find())
</script>