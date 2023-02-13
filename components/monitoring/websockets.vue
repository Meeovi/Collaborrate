<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h5>Websockets</h5>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <h5>Websockets List</h5>
            </v-col>
            <v-col cols="4">
                <websocketChart />
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
    </div>
</template>

<script>
    import websocketChart from '../charts/Monitoring/websocketChart.vue'

    export default {
        components: {
            websocketChart
        },
    }
</script>

<script setup>
    useHead({
        title: 'Websockets - Monitoring'
    })
</script>