<template>
    <div>
        <form enctype="multipart/form-data" @submit.prevent="addLocale()">
        <v-row>
            <v-col cols="12">
                <h2>Media Manager</h2>
            </v-col>
            <v-col cols="12">
                <h4>Configure the settings for the Media Manager</h4>
            </v-col>
            <v-col cols="12">
                <h6>Asset Management</h6>
            </v-col>
            <v-col cols="6">
                <h6>Responsive Friendly Upload</h6>
                <v-switch v-model="responsivemodel" hide-details true-value="true" false-value="false" :label="` ${responsivemodel}`">
                </v-switch>
            </v-col>
            <v-col cols="6">
                <h6>Size Optimization</h6>
                <v-switch v-model="optimizationmodel" hide-details true-value="true" false-value="false" :label="` ${optimizationmodel}`">
                </v-switch>
            </v-col>
            <v-col cols="6">
                <h6>Auto Orientation</h6>
                <v-switch v-model="orientationmodel" hide-details true-value="true" false-value="false" :label="` ${orientationmodel}`">
                </v-switch>
            </v-col>
        </v-row>
    </form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            responsivemodel: 'no',
            optimizationmodel: 'no',
            orientationmodel: 'no',
        }),
    }
</script>
