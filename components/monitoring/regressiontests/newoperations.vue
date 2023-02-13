<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-card title="" text="" variant="tonal"></v-card>
            </v-col>

            <v-col cols="12">
                <v-table fixed-header height="100vh" class="contentRight">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Last seen
                            </th>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Query
                            </th>
                            <th class="text-left">
                                Variables
                            </th>
                            <th class="text-left">
                                Role
                            </th>
                            <th class="text-left">
                                Session variables
                            </th>
                            <th>
                                Action
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
    export default {

    }
</script>

<script setup>
    const { data: schema } = await useAsyncData('home', () => queryContent('/').find())
</script>