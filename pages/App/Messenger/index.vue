<template>
    <v-card class="messengerPage">
        <v-toolbar color="primary" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Messenger</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <v-menu :location="location" transition="slide-y-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn variant="text" v-bind="props" size="large" icon="fas fa-cog" title="Settings"></v-btn>
                        </template>
                        <messengermenu />
                    </v-menu>

                    <v-btn variant="text" href="" icon="fas fa-pen-to-square" title="New Message"></v-btn>
                </v-col>
            </v-row>
        </v-toolbar>
        <v-card>
            <v-layout>
                <v-navigation-drawer permanent>
                    <v-toolbar class="toolbarListTitle" color="primary" border><v-toolbar-title>Org Name</v-toolbar-title></v-toolbar>
                    <v-list class="channelList">
                        <v-list-item prepend-icon="fas fa-comment-dots" title="Threads" value="Threads" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-bookmark" title="Later" value="Later" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-comment" title="Direct Messages" value="Direct Messages" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-message" title="Mentions & Reactions" value="Mentions & Reactions" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-at" title="Drafts & Sent" value="Drafts & Sent" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-border-all" title="All Channels" value="All Channels" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-photo-film" title="Media" value="Media" href="#content"></v-list-item>

                        <v-divider></v-divider>
                        <v-list-item title="Channel Names" value="Channel Names" href="#content"></v-list-item>
                    </v-list>
                </v-navigation-drawer>

                <v-main class="contentPanel">
                    <channelwindow />
                </v-main>
            </v-layout>
        </v-card>
    </v-card>
</template>

<script>
import messengermenu from '../../../components/Menus/messengermenu.vue'
import channelwindow from '../../../components/Content/messenger/channelwindow.vue'

    export default {
        components: { messengermenu, channelwindow },
        data: () => ({
            location: 'end'
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Collaborrate Messenger'
    })
</script>