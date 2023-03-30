<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h5>Overview</h5>
                <v-divider></v-divider>
            </v-col>
            <v-col cols="4">
                <mainChart />
            </v-col>
            <v-col cols="4">
                <mainChart />
            </v-col>
            <v-col cols="4">
                <mainChart />
            </v-col>
            <v-divider></v-divider>
            <v-spacer></v-spacer>
            <v-col cols="6">
                <h6>Source Health</h6>
            </v-col>

            <v-col cols="5">
                <h6>Select a source for more information</h6>
                <v-select label="Select" :items="['California']">
                </v-select>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import mainChart from '../charts/Monitoring/mainChart.vue'

    export default {
        components: {
            mainChart
        }
    }
</script>

<script setup>
    useHead({
        title: 'Overview - Monitoring'
    })
</script>