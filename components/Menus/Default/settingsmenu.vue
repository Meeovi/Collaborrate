<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-cog" variant="text" v-bind="props">Settings</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <v-row>
                        <v-col cols="6">
                            <span class="text-h6">Settings</span>
                        </v-col>
                    </v-row>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                        <v-list>
                            <v-list-item title="Settings" href="/Admin/Settings/general-settings"></v-list-item>

                            <v-list-item title="Notifications" href="/Admin/Settings/Notifications/"></v-list-item>

                            <v-list-item title="Integrations Marketplace" value="integrations"
                                href="/Admin/Integrations/"></v-list-item>

                            <v-list-item title="Documentation" value="documentation"
                                href="https://www.alternatecms.com/docs">
                            </v-list-item>
                            <v-list-item title="Discussions" value="discussions"
                                href="https://github.com/Meeovi/alternatecms/discussions"></v-list-item>
                            <v-list-item title="Versions" value="versions"
                                href="https://github.com/Meeovi/alternatecms/releases">
                            </v-list-item>
                            <v-list-item title="Official Site" value="official site"
                                href="https://www.alternatecms.com">
                            </v-list-item>
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

<script setup>
  import {
    ref
  } from 'vue'

  const theme = ref('dark')

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };
</script>