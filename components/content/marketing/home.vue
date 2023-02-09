<template>
    <div>
        <v-row class="contentDashboard">
            <v-col cols="3">
                <h4>Emails Sent</h4>
                <p>0</p>
            </v-col>
            <v-col cols="3">
                <h4>Newsletters Sent</h4>
                <p>0</p>
            </v-col>
            <v-col cols="3">
                <h4>Promotions Ran</h4>
                <p>0</p>
            </v-col>
            <v-col cols="3">
                <h4>Templates Made</h4>
                <p>0</p>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <v-card>
                    <v-tabs v-model="tab">
                        <v-tab value="one">Last Emails</v-tab>
                        <v-tab value="two">Most Recent Newsletters</v-tab>
                        <v-tab value="three">Recently Created Templates</v-tab>
                        <v-tab value="four">Recent Promotions</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="one">
                                <lastemails />
                            </v-window-item>

                            <v-window-item value="two">
                                <mostrecent />
                            </v-window-item>

                            <v-window-item value="three">
                                <recenttemplates />
                            </v-window-item>

                            <v-window-item value="four">
                                <recentpromotions />
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import lastemails from './dashboard/lastemails.vue'
import mostrecent from './dashboard/mostrecent.vue'
import recenttemplates from './dashboard/recenttemplates.vue'
import recentpromotions from './dashboard/recentpromotions.vue'

    export default {
        components: { lastemails, mostrecent, recenttemplates, recentpromotions },
        data() {
            return {
                tab: null,
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Marketing',
    })
</script>

<style scoped>

</style>