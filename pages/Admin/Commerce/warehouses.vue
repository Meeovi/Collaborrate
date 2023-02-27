<template>
    <div class="contentRight">
        <v-toolbar color="warning">
            <v-col cols="9">
                <v-toolbar-title>Warehouses</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createWarehouse />
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
                        Warehouse ID
                    </th>
                    <th class="text-left">
                        Warehouse Name
                    </th>
                    <th class="text-left">
                        Shipping Zones
                    </th>
                    <th class="text-left">
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody v-for="pages in pages" :key="pages.id">
                <tr>
                    <td>{{ pages.id }}</td>
                    <td>{{ pages.title }}</td>
                    <td>{{ pages.url_key }}</td>
                    <td><a :href="`/admin/database/${pages.id}`">
                            <!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createWarehouse from '../../../components/content/inventory/addInventory/add-warehouse.vue'
    //import findManyWarehouses from '../../../graphql/query/findManyWarehouses.gql'

    export default {
        components: {
            createWarehouse,
            //editUser
        },
        data() {
            return {
                search: '',
                //findManyWarehouses: [],
            }
        },
     /*   apollo: {
            findManyWarehouses: {
                prefetch: true,
                query: findManyWarehouses
            }
        }, */
    }
</script>

<script setup>
    useHead({
        title: 'Warehouses',
    });

const { data: pages } = await useAsyncData(() => $fetch("/api/pages"));
</script>