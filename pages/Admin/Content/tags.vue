<template>
    <div class="contentRight">
            <v-toolbar style="background-color: seagreen;color: white;">
                <v-col cols="10">
                    <v-toolbar-title>Tags</v-toolbar-title>
                </v-col>
                <v-col cols="2">
                    <addTag />
                </v-col>
            </v-toolbar>
            <v-text-field v-model="search" prepend-icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
<v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Tag ID
                    </th>
                    <th class="text-left">
                        Tag Name
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="tags in findManyTags" :key="tags.id">
                <tr>
                    <td>{{ tags.id }}</td>
                    <td>{{ tags.name }}</td>
                    <td>{{ tags.created_at }}</td>
                    <td><a :href="`/admin/database/${tags.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createTag from '../../../components/content/add-category.vue'
    import findManyTags from '../../../graphql/query/findManyTags.gql'

    export default {
        components: {
            createTag,
        },
       data() {
            return {
                search: '',
                findManyTags: [],
            }
        },
        apollo: {
            findManyTags: {
                prefetch: true,
                query: findManyTags
            }
        }, 
    }
</script>

<script setup>
    useHead({
        title: 'Tags'
    })
</script>