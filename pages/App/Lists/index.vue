<template>
    <v-card class="messengerPage">
        <v-toolbar color="green" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Lists</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <v-menu :location="location" transition="slide-y-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn variant="text" v-bind="props" size="large" icon="fas fa-cog" title="Settings"></v-btn>
                        </template>
                        <listmenu />
                    </v-menu>

                    <v-btn variant="text" href="" icon="fas fa-pen-to-square" title="New Message"></v-btn>
                </v-col>
            </v-row>
        </v-toolbar>
        <v-card>
            <v-layout>
                <v-navigation-drawer permanent>
                    <v-toolbar class="toolbarListTitle" color="green" border><v-toolbar-title>Org Name</v-toolbar-title></v-toolbar>
                    <v-list class="channelList">
                        <v-list-item prepend-icon="fas fa-list-check" title="My Lists" value="My Lists" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-chalkboard-user" title="Reporting" value="Reporting" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-star" title="Starred" value="Starred" href="#content"></v-list-item>

                        <v-divider></v-divider>
                        <v-list-item title="List Names" value="List Names" href="#content"></v-list-item>
                    </v-list>
                </v-navigation-drawer>

                <v-main class="contentPanel">
                    <listwindow />
                </v-main>
            </v-layout>
        </v-card>
    </v-card>
</template>

<script>
import listmenu from '../../../components/Menus/listmenu.vue'
import listwindow from '../../../components/Content/lists/listwindow.vue'

    export default {
        components: { listmenu, listwindow },
        data: () => ({
            location: 'end'
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Collaborrate Lists'
    })
</script>