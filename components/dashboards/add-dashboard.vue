<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Manage Dashboard
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Dashboard Name</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Dashboard Name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea label="Dashboard Description" hint="What is this dashboard for?">
                                </v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-autocomplete label="Choose a datasource" :items="['Skiing']"></v-autocomplete>
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
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
        }),
    }
</script>