<template>
    <div>
        <v-card class="contentright">
            <v-toolbar style="background-color: powderblue;color: black;">
                <v-col cols="9">
                <v-toolbar-title>Customers</v-toolbar-title>
            </v-col>
                <v-col cols="2">
                    <createCustomer />
                </v-col>
            </v-toolbar>
            <div class="d-flex flex-row">
                <v-tabs v-model="tab" direction="vertical" color="secondary">
                    <v-tab value="option-1">
                        <v-icon start>
                            mdi-account
                        </v-icon>
                        Overview
                    </v-tab>
                    <v-tab value="option-2">
                        <v-icon start>
                            mdi-lock
                        </v-icon>
                        Customers
                    </v-tab>
                    <v-tab value="option-3">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Segments
                    </v-tab>
                    <v-tab value="option-4">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Companies
                    </v-tab>
                    <v-tab value="option-5">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Reviews
                    </v-tab>
                </v-tabs>
                <v-card-text>
                    <v-window v-model="tab" class="contentRight">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <overview />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <customers />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <segments />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <companies />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-5">
                            <v-card flat>
                                <reviews />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </div>
        </v-card>
    </div>
</template>

<script>
    import createCustomer from '~/components/customers/addCustomer/add-customer.vue'
    import overview from '~/components/customers/overview.vue'
    import customers from '~/components/customers/customers.vue'
    import segments from '~/components/customers/segments.vue'
    import companies from '~/components/customers/companies.vue'
    import reviews from '~/components/customers/reviews.vue'

    export default {
        components: {
            createCustomer,
            overview,
            customers,
            segments,
            companies,
            reviews
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Customers',
    })
</script>

<style scoped>

</style>