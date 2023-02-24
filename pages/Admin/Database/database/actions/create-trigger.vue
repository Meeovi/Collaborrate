<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    <v-icon start icon="fas fa-plus"></v-icon>Create a new Trigger
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Add a New Trigger</span>
                        </v-card-title>
                    </v-toolbar>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Name of Trigger*" hint="The name is also stored as the actual database name of the trigger. Do not use spaces/whitespace" required></v-text-field>
                            </v-col>
                            <v-col cols="12"><h5>Conditions to fire trigger</h5></v-col>
                            <v-col cols="12">
                                <v-autocomplete
                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Table" hint="This is the table the trigger will watch for changes. You can only select 1 table for a trigger."></v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                    persistent-hint required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-autocomplete
                                    :items="['before', 'after']"
                                    label="Trigger Type" hint="This determines when your hook fires. Trigger fires before or after the operation is attempted."></v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <v-select :items="['Statement', 'Row']" label="Orientation" hint="Identifies whether the trigger fires once for each processed row or once for each statement"></v-select>
                            </v-col>
                            <v-col cols="12">
                                
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Cancel
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Confirm
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