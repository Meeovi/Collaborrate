<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="6">
                    <v-toolbar-title class="toolbarTitle">Campaigns</v-toolbar-title>
                </v-col>
                <v-col cols="3">
                    <addemailtemplate />
                </v-col>

                <v-col cols="1">
                    <v-btn class="rightAddBtn" href="/app/crm/emailtemplates">
                        <v-icon start icon="fas fa-eye"></v-icon>View Email Templates
                    </v-btn>
                </v-col>
            </v-row>
        </v-toolbar>
        <v-table fixed-header class="customerTable">
            <thead>
                <tr>
                    <th class="text-left">
                        Campaign
                    </th>
                    <th class="text-left">
                        Status
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                    <th class="text-left">
                        End Date
                    </th>
                    <th class="text-left">
                        Date Created
                    </th>
                    <th class="text-left">
                        User
                    </th>
                    <th>
                        <addcampaign />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import addcampaign from './Add/add-campaign.vue'
    import addemailtemplate from './Add/add-emailtemplate.vue'

    export default {
        components: {
            addcampaign,
            addemailtemplate
        }
    }
</script>

<script setup>
    useHead({
        title: 'Campaigns'
    })
</script>