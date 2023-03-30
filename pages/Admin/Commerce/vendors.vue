<template>
    <div class="contentRight">
        <v-toolbar color="warning">
            <v-col cols="9">
                <v-toolbar-title>Vendors</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createVendor />
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
                        Vendor ID
                    </th>
                    <th class="text-left">
                        Vendor Name
                    </th>
                    <th class="text-left">
                        Website
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="vendors in findManyVendors" :key="vendors.id">
                <tr>
                    <td>{{ vendors.id }}</td>
                    <td>{{ vendors.name }}</td>
                    <td>{{ vendors.website }}</td>
                    <td>{{ vendors.type }}</td>
                    <td>{{ vendors.created_at }}</td>
                    <td><a :href="`/admin/database/${vendors.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createVendor from '../../../components/content/inventory/addInventory/add-vendor.vue'
    import findManyVendors from '../../../graphql/query/findManyVendors.gql'

    export default {
        components: {
            createVendor,
        },
        data() {
            return {
                search: '',
                findManyVendors: [],
            }
        },
        apollo: {
            findManyVendors: {
                prefetch: true,
                query: findManyVendors
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Vendors',
    });

const { data: vendors } = await useAsyncData(() => $fetch("/api/vendors"));
</script>