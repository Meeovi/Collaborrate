<template>
    <div>
        <v-toolbar class="databasebar" style="background-color: green; color: white;">
            <v-row>
                <v-col cols="6">
                    <h5>Edge Functions</h5>
                </v-col>
                <v-col cols="6"></v-col>
            </v-row>
        </v-toolbar>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="search" prepend-icon="fas fa-search" label="Search" single-line hide-details></v-text-field>
            </v-col>

            <v-col cols="6">

            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
            return {
                search: '',
            }
        },
}
</script>

<script setup>
    useHead({
        title: 'Edge Functions - Database'
    })
</script>