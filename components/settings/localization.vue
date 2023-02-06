<template>
    <v-card>
        <v-tabs v-model="tab">
            <v-tab value="one">Cities</v-tab>
            <v-tab value="two">States</v-tab>
            <v-tab value="three">Countries</v-tab>
            <v-tab value="four">Taxes</v-tab>
            <v-tab value="five">Zones</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <cities />
                </v-window-item>

                <v-window-item value="two">
                    <states />
                </v-window-item>

                <v-window-item value="three">
                    <countries />
                </v-window-item>

                <v-window-item value="four">
                    <taxes />
                </v-window-item>

                <v-window-item value="five">
                    <zones />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import cities from './cities.vue'
import states from './states.vue'
import countries from './countries.vue'
import taxes from './taxes.vue'
import zones from './zones.vue'

    export default {
        components: { cities, states, countries, taxes, zones},
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Localization',
    })
</script>