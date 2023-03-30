<template>
    <v-card class="contentRight">
        <v-tabs v-model="tab" bg-color="transparent">
            <v-tab value="one">Test Suite</v-tab>
            <v-tab value="two">New Operations</v-tab>
            <v-tab value="three">Run Tests</v-tab>
            <v-tab value="four">Past Runs</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <testsuite />
                </v-window-item>

                <v-window-item value="two">
                    <newoperations />
                </v-window-item>

                <v-window-item value="three">
                    <runtests />
                </v-window-item>

                <v-window-item value="four">
                    <pastruns />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import testsuite from './regressiontests/testsuite.vue'
import newoperations from './regressiontests/newoperations.vue'
import runtests from './regressiontests/runtests.vue'
import pastruns from './regressiontests/pastruns.vue'

    export default {
        components: { testsuite, newoperations, runtests, pastruns },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Regression Tests - Monitoring'
    })
</script>