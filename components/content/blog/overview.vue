<template>
    <div>
        <v-row class="contentDashboard">
            <v-col cols="3">
                <h4>Total Members</h4>
                <p>0</p>
            </v-col>
            <v-col cols="3">
                <h4>Paid Members</h4>
                <p>0</p>
            </v-col>
            <v-col cols="3">
                <h4>Free Members</h4>
                <p>0</p>
            </v-col>
            <v-col cols="3">
                <h4>Average Customer Age</h4>
                <p>0</p>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <v-card>
                    <v-tabs v-model="tab">
                        <v-tab value="one">Recent Posts</v-tab>
                        <v-tab value="two">Member Activity</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="one">
                                <recentposts />
                            </v-window-item>

                            <v-window-item value="two">
                                <memberactivity />
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import recentposts from './dashboard/recentposts.vue'
import memberactivity from './dashboard/memberactivity.vue'

    export default {
        components: { recentposts, memberactivity },
        data() {
            return {
                tab: null,
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Blog',
    })
</script>

<style scoped>

</style>