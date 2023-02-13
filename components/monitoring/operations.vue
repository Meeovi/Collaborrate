<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h5>Operations</h5>
            </v-col>
            <v-col cols="6">
                <v-switch v-model="enableResponse" label="Enable response body analysis" inset></v-switch>
            </v-col>
            <v-col cols="6">
                <v-switch v-model="captureQuery" label="Capture query variables" inset></v-switch>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <h5>Operations List</h5>
            </v-col>
            <v-col cols="4">
                <operationChart />
            </v-col>
            <v-col cols="4">
                <operationChart />
            </v-col>
            <v-divider></v-divider>
            <v-spacer></v-spacer>
        </v-row>
    </div>
</template>

<script>
    import operationChart from '../charts/Monitoring/operationChart.vue'

    export default {
        components: {
            operationChart
        },
        data() {
            return {
                enableResponse: true,
                captureQuery: true,
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Operations - Monitoring'
    })
</script>