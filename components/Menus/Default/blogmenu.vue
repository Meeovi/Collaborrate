<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn prepend-icon="fas fa-feather" variant="text" v-bind="props"></v-btn>
                <p class="menutext">Blog</p>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Blog</span>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                        <v-list>
                            <v-list-item prepend-icon="fas fa-pen-nib" title="Blog Dashboard" value="Blog Dashboard"
                                href="/Admin/Blog/Dashboard"></v-list-item>
                            <v-list-item prepend-icon="fas fa-pen" title="Posts" value="Posts" href="/Admin/Blog/Posts">
                            </v-list-item>
                            <v-list-item prepend-icon="fas fa-file-pen" title="Drafts" value="Drafts"
                                href="/Admin/Blog/Drafts">
                            </v-list-item>
                            <v-list-item prepend-icon="fas fa-rss" title="Scheduled" value="Scheduled"
                                href="/Admin/Blog/Scheduled">
                            </v-list-item>
                            <v-list-item prepend-icon="fas fa-pen-to-square" title="Published" value="Published"
                                href="/Admin/Blog/Published"></v-list-item>
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