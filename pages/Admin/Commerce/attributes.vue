<template>
    <div class="contentRight">
        <v-toolbar color="warning">
            <v-col cols="9">
                <v-toolbar-title>Product Attributes</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createAttribute />
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
                        Attribute ID
                    </th>
                    <th class="text-left">
                        Default Label
                    </th>
                    <th class="text-left">
                        Attribute Code
                    </th>
                    <th class="text-left">
                        Attribute Class
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="attributes in findManyAttributes" :key="attributes.id">
                <tr>
                    <td>{{ attributes.id }}</td>
                    <td>{{ attributes.default_label }}</td>
                    <td>{{ attributes.attribute_code }}</td>
                    <td>{{ attributes.attribute_class }}</td>
                    <td>{{ attributes.created_at }}</td>
                    <td><a :href="`/admin/database/${attributes.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createAttribute from '../../../components/content/inventory/addInventory/add-attribute.vue'
    import findManyAttributes from '../../../graphql/query/findManyAttributes.gql'

    export default {
        components: {
            createAttribute,
        },
        data() {
            return {
                search: '',
                findManyAttributes: [],
            }
        },
        apollo: {
            findManyAttributes: {
                prefetch: true,
                query: findManyAttributes
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Product Attributes',
    });

const { data: attributes } = await useAsyncData(() => $fetch("/api/attributes"));
</script>