<template>
    <div class="contentRight">
        <v-toolbar color="warning">
            <v-col cols="9">
                <v-toolbar-title>Payments</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createPayment />
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
                        Payment ID
                    </th>
                    <th class="text-left">
                        Payment Name
                    </th>
                    <th class="text-left">
                        Active
                    </th>
                    <th class="text-left">
                        Country
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="payments in findManyPayments" :key="payments.id">
                <tr>
                    <td>{{ payments.icon }}</td>
                    <td>{{ payments.id }}</td>
                    <td>{{ payments.name }}</td>
                    <td>{{ payments.active }}</td>
                    <td>{{ payments.country }}</td>
                    <td>{{ payments.created_at }}</td>
                    <td><a :href="`/admin/database/${payments.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createPayment from '../../components/content/inventory/addInventory/add-payment.vue'
    import findManyPayments from '../../../graphql/query/findManyPayments.gql'

    export default {
        components: {
            createPayment,
        },
        data() {
            return {
                search: '',
                findManyPayments: [],
            }
        },
        apollo: {
            findManyPayments: {
                prefetch: true,
                query: findManyPayments
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Payments',
    });

const { data: payments } = await useAsyncData(() => $fetch("/api/payments"));
</script>