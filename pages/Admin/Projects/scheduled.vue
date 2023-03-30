<template>
    <div class="contentRight">
        <v-toolbar color="info">
            <v-col cols="9">
                <v-toolbar-title>Scheduled</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createPost />
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
                        Post ID
                    </th>
                    <th class="text-left">
                        Post Name
                    </th>
                    <th class="text-left">
                        Category
                    </th>
                    <th class="text-left">
                        Status
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="posts in findManyPosts" :key="posts.id">
                <tr>
                    <td>{{ posts.id }}</td>
                    <td>{{ posts.name }}</td>
                    <td>{{ posts.type }}</td>
                    <td>{{ posts.created_at }}</td>
                    <td><a :href="`/admin/database/${posts.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createPost from './InsertAddPost.vue'
    import findManyPosts from '../../../graphql/query/findManyPosts.gql'

    export default {
        components: {
            createPost,
        },
        data() {
            return {
                search: '',
                findManyPosts: [],
            }
        },
        apollo: {
            findManyPosts: {
                prefetch: true,
                query: findManyPosts
            }
        }, 
    }
</script>

<script setup>
    useHead({
        title: 'Scheduled - Blog',
    });

const { data: posts } = await useAsyncData(() => $fetch("/api/posts"));
</script>