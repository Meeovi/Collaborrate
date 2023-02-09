<template>
    <div>
        <form enctype="multipart/form-data" @submit.prevent="addLocale()">
        <v-row>
            <v-col cols="12">
                <h3>Storage Settings</h3>
            </v-col>
            <v-col cols="12">
                <h5>Configure your project's storage settings</h5>
            </v-col>
            <v-col cols="12">
                <h6>Upload file size limit</h6>
            </v-col>
            <v-col cols="6">
                <v-text-field type="number" label="Size Limit" hint="Equivalent to 52,428,800 bytes. Maximum size in bytes of a file that can be uploaded is 5 GB (5,368,709,120 bytes)."></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="MB" disabled></v-text-field>
            </v-col>
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
    
}
</script>

