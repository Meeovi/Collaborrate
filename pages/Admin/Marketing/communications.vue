<template>
    <div>
        <v-card class="contentright">
            <v-toolbar>
                <v-col cols="12">
                <v-toolbar-title>Communications</v-toolbar-title>
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
                        Emails
                    </v-tab>
                    <v-tab value="option-3">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Newsletters
                    </v-tab>
                    <v-tab value="option-4">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Templates
                    </v-tab>
                </v-tabs>
                <v-card-text>
                    <v-window v-model="tab" class="databaseSections">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <overview />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <emails />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <newsletters />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <templates />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </div>
        </v-card>
    </div>
</template>

<script>
    import createContent from '../../../components/content/marketing/InsertAddPost.vue'
    import overview from '../../../components/content/marketing/overview'
    import emails from '../../../components/content/marketing/emails'
    import newsletters from '../../../components/content/marketing/newsletters'
    import templates from '../../../components/content/marketing/templates'

    export default {
        components: {
            createContent,
            overview,
            emails,
            newsletters,
            templates
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Communications',
    })
</script>

<style scoped>

</style>