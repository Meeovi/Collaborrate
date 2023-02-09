<template>
    <div>
        <form enctype="multipart/form-data" @submit.prevent="addLocale()">
        <v-row>
            <v-col cols="12">
                <h5>Email Configuration</h5>
            </v-col>
            <v-col cols="6">
                <v-text-field label="Host*" hint="smtp.ethereal.email" required></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field type="number" label="Port*" hint="587" required></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-autocomplete :items="['True', 'False']" label="Secure"></v-autocomplete>
            </v-col>
            <v-col cols="6">
                <v-text-field label="Auth User" hint="Auth User"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field type="password" label="Auth Password" hint="Auth Password"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="From Email" hint="From Email Address"></v-text-field>
            </v-col>
        </v-row>
    </form>
    </div>
</template>

<script>
    export default {

    }
</script>
