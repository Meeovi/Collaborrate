<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-database" variant="text" v-bind="props">Database</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Database</span>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                        <v-list>
                            <v-list-item prepend-icon="fas fa-server" title="SQL Editor" value="SQL Editor"
                                href="/Admin/Database/sqleditor"></v-list-item>
                            <v-list-item prepend-icon="fas fa-database" title="Database" value="Database"
                                href="/Admin/Database/Database"></v-list-item>
                            <v-list-item prepend-icon="fas fa-diagram-predecessor" title="Edge Functions"
                                value="Edge Functions" href="/Admin/Database/edgefunctions"></v-list-item>
                            <v-list-item prepend-icon="fas fa-bug" title="Logs" value="Logs"
                                href="/Admin/Database/Logs">
                            </v-list-item>
                            <v-list-item prepend-icon="fas fa-link" title="API Docs" value="API Docs"
                                href="/Admin/Database/apidocs"></v-list-item>
                            <v-list-item prepend-icon="fas fa-eye" title="API Studio" value="API Studio"
                                href="/Admin/Database/apistudio"></v-list-item>
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