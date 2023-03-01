<template>
    <div class="contentRight">
        <v-toolbar style="background-color: lightseagreen;color: white;">
                <v-col cols="9">
                    <v-toolbar-title>Categories</v-toolbar-title>
                </v-col>
                <v-col cols="2">
                    <addCategory />
                </v-col>
            </v-toolbar>
            <v-row>
            <v-col cols="6">
                <v-text-field v-model="search" prepend-icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
            </v-col>

            <v-col cols="6">

            </v-col>
        </v-row>
<v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Category ID
                    </th>
                    <th class="text-left">
                        Category Name
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="categories in findManyCategories" :key="categories.id">
                <tr>
                    <td>{{ categories.id }}</td>
                    <td>{{ categories.name }}</td>
                    <td>{{ categories.created_at }}</td>
                    <td><a :href="`/admin/database/${categories.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createCategory from '../../../components/content/add-category.vue'
    import findManyCategories from '../../../graphql/query/findManyCategories.gql'

    export default {
        components: {
            createCategory,
        },
       data() {
            return {
                search: '',
                findManyCategories: [],
            }
        },
        apollo: {
            findManyCategories: {
                prefetch: true,
                query: findManyCategories
            }
        }, 
    }
</script>

<script setup>
    useHead({
        title: 'Categories'
    })
</script>