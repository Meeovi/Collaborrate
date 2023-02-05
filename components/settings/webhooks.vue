<template>
    <div>
        <v-row>
            <v-col cols="10">

            </v-col>
            <v-col cols="2">
                <createWebhook />
            </v-col>
        </v-row>
        <v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Webhook Name
                    </th>
                    <th class="text-left">
                        URL
                    </th>
                    <th class="text-left">
                        Create
                    </th>
                    <th class="text-left">
                        Update
                    </th>
                    <th class="text-left">
                        Delete
                    </th>
                    <th class="text-left">
                        Publish
                    </th>
                    <th class="text-left">
                        Unpublish
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="webhooks in findManyWebhooks" :key="webhooks.id">
                  <tr>
                    <td>{{ webhooks.name }}</td>
                    <td>{{ webhooks.url }}</td>
                    <td>{{ webhooks.create }}</td>
                    <td>{{ webhooks.delete }}</td>
                    <td>{{ webhooks.publish }}</td>
                    <td>{{ webhooks.unpublish }}</td>
                    <td>{{ webhooks.created_at }}</td>
                    <td><a :href="`/admin/settings/general-settings/${webhooks.id}`">
                            <!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createWebhook from './addSetting/add-webhook.vue'
    import findManyWebhooks from '../../graphql/query/findManyWebhooks.gql'

    export default {
        components: {
            createWebhook,
            //editUser
        },
        data() {
            return {
                findManyWebhooks: [],
            }
        },
        apollo: {
            findManyWebhooks: {
                prefetch: true,
                query: findManyWebhooks
            }
        },
    }
</script>
