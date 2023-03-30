<template>
    <v-card class="contentRight">
        <v-tabs v-model="tab" bg-color="transparent">
            <v-tab value="one">Allowed Operations</v-tab>
            <v-tab value="two">New Operations</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <allowedoperations />
                </v-window-item>

                <v-window-item value="two">
                    <newoperations />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import allowedoperations from './allowlimits/allowedoperations.vue'
import newoperations from './allowlimits/newoperations.vue'

    export default {
        components: { allowedoperations, newoperations },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Allow Lists - Monitoring'
    })
</script>