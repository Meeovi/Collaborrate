<template>
    <v-card class="mx-auto" max-width="344">
        <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

        <v-card-title>
            Top western road trips
        </v-card-title>

        <v-card-subtitle>
            1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text">
                Team Members
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    <v-row justify="space-around">
                        <v-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" size="x-large"></v-img>
                        </v-avatar>
                    </v-row>
                </v-card-text>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            show: false,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Search Teams'
    })
</script>