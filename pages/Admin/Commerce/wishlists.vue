<template>
    <div class="contentRight">
        <v-toolbar color="warning">
            <v-col cols="9">
                <v-toolbar-title>Wishlists</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createWishlist />
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
                        Wishlist ID
                    </th>
                    <th class="text-left">
                        Wishlist Name
                    </th>
                    <th class="text-left">
                        Visibility
                    </th>
                    <th class="text-left">
                        Quantity
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="wishlists in findManyWishlists" :key="wishlists.id">
                <tr>
                    <td>{{ wishlists.id }}</td>
                    <td>{{ wishlists.name }}</td>
                    <td>{{ wishlists.visibility }}</td>
                    <td>{{ wishlists.quantity }}</td>
                    <td>{{ wishlists.created_at }}</td>
                    <td><a :href="`/admin/database/${wishlists.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createWishlist from '../../../components/content/inventory/addInventory/add-wishlist.vue'
    import findManyWishlists from '../../../graphql/query/findManyWishlists.gql'

    export default {
        components: {
            createWishlist,
        },
        data() {
            return {
                search: '',
                findManyWishlists: [],
            }
        },
        apollo: {
            findManyWishlists: {
                prefetch: true,
                query: findManyWishlists
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Wishlists',
    });

const { data: wishlists } = await useAsyncData(() => $fetch("/api/wishlists"));
</script>