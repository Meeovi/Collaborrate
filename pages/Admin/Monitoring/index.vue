<template>
    <v-card>
        <v-toolbar style="background-color: plum; color: white;">
            <v-toolbar-title>Monitoring</v-toolbar-title>
        </v-toolbar>
        <div class="d-flex flex-row">
            <v-tabs v-model="tab" direction="vertical" style="background-color: plum; color: white;">
                <v-tab value="option-1">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                    Overview
                </v-tab>
                <v-tab value="option-2">
                    <v-icon start>
                        mdi-lock
                    </v-icon>
                    Errors
                </v-tab>
                <v-tab value="option-3">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Usage
                </v-tab>
                <v-tab value="option-4">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Operations
                </v-tab>
                <v-tab value="option-5">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Websockets
                </v-tab>
                <v-tab value="option-6">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Subscription Workers
                </v-tab>
                <v-tab value="option-7">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Allow Lists
                </v-tab>
                <v-tab value="option-8">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    API Limits
                </v-tab>
                <v-tab value="option-9">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Regression Tests
                </v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="option-1">
                    <v-card flat>
                        <v-card-text>
                          <metricHome />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-2">
                    <v-card flat>
                        <v-card-text>
                            <errors />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-3">
                    <v-card flat>
                        <v-card-text>
                            <usage />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-4">
                    <v-card flat>
                        <v-card-text>
                            <operations />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-5">
                    <v-card flat>
                        <v-card-text>
                            <websockets />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-6">
                    <v-card flat>
                        <v-card-text>
                            <subscriptionworkers />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-7">
                    <v-card flat>
                        <v-card-text>
                            <allowlists />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-8">
                    <v-card flat>
                        <v-card-text>
                            <apilimits />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-9">
                    <v-card flat>
                        <v-card-text>
                            <regressiontests />
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
    </v-card>
</template>

<script>
    import metricHome from '../../../components/monitoring/metricHome.vue'
    import errors from '../../../components/monitoring/errors.vue'
    import usage from '../../../components/monitoring/usage.vue'
    import operations from '../../../components/monitoring/operations.vue'
    import websockets from '../../../components/monitoring/websockets.vue'
    import subscriptionworkers from '../../../components/monitoring/subscriptionworkers.vue'
    import allowlists from '../../../components/monitoring/allowlists.vue'
    import apilimits from '../../../components/monitoring/apilimits.vue'
    import regressiontests from '../../../components/monitoring/regressiontests.vue'

    export default {
        components: {
            metricHome,
            errors,
            usage,
            operations,
            websockets,
            subscriptionworkers,
            allowlists,
            apilimits,
            regressiontests
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Monitoring'
    })
</script>