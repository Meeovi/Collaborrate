<template>
    <div>
        <v-card class="metricsVcard">
            <v-toolbar color="error">
                <v-col cols="9">
                    <v-toolbar-title>Integrations</v-toolbar-title>
                </v-col>
                <v-col cols="2">
                    <integrations />
                </v-col>
            </v-toolbar>
            <v-tabs v-model="tab" color="error">
                <v-tab value="option-1">
                    <v-icon start>
                        mdi-lock
                    </v-icon>
                    Plugins
                </v-tab>
                <v-tab value="option-2">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Themes
                </v-tab>
                <v-tab value="option-3">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Feature Packs
                </v-tab>
                <v-tab value="option-4">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                    Installed Integrations
                </v-tab>
            </v-tabs>
            <v-card-text>
                <v-window v-model="tab" class="metricsWindowRight">
                    <v-window-item value="option-1">
                        <v-card flat>
                            <plugins />
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-2">
                        <v-card flat>
                            <themes />
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-3">
                        <v-card flat>
                            <featurepacks />
                        </v-card>
                    </v-window-item>
                    <v-window-item value="option-4">
                        <v-card flat>
                            <installed />
                        </v-card>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import integrations from '~/components/integrations/add-extension'
    import installed from '~/components/integrations/installed'
    import plugins from '~/components/integrations/plugins'
    import themes from '~/components/integrations/themes'
    import featurepacks from '~/components/integrations/featurepacks'

    export default {
        components: {
            integrations,
            installed,
            plugins,
            themes,
            featurepacks,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Integrations Marketplace',
    })
</script>

<style scoped>

</style>