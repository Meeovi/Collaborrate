<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="insertAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Invite New User
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <h2>User Details</h2>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="First Name*" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="Last Name"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <div class="text-subtitle-1 text-medium-emphasis">Roles</div>
                            </v-col>
                            <v-col cols="12">
                                <v-autocomplete :items="['Super Admin', 'Editor', 'Author', 'User', 'Developer']" label="User's Roles*" required></v-autocomplete>
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
                        Invite User
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