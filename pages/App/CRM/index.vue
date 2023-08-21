<template>
    <v-card class="crmPage">
        <v-toolbar color="red" title="CRM" class="topToolbar" density="compact"></v-toolbar>
        <v-card>
            <div class="d-flex flex-row crmChannelList">
                <v-tabs v-model="tab" direction="vertical" color="red">
                    <v-tab :value="1">
                        <v-icon start>
                            mdi-account
                        </v-icon>
                        Reporting
                    </v-tab>
                    <v-tab :value="2">
                        <v-icon start>
                            mdi-account
                        </v-icon>
                        Knowledgebase
                    </v-tab>
                    <v-tab :value="3">
                        <v-icon start>
                            mdi-account
                        </v-icon>
                        Documents
                    </v-tab>
                    <v-divider></v-divider>
                    <v-tab :value="4">
                        <v-icon start>
                            mdi-account
                        </v-icon>
                        Accounts
                    </v-tab>
                    <v-tab :value="5">
                        <v-icon start>
                            mdi-lock
                        </v-icon>
                        Contacts
                    </v-tab>
                    <v-tab :value="6">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Opportunities
                    </v-tab>
                    <v-tab :value="7">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Leads
                    </v-tab>
                    <v-tab :value="8">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Quotes
                    </v-tab>
                    <v-tab :value="9">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Calendar
                    </v-tab>
                    <v-tab :value="10">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Targets
                    </v-tab>
                    <v-tab :value="11">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Campaigns
                    </v-tab>
                    <v-tab :value="12">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Invoices
                    </v-tab>
                    <v-tab :value="13">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Contracts
                    </v-tab>
                    <v-tab :value="14">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Surveys
                    </v-tab>
                </v-tabs>
                <v-window v-model="tab">
                    <v-window-item :value="1">
                        <v-card flat>
                            <reporting />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="2">
                        <v-card flat>
                            <knowledgebase />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="3">
                        <v-card flat>
                            <documents />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="4">
                        <v-card flat>
                            <accounts />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="5">
                        <v-card flat>
                            <contacts />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="6">
                        <v-card flat>
                            <opportunities />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="7">
                        <v-card flat>
                            <leads />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="8">
                        <v-card flat>
                            <quotes />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="9">
                        <v-card flat>
                            <calendar />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="10">
                        <v-card flat>
                            <targets />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="11">
                        <v-card flat>
                            <campaigns />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="12">
                        <v-card flat>
                            <invoices />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="13">
                        <v-card flat>
                            <contracts />
                        </v-card>
                    </v-window-item>
                    <v-window-item :value="14">
                        <v-card flat>
                            <surveys />
                        </v-card>
                    </v-window-item>
                </v-window>
            </div>
        </v-card>
    </v-card>
</template>

<script>
    import crmmenu from '../../../components/Menus/crmmenu.vue'
    import projects from '../../../components/Content/customers/projects.vue'
    import tickets from '../../../components/Content/customers/tickets.vue'
    import lists from '../../../components/Content/customers/lists.vue'
    import reporting from '../../../components/Content/customers/reporting.vue'
    import knowledgebase from '../../../components/Content/customers/knowledgebase.vue'
    import documents from '../../../components/Content/customers/documents.vue'
    import accounts from '../../../components/Content/customers/accounts.vue'
    import contacts from '../../../components/Content/customers/contacts.vue'
    import opportunities from '../../../components/Content/customers/opportunities.vue'
    import leads from '../../../components/Content/customers/leads.vue'
    import quotes from '../../../components/Content/customers/quotes.vue'
    import calendar from '../../../components/Content/customers/calendar.vue'
    import targets from '../../../components/Content/customers/targets.vue'
    import campaigns from '../../../components/Content/customers/campaigns.vue'
    import invoices from '../../../components/Content/customers/invoices.vue'
    import contracts from '../../../components/Content/customers/contracts.vue'
    import surveys from '../../../components/Content/customers/surveys.vue'

    export default {
        components: {
            crmmenu,
            projects,
            tickets,
            lists,
            reporting,
            knowledgebase,
            documents,
            accounts,
            contacts,
            opportunities,
            leads,
            quotes,
            calendar,
            targets,
            campaigns,
            invoices,
            contracts,
            surveys
        },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Collaborrate CRM'
    })
</script>