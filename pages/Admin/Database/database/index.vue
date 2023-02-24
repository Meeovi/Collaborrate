<template>
    <div>
        <v-toolbar class="databasebar" style="background-color: blue; color: white;">
            <v-row>
                <v-col cols="6">
                    <h5>Database</h5>
                </v-col>
                <v-col cols="6"></v-col>
            </v-row>
        </v-toolbar>
        <v-card class="contentRight">
            <div class="d-flex flex-row">
                <v-tabs v-model="tab" direction="vertical">
                    <v-tab value="option-1">
                        <v-icon start>
                            mdi-lock
                        </v-icon>
                        Triggers
                    </v-tab>
                    <v-tab value="option-2">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Replication
                    </v-tab>
                    <v-tab value="option-3">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Import Data
                    </v-tab>
                    <v-tab value="option-4">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Export Data
                    </v-tab>
                </v-tabs>
                <v-window v-model="tab">
                    <v-window-item value="option-1">
                        <v-card>
                            <v-card-text>
                                <triggers />
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-2">
                        <v-card>
                            <v-card-text>
                                <replication />
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-3">
                        <v-card>
                            <v-card-text>
                                <imports />
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-4">
                        <v-card>
                            <v-card-text>
                                <backups />
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                </v-window>
            </div>
        </v-card>
    </div>
</template>

<script>
    import triggers from './triggers.vue'
    import replication from './replication.vue'
    import imports from './imports.vue'
    import backups from './backups.vue'

    export default {
        components: {
            triggers,
            replication,
            imports,
            backups
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Overview - Database'
    })

    const {
        data: read
    } = await useFetch('/api/read')
</script>