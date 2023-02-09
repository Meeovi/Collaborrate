<template>
    <div>
        <v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Plugin ID
                    </th>
                    <th class="text-left">
                        Plugin Name
                    </th>
                    <th class="text-left">
                        Plugin URL
                    </th>
                    <th class="text-left">
                        Plugin Author
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="pages in findManyPages" :key="pages.id">
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
    //import createPage from './createPage'
    import findManyPages from '../../../graphql/query/findManyPages.gql'

    export default {
        components: {
            //createPage,
            //editUser
        },
        data() {
            return {
                findManyPages: [],
            }
        },
        apollo: {
            findManyPages: {
                prefetch: true,
                query: findManyPages
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Pages',
    })
</script>