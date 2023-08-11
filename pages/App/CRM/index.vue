<template>
    <v-card class="messengerPage">
        <v-toolbar color="red" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">CRM</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <v-menu :location="location" transition="slide-y-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn variant="text" v-bind="props" size="large" prepend-icon="fas fa-plus" append-icon="fas fa-caret-down" title="New">New</v-btn>
                        </template>
                        <crmmenu />
                    </v-menu>

                    <v-btn variant="text" href="" icon="fas fa-pen-to-square" title="New Message"></v-btn>
                </v-col>
            </v-row>
        </v-toolbar>
        <v-card>
            <v-layout>
                <v-navigation-drawer permanent>
                    <v-toolbar class="toolbarListTitle" color="red" border><v-toolbar-title>Org Name</v-toolbar-title></v-toolbar>
                    <v-list class="channelList">
                        <v-list-item prepend-icon="fas fa-timeline" title="Projects" value="Projects" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-ticket" title="Tickets" value="Tickets" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-list" title="Lists" value="Lists" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-chart-pie" title="Reporting" value="Reporting" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-lines-leaning" title="Knowledgebase" value="Knowledgebase" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-file" title="Documents" value="Documents" href="#content"></v-list-item>

                        <v-divider></v-divider>
                        <v-list-item title="Accounts" value="Accounts" href="#content"></v-list-item>
                        <v-list-item title="Contacts" value="Contacts" href="#content"></v-list-item>
                        <v-list-item title="Opportunities" value="Opportunities" href="#content"></v-list-item>
                        <v-list-item title="Leads" value="Leads" href="#content"></v-list-item>
                        <v-list-item title="Quotes" value="Quotes" href="#content"></v-list-item>
                        <v-list-item title="Calendar" value="Calendar" href="#content"></v-list-item>
                        <v-list-item title="Targets" value="Targets" href="#content"></v-list-item>
                        <v-list-item title="Campaigns" value="Campaigns" href="#content"></v-list-item>
                        <v-list-item title="Invoices" value="Invoices" href="#content"></v-list-item>
                        <v-list-item title="Contracts" value="Contracts" href="#content"></v-list-item>
                        <v-list-item title="Surveys" value="Surveys" href="#content"></v-list-item>
                    </v-list>
                </v-navigation-drawer>

                <v-main class="contentPanel">
                    <contentwindow />
                </v-main>
            </v-layout>
        </v-card>
    </v-card>
</template>

<script>
import crmmenu from '../../../components/Menus/crmmenu.vue'
import contentwindow from '../../../components/Content/customers/contentwindow.vue'

    export default {
        components: { crmmenu, contentwindow },
        data: () => ({
            location: 'end'
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Collaborrate CRM'
    })
</script>