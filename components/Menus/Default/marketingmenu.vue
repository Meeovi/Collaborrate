<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-bullhorn" variant="text" v-bind="props">Marketing
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Marketing</span>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item prepend-icon="fas fa-timeline" title="Marketing Home" value="Marketing Home"
                            href="/Admin/Marketing/"></v-list-item>
                        <v-list-item prepend-icon="fas fa-envelope" title="Communications" value="Communications"
                            href="/Admin/Marketing/Communications"></v-list-item>
                        <v-list-item prepend-icon="fas fa-bullhorn" title="Engagement" value="Engagement"
                            href="/Admin/Marketing/Engagement"></v-list-item>
                        <v-list-item prepend-icon="fas fa-person-rays" title="Events" value="Events"
                            href="/Admin/Marketing/Events"></v-list-item>
                        <v-list-item prepend-icon="fas fa-magnifying-glass-arrow-right" title="Seo" value="Seo"
                            href="/Admin/Marketing/Seo"></v-list-item>
                        <v-list-item prepend-icon="fas fa-signs-post" title="Campaigns" value="Campaigns"
                            href="/Admin/Marketing/Campaigns"></v-list-item>
                        <v-list-item prepend-icon="fas fa-clipboard-question" title="Surveys" value="Surveys"
                            href="/Admin/Marketing/Surveys"></v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {

        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            }
        },
    }
</script>