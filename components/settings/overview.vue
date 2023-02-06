<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h4>Details</h4>
            </v-col>
            <v-col cols="6">
                <h5>Alternate Framework Version</h5>
                <p>0.0.4 (Alpha)</p>
            </v-col>
            <v-col cols="6">
                <h5>Current Plan</h5>
                <br>
                <v-col cols="6">
                    <v-text-field label="Community Plan" disabled></v-text-field>
                </v-col>
            </v-col>
            <v-col cols="6">
                <h5>Node Version</h5>
                <div>16.4.0</div>
            </v-col>
            <v-col cols="12">
                <h5>Customization</h5>
                <br>
                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Site Name*" hint="AlternateCMS" required></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field type="email" label="Site Email" hint="example@website.com"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field type="url" label="Site URL" hint="https://www.example.com"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-file-input multiple label="Upload Site Logo" class="logoUpload"></v-file-input>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
//import { Version } from '../../package.json'

    export default {
        
    }
</script>

<script setup>
    useHead({
        title: 'Settings',
    });
</script>