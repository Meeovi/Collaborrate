<template>
    <v-row justify="space-around">
        <v-col cols="12">
            <v-title title="Sebastian's Team"></v-title>
            <v-text></v-text>
        </v-col>

        <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" size="x-large" alt="Member"></v-img>
        </v-avatar>
    </v-row>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: ''
    })
</script>