<template>
    <div class="contentRight">
        <v-toolbar style="background-color: yellowgreen; color: black;">
            <v-col cols="9">
                <v-toolbar-title>Product Collections</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createCollection />
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
                        Collection ID
                    </th>
                    <th class="text-left">
                        Collection Name
                    </th>
                    <th class="text-left">
                        No. of Products
                    </th>
                    <th class="text-left">
                        Availability
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="collections in findManyCollections" :key="collections.id">
                <tr>
                    <td>{{ collections.id }}</td>
                    <td>{{ collections.name }}</td>
                    <td>{{ collections.product }}</td>
                    <td>{{ collections.meta_title }}</td>
                    <td>{{ collections.created_at }}</td>
                    <td><a :href="`/admin/database/${collections.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createCollection from '../../components/content/inventory/addInventory/add-collection.vue'
    //import findManyCollections from '../../../graphql/query/findManyCollections.gql'

    export default {
        components: {
            createCollection,
        },
        data() {
            return {
                search: '',
                findManyCollections: [],
            }
        },
        apollo: {
            findManyCollections: {
                prefetch: true,
                query: findManyCollections
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Product Collections',
    });

const { data: collections } = await useAsyncData(() => $fetch("/api/collections"));
</script>