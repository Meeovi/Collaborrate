<template>
    <div class="contentRight" style="padding: 15px;">
        <v-row>
            <v-col cols="6">
                <commerceChart />
            </v-col>
            <v-col cols="6">
                <commerceChart />
            </v-col>
            <v-divider></v-divider>
            <v-col cols="6">
                <h4>Lifetime Sales</h4>
                <p>$0.00</p>
            </v-col>
            <v-col cols="6">
                <h4>Average Order</h4>
                <p>$0.00</p>
            </v-col>
            <v-col cols="3">
                <h4>Revenue</h4>
                <p>$0.00</p>
            </v-col>
            <v-col cols="3">
                <h4>Tax</h4>
                <p>$0.00</p>
            </v-col>
            <v-col cols="3">
                <h4>Shipping</h4>
                <p>$0.00</p>
            </v-col>
            <v-col cols="3">
                <h4>Quantity</h4>
                <p>0</p>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <v-card>
                    <v-tabs v-model="tab">
                        <v-tab value="one">Last Orders</v-tab>
                        <v-tab value="two">Bestsellers</v-tab>
                        <v-tab value="three">Most Viewed Products</v-tab>
                        <v-tab value="four">Last Search Terms</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item value="one">
                                <lastorders />
                            </v-window-item>

                            <v-window-item value="two">
                                <bestsellers />
                            </v-window-item>

                            <v-window-item value="three">
                                <mostviewed />
                            </v-window-item>

                            <v-window-item value="four">
                                <lastsearch />
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import commerceChart from '../../../components/charts/eCommerce/commerceChart.vue'
import lastorders from '../../../components/content/inventory/dashboard/lastorders.vue'
import bestsellers from '../../../components/content/inventory/dashboard/bestsellers.vue'
import mostviewed from '../../../components/content/inventory/dashboard/mostviewed.vue'
import lastsearch from '../../../components/content/inventory/dashboard/lastsearch.vue'

    export default {
        components: { commerceChart, lastorders, bestsellers, mostviewed, lastsearch },
        data() {
            return {
                tab: null,
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Alternate Commerce',
    })
</script>

<style scoped>

</style>