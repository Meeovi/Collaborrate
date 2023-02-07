<template>
    <div>
        <v-toolbar color="primary">
            <v-col cols="10">
                <v-toolbar-title>Projects</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createProject />
            </v-col>
        </v-toolbar>
        <v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Category Thumbnail
                    </th>
                    <th class="text-left">
                        Category ID
                    </th>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Meta Title
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        View
                    </th>
                </tr>
            </thead>
            <tbody v-for="categories in findManyCategories" :key="categories.id">
                <tr>
                    <td>{{ categories.image }}</td>
                    <td>{{ categories.id }}</td>
                    <td>{{ categories.name }}</td>
                    <td>{{ categories.meta_title }}</td>
                    <td>{{ categories.created_at }}</td>
                    <td><a :href="`/admin/content/categories/${categories.id}`">
                            <!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createProject from '../../../components/content/projects/addProject/add-project.vue'
    import findManyCategories from '../../../graphql/query/findManyCategories.gql'

    export default {
        components: {
            createProject,
            //editUser
        },
        data() {
            return {
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
        title: 'Projects',
    });
</script>