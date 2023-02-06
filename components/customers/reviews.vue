<template>
    <div>
        <v-toolbar>
            <v-col cols="10">
                <v-toolbar-title>Reviews</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createReview />
            </v-col>
        </v-toolbar>
        <v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Page ID
                    </th>
                    <th class="text-left">
                        Page Name
                    </th>
                    <th class="text-left">
                        URL
                    </th>
                    <th class="text-left">
                        Meta Title
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="pages in pages" :key="pages.id">
                <tr>
                    <td>{{ pages.id }}</td>
                    <td>{{ pages.title }}</td>
                    <td>{{ pages.url_key }}</td>
                    <td>{{ pages.meta_title }}</td>
                    <td>{{ pages.created_at }}</td>
                    <td><a :href="`/admin/database/${pages.id}`">
                            <!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createReview from './addCustomer/add-review.vue'
    //import findManyReviews from '../../../graphql/query/findManyReviews.gql'

    export default {
        components: {
            createReview,
            //editUser
        },
    /*    data() {
            return {
                findManyReviews: [],
            }
        },
        apollo: {
            findManyReviews: {
                prefetch: true,
                query: findManyReviews
            }
        }, */
    }
</script>

<script setup>
    useHead({
        title: 'Reviews',
    });

const { data: pages } = await useAsyncData(() => $fetch("/api/pages"));
</script>