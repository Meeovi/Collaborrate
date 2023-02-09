<template>
    <div>
        <v-card class="contentright">
            <v-toolbar color="secondary">
                <v-col cols="9">
                <v-toolbar-title>Blog</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createContent />
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
                        Published
                    </v-tab>
                    <v-tab value="option-3">
                        <v-icon start>
                            mdi-access-point
                        </v-icon>
                        Drafts
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
                                <published />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <drafts />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </div>
        </v-card>
    </div>
</template>

<script>
    import createContent from '~/components/content/blog/InsertAddPost.vue'
    import overview from '~/components/content/blog/overview'
    import published from '~/components/content/blog/published'
    import drafts from '~/components/content/blog/drafts'

    export default {
        components: {
            createContent,
            overview,
            published,
            drafts,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Blog',
    })
</script>

<style scoped>

</style>