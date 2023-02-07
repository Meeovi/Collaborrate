<template>
    <div>
        <v-card class="contentright">
            <v-toolbar style="background-color: purple;color: white;">
                <v-col cols="4">
                    <v-toolbar-title>Teams</v-toolbar-title>
                </v-col>
                <v-col cols="4">
                    <v-text-field density="compact" variant="solo" label="Search for teams or people" prepend-inner-icon="fas fa-search"
                    single-line hide-details @click:append-inner="onClick"></v-text-field>
                </v-col>
                <v-col cols="4">
                    <addTeam />
                </v-col>
            </v-toolbar>
                <v-tabs v-model="tab" color="secondary">
                    <v-tab value="option-1">
                        <v-icon start>
                            mdi-account
                        </v-icon>
                        My Team
                    </v-tab>
                    <v-tab value="option-2">
                        <v-icon start>
                            mdi-lock
                        </v-icon>
                        Search Teams
                    </v-tab>
                </v-tabs>
                <v-card-text>
                    <v-window v-model="tab" class="contentRight">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <myteams />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <searchteams />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import addTeam from '../../../components/teams/add-teams.vue'
    import myteams from '../../../components/teams/myteams.vue'
    import searchteams from '../../../components/teams/searchteams.vue'

    export default {
        components: {
            addTeam,
            myteams,
            searchteams,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'teams',
    })
</script>

<style scoped>

</style>