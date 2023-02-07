<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn prepend-icon="fas fa-pen-to-square" color="primary" v-bind="props">
                    Edit Team
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @submit.prevent="addTeam()">
                    <v-card-title>
                        <span class="text-h5">Edit new team</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Team Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea label="Description" hint="Add some detail about your team">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <v-select :items="['0-17']" label="Members*" required multiple></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-autocomplete
                                        :items="['Membership by request', 'Private', 'Public to organization']"
                                        label="Team Privacy Types"></v-autocomplete>
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
                            Edit Team
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
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Edit Team'
    })
</script>