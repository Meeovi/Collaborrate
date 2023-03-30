<template>
    <div class="contentRight">
        <v-toolbar color="warning">
            <v-col cols="9">
                <v-toolbar-title>Agreements</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createAgreement />
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
                        Agreement ID
                    </th>
                    <th class="text-left">
                        Agreement Name
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
            <tbody v-for="agreements in findManyAgreements" :key="agreements.id">
                <tr>
                    <td>{{ agreements.id }}</td>
                    <td>{{ agreements.name }}</td>
                    <td>{{ agreements.type }}</td>
                    <td>{{ agreements.created_at }}</td>
                    <td><a :href="`/admin/database/${agreements.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createAgreement from '../../../components/content/inventory/addInventory/add-agreement.vue'
    import findManyAgreements from '../../../graphql/query/findManyAgreements.gql'

    export default {
        components: {
            createAgreement,
        },
        data() {
            return {
                search: '',
                findManyAgreements: [],
            }
        },
        apollo: {
            findManyAgreements: {
                prefetch: true,
                query: findManyAgreements
            }
        }, 
    }
</script>

<script setup>
    useHead({
        title: 'Agreements',
    });

const { data: agreements } = await useAsyncData(() => $fetch("/api/agreements"));
</script>