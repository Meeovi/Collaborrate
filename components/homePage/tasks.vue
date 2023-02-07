<template>
    <v-card>
        <v-toolbar color="danger">
            <v-toolbar-title>Assigned Tasks</v-toolbar-title>

            <v-spacer></v-spacer>

            <template v-slot:extension>
                <v-tabs v-model="tab" align-tabs="title">
                    <v-tab>Upcoming</v-tab>
                    <v-tab>Overdue ()</v-tab>
                    <v-tab>Completed</v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-window v-model="tab">
            <v-window-item>
                <v-card flat>
                    <upcoming />
                </v-card>
            </v-window-item>

            <v-window-item>
                <v-card flat>
                    <overdue />
                </v-card>
            </v-window-item>

            <v-window-item>
                <v-card flat>
                    <completed />
                </v-card>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script>
import upcoming from './tasks/upcoming.vue'
import overdue from './tasks/overdue.vue'
import completed from './tasks/completed.vue'

    export default {
        components: { upcoming, overdue, completed },
        data() {
            return {
                tab: null,
            }
        },
    }
</script>