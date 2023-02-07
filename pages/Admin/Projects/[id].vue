<template>
    <v-card class="projectCard">
        <v-toolbar color="primary" density="compact">
            <v-app-bar-nav-icon>
                <v-menu :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="plain" v-bind="props">
                            <v-icon start icon="fas fa-bars"></v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="" value="" href="/"></v-list-item>
                        <v-divider></v-divider>
                        <v-list-item title="All Notifications" value="notifications" href="/admin/user/notifications">
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-app-bar-nav-icon>

            <v-toolbar-title>Project Title</v-toolbar-title>

            
        </v-toolbar>
        <v-tabs bg-color="primary" center-active>
            <v-tab value="one">Overview</v-tab>
            <v-tab value="two">Task</v-tab>
            <v-tab value="three">Board</v-tab>
            <v-tab value="four">Timeline</v-tab>
            <v-tab value="five">Calendar</v-tab>
            <v-tab value="six">Workflow</v-tab>
            <v-tab value="seven">Dashboard</v-tab>
            <v-tab value="eight">Messages</v-tab>
            <v-tab value="nine">Files</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <overview />
                </v-window-item>

                <v-window-item value="two">
                    <task />
                </v-window-item>

                <v-window-item value="three">
                    <board />
                </v-window-item>

                <v-window-item value="four">
                    <timeline />
                </v-window-item>

                <v-window-item value="five">
                    <calendar />
                </v-window-item>

                <v-window-item value="six">
                    <workflow />
                </v-window-item>

                <v-window-item value="seven">
                    <dashboard />
                </v-window-item>

                <v-window-item value="eight">
                    <messages />
                </v-window-item>

                <v-window-item value="nine">
                    <settings />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import overview from '../../../components/content/projects/overview.vue'
import task from '../../../components/content/projects/task.vue'
import board from '../../../components/content/projects/board.vue'
import timeline from '../../../components/content/projects/timeline.vue'
import calendar from '../../../components/content/projects/calendar.vue'
import workflow from '../../../components/content/projects/workflow.vue'
import dashboard from '../../../components/content/projects/dashboard.vue'
import messages from '../../../components/content/projects/messages.vue'
import files from '../../../components/content/projects/files.vue'
import settings from '../../../components/content/projects/settings.vue'

    export default {
        components: { overview, task, board, timeline, calendar, workflow, dashboard, messages, files, settings },
        data: () => ({
            tab: null,
            location: 'bottom',
        }),
    }
</script>

<script setup>
    useHead({
        title: ''
    })
</script>