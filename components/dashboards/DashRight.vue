<template>
    <div>
        <v-toolbar>
            <v-col cols="9">
                <h3>Dashboard Name</h3>
            </v-col>
            <v-col cols="2">
                <EditDashboard />
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
            <tbody v-for="pages in findManyDashboards" :key="pages.id">
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
    import EditDashboard from './EditDashboard'
    import findManyDashboards from '../../graphql/query/findManyDashboards.gql'

    export default {
        components: {
            EditDashboard,
            //editUser
        },
        data() {
            return {
                findManyDashboards: [],
            }
        },
        apollo: {
            findManyDashboards: {
                prefetch: true,
                query: findManyDashboards
            }
        },
    }
</script>

<script setup>

</script>