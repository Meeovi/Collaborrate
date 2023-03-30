<template>
    <div class="contentRight">
        <v-toolbar color="warning">
            <v-col cols="9">
                <v-toolbar-title>Product Types</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createProductType />
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
                        Product Type ID
                    </th>
                    <th class="text-left">
                        Product Type Name
                    </th>
                    <th class="text-left">
                        Is Shippable
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="types in findManyProduct_types" :key="types.id">
                <tr>
                    <td>{{ types.id }}</td>
                    <td>{{ types.type_name }}</td>
                    <td>{{ types.isShippable }}</td>
                    <td>{{ types.created_at }}</td>
                    <td><a :href="`/admin/database/${types.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createProductType from '../../../components/content/inventory/addInventory/add-product-type.vue'
    import findManyProduct_types from '../../../graphql/query/findManyProduct_types.gql'

    export default {
        components: {
            createProductType,
        },
        data() {
            return {
                search: '',
                findManyProduct_types: [],
            }
        },
        apollo: {
            findManyProduct_types: {
                prefetch: true,
                query: findManyProduct_types
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Product Types',
    });

const { data: types } = await useAsyncData(() => $fetch("/api/types"));
</script>