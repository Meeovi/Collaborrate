<template>
    <v-card>
        <form action="" method="post" @v-on:submit.prevent="addContent()">
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">Account Information</v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Username*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="First name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Middle name">
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Last name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Password*" type="password" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text">
                    Save
                </v-btn>
            </v-card-actions>
        </form>
    </v-card>
</template>

<script>
    export default {}
</script>

<script setup>
    useHead({
        title: 'Account Preferences',
    });
</script>