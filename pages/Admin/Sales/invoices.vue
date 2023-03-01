<template>
    <div class="contentRight">
        <v-toolbar style="background-color: yellowgreen; color: black;">
            <v-col cols="9">
                <v-toolbar-title>Invoices</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createInvoice />
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
                        Invoice ID
                    </th>
                    <th class="text-left">
                        Bill to Name
                    </th>
                    <th class="text-left">
                        Ship to Name
                    </th>
                    <th class="text-left">
                        Email
                    </th>
                    <th class="text-left">
                        Grand Total Purchased
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="invoices in findManyInvoices" :key="invoices.id">
                <tr>
                    <td>{{ invoices.id }}</td>
                    <td>{{ invoices.bill_to_name }}</td>
                    <td>{{ invoices.ship_to_name }}</td>
                    <td>{{ invoices.email }}</td>
                    <td>{{ invoices.grand_total_purchased }}</td>
                    <td>{{ invoices.created_at }}</td>
                    <td><a :href="`/admin/database/${invoices.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createInvoice from '../../../components/content/inventory/addInventory/add-invoice.vue'
    import findManyInvoices from '../../../graphql/query/findManyInvoices.gql'

    export default {
        components: {
            createInvoice,
        },
        data() {
            return {
                search: '',
                findManyInvoices: [],
            }
        },
        apollo: {
            findManyInvoices: {
                prefetch: true,
                query: findManyInvoices
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Invoices',
    });

const { data: invoices } = await useAsyncData(() => $fetch("/api/invoices"));
</script>