<template>
    <div>
        <v-toolbar style="background-color: seagreen; color: white;">
            <v-col cols="10">
                <v-toolbar-title>Tickets</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createTicket />
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
                        Edit
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
    import createTicket from '../../../components/content/tickets/addTicket/add-ticket.vue'
    import findManyCategories from '../../../graphql/query/findManyCategories.gql'

    export default {
        components: {
            createTicket,
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
        title: 'Tickets',
    });
</script>