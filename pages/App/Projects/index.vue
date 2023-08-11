<template>
    <v-card class="messengerPage">
        <v-toolbar color="purple" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Projects</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <v-menu :location="location" transition="slide-y-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn variant="text" v-bind="props" size="large" icon="fas fa-cog" title="Settings"></v-btn>
                        </template>
                        <projectmenu />
                    </v-menu>

                    <v-btn variant="text" href="" icon="fas fa-pen-to-square" title="New Message"></v-btn>
                </v-col>
            </v-row>
        </v-toolbar>
        <v-card>
            <v-layout>
                <v-navigation-drawer permanent>
                    <v-toolbar class="toolbarListTitle" color="purple" border><v-toolbar-title>Org Name</v-toolbar-title></v-toolbar>
                    <v-list class="channelList">
                        <v-list-item prepend-icon="fas fa-list-check" title="My Projects" value="My Projects" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-bars-progress" title="My Tasks" value="My Tasks" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-chalkboard-user" title="Reporting" value="Reporting" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-users-viewfinder" title="Portfolios" value="Portfolios" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-flag-checkered" title="Goals" value="Goals" href="#content"></v-list-item>
                        <v-list-item prepend-icon="fas fa-star" title="Starred" value="Starred" href="#content"></v-list-item>

                        <v-divider></v-divider>
                        <v-list-item title="Project Names" value="Project Names" href="#content"></v-list-item>
                    </v-list>
                </v-navigation-drawer>

                <v-main class="contentPanel">
                    <projectwindow />
                </v-main>
            </v-layout>
        </v-card>
    </v-card>
</template>

<script>
import projectmenu from '../../../components/Menus/projectmenu.vue'
import projectwindow from '../../../components/Content/project/projectwindow.vue'

    export default {
        components: { projectmenu, projectwindow },
        data: () => ({
            location: 'end'
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Collaborrate Projects'
    })
</script>