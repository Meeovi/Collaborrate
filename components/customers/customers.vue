<template>
    <div>
        <v-toolbar>
            <v-col cols="9">
                <v-toolbar-title>Customers</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createCustomer />
            </v-col>
        </v-toolbar>
        <v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Customer ID
                    </th>
                    <th class="text-left">
                        Customer Name
                    </th>
                    <th class="text-left">
                        Email
                    </th>
                    <th class="text-left">
                        Segment
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="customers in findManyCustomers" :key="customers.id">
                <tr>
                    <td>{{ customers.id }}</td>
                    <td>{{ customers.first_name }} {{ customers.last_name }}</td>
                    <td>{{ customers.email }}</td>
                    <td>{{ customers.customer_group }}</td>
                    <td>{{ customers.created_at }}</td>
                    <td><a :href="`/admin/customers/${customers.id}`">
                            <!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createCustomer from './addCustomer/add-customer.vue'
    import findManyCustomers from '../../graphql/query/findManyCustomers.gql'

    export default {
        components: {
            createCustomer,
            //editUser
        },
       data() {
            return {
                findManyCustomers: [],
            }
        },
        apollo: {
            findManyCustomers: {
                prefetch: true,
                query: findManyCustomers
            }
        }, 
    }
</script>

<script setup>
    useHead({
        title: 'Customers',
    });

const { data: customers } = await useAsyncData(() => $fetch("/api/customers"));
</script>