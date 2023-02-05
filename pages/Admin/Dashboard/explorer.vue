<template>
    <div>
        <v-row>
            <v-col cols="2" class="leftContent">
                <DashLeft />
            </v-col>
            <v-col>
                <DashRight />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import DashLeft from '../../../components/dashboards/DashLeft.vue'
import DashRight from '../../../components/dashboards/DashRight.vue'

export default {
    components: { DashLeft, DashRight }
}
</script>

<script setup>
useHead({
        title: 'Dashboards',
    })
</script>

