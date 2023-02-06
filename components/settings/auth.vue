<template>
    <div>
        <form enctype="multipart/form-data" @submit.prevent="addLocale()">
        <v-row>
            <v-col cols="12">
                <h3>Auth Settings</h3>
            </v-col>
            <v-col cols="12">
                <h5>Configure authentication sessions for your users</h5>
            </v-col>
            <v-col cols="6">
                <h6>User Signups</h6>
            </v-col>
            <v-col cols="6">
                <v-switch v-model="allowusers" hide-details true-value="true" false-value="false" :label="`Allow new users to sign up: ${allowusers}`"></v-switch>
                <h6>If this is disabled, new users will not be able to sign up to your application.</h6>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="6">
                <h6>User Sessions</h6>
            </v-col>
            <v-col cols="6">
                <v-text-field type="number" label="Seconds" hint="How long tokens are valid for. Defaults to 3600 (1 hour), maximum 604,800 seconds (one week)."></v-text-field>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="6">
                <h6>Security and Protection</h6>
            </v-col>
            <v-col cols="6">
                <v-switch v-model="hcaptcha" hide-details true-value="true" false-value="false" :label="`Enable hCaptcha protection ${hcaptcha}`"></v-switch>
                <h6>Protect authentication endpoints from abuse.</h6>
            </v-col>
            <v-col cols="6"></v-col>
            <v-col cols="6">
                <v-switch v-model="reusedetection" hide-details true-value="true" false-value="false" :label="`Enable automatic reuse detection ${reusedetection}`"></v-switch>
                <h6>Prevent replay attacks from compromised refresh tokens.</h6>
            </v-col>
            <v-col cols="6"></v-col>
            <v-col cols="6">
                <h6>Reuse interval</h6>
                <v-text-field type="number" label="Seconds" hint="Time interval where the same refresh token can be used to request for an access token."></v-text-field>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="6">Multi Factor Authentication (MFA)</v-col>
            <v-col cols="6">
                <h6>Maximum number of enrolled factors</h6>
                <v-text-field type="number" label="10"></v-text-field>
            </v-col>
            <v-divider></v-divider>
            <v-col cols="12">
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text">
                        Cancel
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            allowusers: 'no',
            hcaptcha: 'no',
            reusedetection: 'no',
        }),
    }
</script>
