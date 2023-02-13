<template>
    <div>
        <v-row>
            <v-col cols="4">
                <h6>Pick the project to load tests from</h6>
                <v-select label="this Project" :items="['California']"></v-select>
            </v-col>

            <v-col cols="4">
                <v-btn title="">Run tests now</v-btn>
            </v-col>

            <v-col cols="4">
                <v-btn title="">Run tests on CLI</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>

</script>