<template>
    <div>
        <v-row>
            <v-col cols="9">
                <h5>Imports</h5>
            </v-col>

            <v-col cols="3">
                <createImport />
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
                                Import Date
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
    import createImport from './actions/import-data.vue'

    export default {
        components: {
            createImport
        }
    }
</script>

<script setup>
    useHead({
        title: 'Import Data'
    })
</script>