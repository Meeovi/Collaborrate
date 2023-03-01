<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Payment
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar color="orange">
                        <v-btn icon @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Payment</span>
                        </v-card-title>
                    </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field label="Name"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-select :items="['Active', 'Disable']" label="Status"></v-select>
                            </v-col>
                            <v-col cols="6">
                                <v-select :items="['United States', 'United Kingdom']" label="Country"></v-select>
                            </v-col>
                            <v-col cols="6">
                                <v-file-input label="Payment Icon"></v-file-input>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="Client ID">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="Client Secret" type="password">
                                </v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="Host URL" type="url"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="Redirect URL" type="url"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Redirect URL App"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Save
                    </v-btn>
                </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
        }),
    }
</script>