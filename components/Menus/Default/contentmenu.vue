<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-arrows-to-circle" variant="text" v-bind="props">Content</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Content</span>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                        <v-list>
                            <v-list-item prepend-icon="fas fa-arrows-to-circle" title="Content Manager"
                                value="Content Manager" href="/Admin/Content/manager"></v-list-item>
                            <v-list-item prepend-icon="fas fa-th" title="Categories" value="Categories"
                                href="/Admin/Content/Categories"></v-list-item>
                            <v-list-item prepend-icon="fas fa-tag" title="Tags" value="Tags"
                                href="/Admin/Content/Tags"></v-list-item>
                            <v-list-item prepend-icon="fas fa-desktop" title="Pages" value="desktop"
                                href="/Admin/Content/PageManager/"></v-list-item>
                            <v-list-item prepend-icon="fas fa-icons" title="Media Manager" value="media manager"
                                href="/Admin/Content/Media/"></v-list-item>
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