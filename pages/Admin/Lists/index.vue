<template>
    <div>
        <v-card class="contentright">
            <v-toolbar style="background-color: goldenrod;color: white;">
                <v-col cols="12">
                    <v-toolbar-title>Lists</v-toolbar-title>
                </v-col>
            </v-toolbar>
                <v-tabs v-model="tab" style="background-color: goldenrod;color: white;">
                    <v-tab value="option-1">
                        <v-icon start>
                            mdi-account
                        </v-icon>
                        Checklists
                    </v-tab>
                    <v-tab value="option-2">
                        <v-icon start>
                            mdi-lock
                        </v-icon>
                        Todo Lists
                    </v-tab>
                    <v-tab value="option-3">
                        <v-icon start>
                            mdi-lock
                        </v-icon>
                        Roadmaps
                    </v-tab>
                </v-tabs>
                <v-card-text>
                    <v-window v-model="tab" class="contentRight">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <checklists />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <todolists />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <roadmaps />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import checklists from '../../../components/content/lists/checklists.vue'
    import todolists from '../../../components/content/lists/todolists.vue'
    import roadmaps from '../../../components/content/lists/roadmaps.vue'

    export default {
        components: {
            checklists,
            todolists,
            roadmaps,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Lists',
    })
</script>

<style scoped>

</style>