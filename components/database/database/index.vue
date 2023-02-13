<template>
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
</template>

<script>
import triggers from './triggers.vue'
import replication from './replication.vue'
import imports from './imports.vue'
import backups from './backups.vue'

  export default {
    components: { triggers, replication, imports, backups },
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