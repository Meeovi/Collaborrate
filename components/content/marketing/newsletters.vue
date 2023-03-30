<template>
    <div>
        <v-toolbar>
            <v-col cols="9">
                <v-toolbar-title>Newsletters</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createNewsletter />
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
    import createNewsletter from './addComm/add-newsletter.vue'
    //import findManyNewsletters from '../../../graphql/query/findManyNewsletters.gql'

    export default {
        components: {
            createNewsletter,
            //editUser
        },
    /*    data() {
            return {
                findManyNewsletters: [],
            }
        },
        apollo: {
            findManyNewsletters: {
                prefetch: true,
                query: findManyNewsletters
            }
        }, */
    }
</script>

<script setup>
    useHead({
        title: 'Newsletters',
    });

const { data: pages } = await useAsyncData(() => $fetch("/api/pages"));
</script>