<template>
    <div>
        <v-toolbar>
            <v-col cols="9">
                <v-toolbar-title>Access Tokens</v-toolbar-title>
            </v-col>
            <v-col cols="3">
                <createAccessToken />
            </v-col>
        </v-toolbar>
        <v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Token
                    </th>
                    <th class="text-left">
                        Name
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
                    <td>{{ pages.title }}</td>
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
    import createAccessToken from './addAccount/add-accesstoken.vue'
    import findManyPages from '../../graphql/query/findManyPages.gql'

    export default {
        components: {
            createAccessToken,
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
        title: 'Access Tokens',
    });
</script>