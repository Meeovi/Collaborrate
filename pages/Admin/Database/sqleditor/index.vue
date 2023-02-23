<template>
    <v-card class="contentRight">
        <div class="d-flex flex-row">
            <v-tabs v-model="tab" direction="vertical">
                <v-tab value="option-1">
                    <v-icon start>
                        mdi-lock
                    </v-icon>
                    Quickstart
                </v-tab>
                <v-tab value="option-2">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Scripts
                </v-tab>
                <v-tab value="option-3">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Preview
                </v-tab>
                <v-tab value="option-4">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    PostgreSQL Extensions
                </v-tab>
                <v-tab value="option-5">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    SQL
                </v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="option-1">
                    <v-card>
                        <v-card-text>
                            <quickstart />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-2">
                    <v-card>
                        <v-card-text>
                            <snippets />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-3">
                    <v-card>
                        <v-card-text>
                            <preview />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-4">
                    <v-card>
                        <v-card-text>
                            <postextensions />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-5">
                    <v-card>
                        <v-card-text>
                            <sql />
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
    </v-card>
</template>

<script>
import quickstart from './quickstart/index.vue'
import snippets from './snippets/index.vue'
import preview from './preview/index.vue'
import postextensions from './postextensions/index.vue'
import sql from './sql.vue'

  export default {
    components: { quickstart, snippets, preview, postextensions, sql },
    data: () => ({
      tab: 'option-1',
    }),
  }
</script>

<script setup>
    useHead({
        title: 'SQL Editor - Database'
    })

    const {
        data: read
    } = await useFetch('/api/read')
</script>