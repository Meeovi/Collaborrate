<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn prepend-icon="fas fa-chart-simple" variant="text" v-bind="props"></v-btn><p class="menutext">Reports</p>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Reports</span>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                            <v-list>
                                <v-list-item prepend-icon="fas fa-handshake" title="Agreements" value="Agreements"
                                href="/Admin/Commerce/Agreements"></v-list-item>
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