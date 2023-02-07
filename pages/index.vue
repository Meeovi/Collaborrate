<template>
    <div>
        <v-row class="homeSection">
            <v-col cols="12" class="homeTitle">
                <h6>{{ new Date() }}</h6>
            </v-col>

            <v-col cols="12" class="homeDescription">
                <h5>Your Dashboard</h5>
            </v-col>

            <v-col cols="12">
                <recentProject />
            </v-col>

            <v-col cols="6">
                <priorities />
            </v-col>

            <v-col cols="6">
                <tasks />
            </v-col>

            <v-col cols="12">
                <newmembers />
            </v-col>
        </v-row>
    </div>
</template>

<script>
//import databaseCharts from '../components/charts/homeCharts/databaseCharts.vue'
import priorities from '../components/homePage/priorities.vue'
import tasks from '../components/homePage/tasks.vue'
import recentProject from '../components/homePage/recent.vue'
import newmembers from '../components/homePage/newmembers.vue'

    export default {
        components: { priorities, tasks, recentProject, newmembers }
    }
</script>

<script setup>
    useHead({
        title: 'Collaborrate',
    })
</script>