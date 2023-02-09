<template>
    <div>
        <v-toolbar>
            <v-col cols="2"></v-col>
        </v-toolbar>
        <v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Date
                    </th>
                    <th class="text-left">
                        Amount Due
                    </th>
                    <th class="text-left">
                        Invoice Number
                    </th>
                </tr>
            </thead>
            <tbody v-for="pages in pages" :key="pages.id">
                <tr>
                    <td>{{ pages.id }}</td>
                    <td>{{ pages.title }}</td>
                    <td><v-btn>Leave Team</v-btn></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    //import inviteUser from '../addAccount/invite-user.vue'
    //import findManyPages from '../../../graphql/query/findManyPages.gql'

    export default {
        components: { },
    /*    data() {
            return {
                findManyPages: [],
            }
        },
        apollo: {
            findManyPages: {
                prefetch: true,
                query: findManyPages
            }
        }, */
    }
</script>

<script setup>
    useHead({
        title: 'Invoices',
    });

</script>