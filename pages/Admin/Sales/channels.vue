<template>
    <div class="contentRight">
        <v-toolbar style="background-color: yellowgreen; color: black;">
            <v-col cols="9">
                <v-toolbar-title>Channels</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createChannel />
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
                        Channel ID
                    </th>
                    <th class="text-left">
                        Channel Name
                    </th>
                    <th class="text-left">
                        Currency
                    </th>
                    <th class="text-left">
                        Code
                    </th>
                    <th class="text-left">
                        Default Language
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="channels in findManyChannels" :key="channels.id">
                <tr>
                    <td>{{ channels.id }}</td>
                    <td>{{ channels.name }}</td>
                    <td>{{ channels.currency }}</td>
                    <td>{{ channels.code }}</td>
                    <td>{{ channels.default_lang }}</td>
                    <td>{{ channels.created_at }}</td>
                    <td><a :href="`/admin/database/${channels.id}`"></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createChannel from '../../components/content/inventory/addInventory/add-channel.vue'
    import findManyChannels from '../../../graphql/query/findManyChannels.gql'

    export default {
        components: {
            createChannel,
        },
        data() {
            return {
                search: '',
                findManyChannels: [],
            }
        },
        apollo: {
            findManyChannels: {
                prefetch: true,
                query: findManyChannels
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Channels',
    });

const { data: channels } = await useAsyncData(() => $fetch("/api/channels"));
</script>