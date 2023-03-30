<template>
    <div class="contentRight">
        <v-toolbar color="warning">
            <v-col cols="9">
                <v-toolbar-title>Products</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createProduct />
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
                        
                    </th>
                    <th class="text-left">
                        Product ID
                    </th>
                    <th class="text-left">
                        Product Name
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                    <th class="text-left">
                        Price
                    </th>
                    <th class="text-left">
                        Last Updated
                    </th>
                    <th class="text-left">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody v-for="products in products" :key="products.id">
                <tr>
                    <td>{{ products.thumbnail }}</td>
                    <td>{{ products.id }}</td>
                    <td>{{ products.name }}</td>
                    <td>{{ products.type }}</td>
                    <td>{{ products.price }}</td>
                    <td>{{ products.updated_at }}</td>
                    <td><a :href="`/admin/database/${products.id}`">
                            <!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createProduct from '../../../components/content/inventory/addInventory/add-product.vue'
    import findManyProducts from '../../../graphql/query/findManyProducts.gql'

    export default {
        components: {
            createProduct,
            //editUser
        },
        data() {
            return {
                search: '',
                findManyProducts: [],
            }
        },
        apollo: {
            findManyProducts: {
                prefetch: true,
                query: findManyProducts
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Products',
    });

const { data: products } = await useAsyncData(() => $fetch("/api/products"));
</script>