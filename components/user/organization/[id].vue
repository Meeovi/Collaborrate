<template>
    <div>
            <v-card class="contentright">
                <v-toolbar color="secondary">
                    <v-toolbar-title>Your Organization Settings</v-toolbar-title>
                </v-toolbar>
                    <v-tabs v-model="tab" color="secondary">
                        <v-tab value="option-1">
                            <v-icon start>
                                mdi-account
                            </v-icon>
                            General
                        </v-tab>
                        <v-tab value="option-2">
                            <v-icon start>
                                mdi-lock
                            </v-icon>
                            Team
                        </v-tab>
                        <v-tab value="option-3">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Billing
                        </v-tab>
                        <v-tab value="option-4">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Invoices
                        </v-tab>
                    </v-tabs>
                    <v-card-text>
                    <v-window v-model="tab" class="databaseSections">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <general />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <team />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <billing />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <invoices />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
    </div>
</template>

<script>
    import general from './general'
    import team from './team'
    import billing from './billing'
    import invoices from './invoices'

    export default {
        components: {
            general,
            team,
            billing,
            invoices
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: '',
    })
</script>

<style scoped>

</style>