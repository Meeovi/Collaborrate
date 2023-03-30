<template>
    <div class="contentRight">
        <v-toolbar style="background-color: yellowgreen; color: black;">
            <v-col cols="12">
                <v-toolbar-title>Transactions</v-toolbar-title>
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
                        Order ID
                    </th>
                    <th class="text-left">
                        Parent Transaction
                    </th>
                    <th class="text-left">
                        Payment Method
                    </th>
                    <th class="text-left">
                        Closed
                    </th>
                    <th class="text-left">
                        Orders
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="transactions in findManyTransactions" :key="transactions.id">
                <tr>
                    <td>{{ transactions.order_id }}</td>
                    <td>{{ transactions.parent_transaction }}</td>
                    <td>{{ transactions.payment_method }}</td>
                    <td>{{ transactions.closed }}</td>
                    <td>{{ transactions.orders }}</td>
                    <td><a :href="`/admin/database/${transactions.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import findManyTransactions from '../../../graphql/query/findManyTransactions.gql'

    export default {
        components: {
        },
        data() {
            return {
                search: '',
                findManyTransactions: [],
            }
        },
        apollo: {
            findManyTransactions: {
                prefetch: true,
                query: findManyTransactions
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Transactions',
    });

const { data: transactions } = await useAsyncData(() => $fetch("/api/transactions"));
</script>