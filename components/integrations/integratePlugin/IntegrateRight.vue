<template>
    <div>
        <v-toolbar color="info">
            <v-col cols="9">
                <v-toolbar-title>Content Name</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createContent />
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
                        Feature Pack ID
                    </th>
                    <th class="text-left">
                        Feature Pack Name
                    </th>
                    <th class="text-left">
                        Feature Pack URL
                    </th>
                    <th class="text-left">
                        Feature Pack Author
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
    import createContent from '../../database/content/InsertAddContent.vue'
    import findManyPages from '../../../graphql/query/findManyPages.gql'

    export default {
        components: {
            createContent,
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
