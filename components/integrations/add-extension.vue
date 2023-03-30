<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" scrollable>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    Submit a Plugin
                </v-btn>
            </template>
            <v-card>
                <v-toolbar dark color="error">
                    <v-btn icon="fas fa-circle-xmark" dark @click="dialog = false"></v-btn>
                    <v-toolbar-title>Submit my plugin</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-card-title>
                        <span class="text-h6">Make sure to review our guidelines before submitting your plugin. <a
                                href="https://www.alternatecms/market-guidelines" target="_blank">Read the
                                Guidelines</a></span>
                    </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" justify="center">
                                    <h1>Get Started</h1>
                                </v-col>
                                <v-col cols="12">
                                    <v-autocomplete :items="['Plugin', 'Theme', 'Feature Pack']" label="Plugin Type*"
                                        required></v-autocomplete>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Plugin Name*" id="pluginName" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="url" label="npm package URL*" id="pluginNpm" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="url" label="Repository URL*" id="pluginRepository" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea name="input-7-1" variant="filled" auto-grow label="Description*"
                                        id="pluginDescription" required></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <v-file-input multiple label="Logo" class="pluginLogo"></v-file-input>
                                </v-col>
                                <v-col cols="12">
                                    <v-file-input prepend-icon="fas fa-camera" multiple label="Screenshots" class="pluginScreenshots"></v-file-input>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Your Name*" id="authorName" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="email" label="Your Email*" id="authorEmail"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-checkbox label="I agree with Alternate Framework Terms and Conditions"
                                        id="termsConditions"></v-checkbox>
                                    <a href="https://www.alternatecms.com/terms" target="_blank">Terms and
                                        Conditions</a>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small><br>
                        <small>Never submit passwords through this form.</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Submit your plugin
                        </v-btn>
                    </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
            }
        },
    }
</script>