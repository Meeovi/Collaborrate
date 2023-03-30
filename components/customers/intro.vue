<template>
    <div>
        <v-row class="contentDashboard">
            <v-col cols="3">
                <h4># of Users</h4>
                <p>0</p>
            </v-col>
            <v-col cols="3">
                <h4># of Partners</h4>
                <p>0</p>
            </v-col>
            <v-col cols="3">
                <h4># of Reviews</h4>
                <p>0</p>
            </v-col>
            <v-col cols="3">
                <h4># of Customers</h4>
                <p>0</p>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <v-card>
                    <v-tabs v-model="tab">
                        <v-tab value="one">New Users</v-tab>
                        <v-tab value="two">Loyal Customers</v-tab>
                        <v-tab value="three">New Partners</v-tab>
                        <v-tab value="four">Recent Reviews</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="one">
                                <newusers />
                            </v-window-item>

                            <v-window-item value="two">
                                <oldestcustomers />
                            </v-window-item>

                            <v-window-item value="three">
                                <newpartners />
                            </v-window-item>

                            <v-window-item value="four">
                                <recentreviews />
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import newusers from './dashboard/newusers.vue'
import oldestcustomers from './dashboard/oldestcustomers.vue'
import newpartners from './dashboard/newpartners.vue'
import recentreviews from './dashboard/recentreviews.vue'

    export default {
        components: { newusers, oldestcustomers, newpartners, recentreviews },
        data() {
            return {
                tab: null,
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Users',
    })
</script>

<style scoped>

</style>