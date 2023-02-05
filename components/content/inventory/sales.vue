<template>
    <v-card>
        <v-tabs v-model="tab">
            <v-tab value="one">OPEN</v-tab>
            <v-tab value="two">SHIPPED</v-tab>
            <v-tab value="three">COMPLETED</v-tab>
            <v-tab value="four">ACTIVE</v-tab>
            <v-tab value="five">DRAFT</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <open />
                </v-window-item>

                <v-window-item value="two">
                    <shipped />
                </v-window-item>

                <v-window-item value="three">
                    <completed />
                </v-window-item>

                <v-window-item value="four">
                    <active />
                </v-window-item>

                <v-window-item value="five">
                    <draft />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import open from './sales/open.vue'
import shipped from './sales/shipped.vue'
import completed from './sales/completed.vue'
import active from './sales/active.vue'
import draft from './sales/draft.vue'

    export default {
        components: { open, shipped, completed, active, draft},
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Sales',
    })
</script>