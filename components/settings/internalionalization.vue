<template>
    <div>
        <v-toolbar color="transparent">
            <v-col cols="9">
                <v-toolbar-title>Internalionalization</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createInternationalization />
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
                        Local Display Name
                    </th>
                    <th class="text-left">
                        Locales
                    </th>
                    <th class="text-left">
                        Default Locale
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="apitoken in apitokens" :key="apitoken.id">
                  <tr>
                    <td>{{ apitoken.name }}</td>
                    <td>{{ apitoken.description }}</td>
                    <td>{{ apitoken.token_type }}</td>
                    <td>{{ apitoken.created_at }}</td>
                    <td><a :href="`/admin/settings/apitokens/${tokens.id}`">
                            <!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createInternationalization from './addSetting/add-internalionalization.vue'
    import apitokens from '../../graphql/query/apitokens.gql'

    export default {
        components: {
            createInternationalization,
            //editUser
        },
        data() {
            return {
                apitokens: [],
            }
        },
        apollo: {
            apitokens: {
                prefetch: true,
                query: apitokens
            }
        },
    }
</script>
