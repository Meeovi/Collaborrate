<template>
    <div class="contentRight">
        <v-toolbar color="warning">
            <v-col cols="9">
                <v-toolbar-title>Discounts</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createDiscount />
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
                        Discount ID
                    </th>
                    <th class="text-left">
                        Discount Name
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                    <th class="text-left">
                        Discount %
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="discounts in findManyDiscounts" :key="discounts.id">
                <tr>
                    <td>{{ discounts.id }}</td>
                    <td>{{ discounts.name }}</td>
                    <td>{{ discounts.type }}</td>
                    <td>{{ discounts.discount }}</td>
                    <td>{{ discounts.created_at }}</td>
                    <td><a :href="`/admin/database/${discounts.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createDiscount from '../../../components/content/inventory/addInventory/add-discount.vue'
    import findManyDiscounts from '../../../graphql/query/findManyDiscounts.gql'

    export default {
        components: {
            createDiscount,
        },
        data() {
            return {
                search: '',
                findManyDiscounts: [],
            }
        },
        apollo: {
            findManyDiscounts: {
                prefetch: true,
                query: findManyDiscounts
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Discounts',
    });

const { data: discounts } = await useAsyncData(() => $fetch("/api/discounts"));
</script>