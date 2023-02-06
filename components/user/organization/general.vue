<template>
    <v-card>
        <form action="" method="post" @v-on:submit.prevent="addContent()">
            <v-toolbar dark color="primary">
                <v-btn icon dark>
                    <v-icon icon="fas fa-circle-xmark"></v-icon>
                </v-btn>
                <v-card-title>
                    <span class="text-h6">General</span>
                </v-card-title>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="Organization Name*" title="Organization Name" required></v-text-field>
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
                <v-row style="background-color: red; color: indianred; border: 1px solid indianred;">
                    <v-col cols="12">
                        <h2>DANGER ZONE</h2>
                    </v-col>
                    <v-col cols="12">
                        <v-icon icon="fas fa-exclamation"></v-icon><p>Deleting this organization will also remove its projects</p>
                    </v-col>
                    <v-col cols="12">
                        <p>Make sure you have made a backup if you want to keep your data</p>
                    </v-col>
                </v-row>
                <v-btn color="blue-darken-1" variant="text">
                    Delete Organization
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
        title: 'General Organization Setting',
    });
</script>