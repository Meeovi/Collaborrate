<template>
    <div class="contentRight">
        <v-toolbar style="background-color: lightseagreen;color: white;">
            <v-col cols="10">
                <v-toolbar-title>Content Manager</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createContent />
            </v-col>
        </v-toolbar>
        <v-text-field v-model="search" prepend-icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
        <v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in schema" :key="item.name">
                    <td>{{ item[0].title }}</td>
                    <td><a href="``">View</a>{{ item.calories }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createContent from '../../../components/database/content/LeftCreateTable.vue'

    export default {
        components: {
            createContent
        }
    }
</script>

<script setup>
    useHead({
        title: 'Content Manager'
    })

    const {
        data: schema
    } = await useAsyncData('home', () => queryContent('/').find())
</script>