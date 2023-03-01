<template>
    <div class="contentRight">
        <v-toolbar style="background-color: yellowgreen; color: black;">
            <v-col cols="9">
                <v-toolbar-title>Quotes</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createQuote />
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
                        Quote ID
                    </th>
                    <th class="text-left">
                        Quote Name
                    </th>
                    <th class="text-left">
                        Category
                    </th>
                    <th class="text-left">
                        Grand Total
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="quotes in findManyQuotes" :key="quotes.id">
                <tr>
                    <td>{{ quotes.id }}</td>
                    <td>{{ quotes.name }}</td>
                    <td>{{ quotes.categories }}</td>
                    <td>{{ quotes.grand_total }}</td>
                    <td>{{ quotes.created_at }}</td>
                    <td><a :href="`/admin/database/${quotes.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createQuote from '../../../components/content/inventory/addInventory/add-quote.vue'
    import findManyQuotes from '../../../graphql/query/findManyQuotes.gql'

    export default {
        components: {
            createQuote,
        },
        data() {
            return {
                search: '',
                findManyQuotes: [],
            }
        },
        apollo: {
            findManyQuotes: {
                prefetch: true,
                query: findManyQuotes
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Quotes',
    });

const { data: quotes } = await useAsyncData(() => $fetch("/api/quotes"));
</script>