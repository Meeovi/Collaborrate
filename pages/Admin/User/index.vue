<template>
    <div>
            <v-card class="settingsCard">
                <v-toolbar color="primary">
                    <v-toolbar-title>Account Overview</v-toolbar-title>
                </v-toolbar>
                <div class="d-flex flex-row">
                    <v-tabs class="settingsLeft" v-model="tab" direction="vertical" color="primary">
                        <h5>Projects</h5>
                        <v-tab value="option-1">
                            <v-icon start>
                                mdi-account
                            </v-icon>
                            All Projects
                        </v-tab>
                        <v-tab value="option-2">
                            <v-icon start>
                                mdi-lock
                            </v-icon>
                            Organizations
                        </v-tab>
                        <h5>Account</h5>
                        <v-tab value="option-3">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Preferences
                        </v-tab>
                        <v-tab value="option-4">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Access Tokens
                        </v-tab>
                        <v-tab value="option-5">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            <a href="https://www.alternatecms.com/docs/guides">Guides</a>
                        </v-tab>
                        <v-tab value="option-6">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            <a href="https://www.alternatecms.com/docs/api">API References</a>
                        </v-tab>
                        <v-tab value="option-7">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            <a href="/">Logout</a>
                        </v-tab>
                    </v-tabs>
                    <v-window v-model="tab" class="settingsRight">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <projects />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <organizations />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <preferences />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <accountTokens />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </div>
            </v-card>
    </div>
</template>

<script>
    import projects from '~/components/user/projects.vue'
    import organizations from '~/components/user/organizations.vue'
    import preferences from '~/components/user/preferences.vue'
    import accountTokens from '~/components/user/account-tokens.vue'

    export default {
        components: {
            projects,
            organizations,
            preferences,
            accountTokens,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Account',
    })
</script>

<style scoped>

</style>