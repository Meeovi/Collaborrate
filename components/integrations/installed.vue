<template>
    <v-card>
        <div class="d-flex flex-row">
            <v-tabs v-model="tab" direction="vertical" color="primary">
                <v-tab value="option-1">
                    <v-icon start>
                        mdi-account
                    </v-icon>
                    Plugins
                </v-tab>
                <v-tab value="option-2">
                    <v-icon start>
                        mdi-lock
                    </v-icon>
                    Themes
                </v-tab>
                <v-tab value="option-3">
                    <v-icon start>
                        mdi-access-point
                    </v-icon>
                    Feature Packs
                </v-tab>
            </v-tabs>
            <v-window v-model="tab" class="metricsWindowRight">
                <v-window-item value="option-1">
                    <v-card flat>
                        <v-card-text>
                            <myplugins />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-2">
                    <v-card flat>
                        <v-card-text>
                            <mythemes />
                        </v-card-text>
                    </v-card>
                </v-window-item>
                <v-window-item value="option-3">
                    <v-card flat>
                        <v-card-text>
                            <myfeaturepacks />
                        </v-card-text>
                    </v-card>
                </v-window-item>
            </v-window>
        </div>
    </v-card>
</template>

<script>
    import myplugins from './pluginmanager/myplugins'
    import mythemes from './pluginmanager/mythemes'
    import myfeaturepacks from './pluginmanager/myfeaturepacks'

    export default {
        components: {
            myplugins,
            mythemes,
            myfeaturepacks
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>