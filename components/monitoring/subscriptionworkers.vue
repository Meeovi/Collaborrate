<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h5>Subscription Workers</h5>
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
                <h6>Workers</h6>
                <p></p>
            </v-col>

            <v-col cols="3">
               <v-card title="Batch Size:" text="" variant="tonal"></v-card><br>
               <v-card title="Refetch delay:" text="" variant="tonal"></v-card>
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
        title: 'Subscription Workers - Monitoring'
    })
</script>