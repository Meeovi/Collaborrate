<template>
    <div>
            <v-card class="settingsCard">
                <v-toolbar color="primary">
                    <v-toolbar-title>Settings</v-toolbar-title>
                </v-toolbar>
                <div class="d-flex flex-row">
                    <v-tabs class="settingsLeft" v-model="tab" direction="vertical" color="primary">
                        <h5>GLOBAL SETTINGS</h5>
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
                            API Tokens
                        </v-tab>
                        <v-tab value="option-3">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Internalionalization
                        </v-tab>
                        <v-tab value="option-4">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Localization
                        </v-tab>
                        <v-tab value="option-5">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Shipping
                        </v-tab>
                        <v-tab value="option-6">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Media Library
                        </v-tab>
                        <v-tab value="option-7">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Webhooks
                        </v-tab>
                        <h5>ADMINISTRATION PANEL</h5>
                        <v-tab value="option-8">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Roles
                        </v-tab>
                        <h5>EMAIL</h5>
                        <v-tab value="option-9">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Configuration
                        </v-tab>
                        <h5>ADVANCE SETTINGS</h5>
                        <v-tab value="option-10">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Storage
                        </v-tab>
                        <v-tab value="option-11">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Auth
                        </v-tab>
                    </v-tabs>
                    <v-window v-model="tab" class="settingsRight">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <overview />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <apitokens />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <internalionalization />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <localization />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-5">
                            <v-card flat>
                                <shipping />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-6">
                            <v-card flat>
                                <medialibrary />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-7">
                            <v-card flat>
                                <webhooks />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-8">
                            <v-card flat>
                                <roles />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-9">
                            <v-card flat>
                                <emailConfiguration />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-10">
                            <v-card flat>
                                <storage />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-11">
                            <v-card flat>
                                <auth />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </div>
            </v-card>
    </div>
</template>

<script>
    import overview from '~/components/settings/overview'
    import apitokens from '~/components/settings/apitokens'
    import emailConfiguration from '~/components/settings/emailConfiguration'
    import internalionalization from '~/components/settings/internalionalization'
    import localization from '~/components/settings/localization'
    import shipping from '~/components/settings/shipments'
    import webhooks from '~/components/settings/webhooks'
    import medialibrary from '~/components/settings/medialibrary'
    import roles from '~/components/settings/roles'
    import storage from '~/components/settings/storage'
    import auth from '~/components/settings/auth'

    export default {
        components: {
            overview,
            apitokens,
            emailConfiguration,
            internalionalization,
            localization,
            shipping,
            webhooks,
            roles,
            medialibrary,
            storage,
            auth
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Settings',
    })
</script>

<style scoped>

</style>