<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Knowledgebase</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addknowledgebase />
                </v-col>
            </v-row>
        </v-toolbar>
        <v-row class="customerTable">
            <v-col cols="3">
                <a href="">
                    <v-card class="mx-auto" max-width="400">
                        <img class="align-end text-white" height="200" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover />
                        <v-card-title>Article Name</v-card-title>

                        <v-card-subtitle class="pt-4">
                            Published: Number 10
                        </v-card-subtitle>

                        <v-card-text>
                            <div>Whitehaven Beach</div>

                            <div>Whitsunday Island, Whitsunday Islands</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn color="orange">
                                Share
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import addknowledgebase from './Add/add-knowledgebase.vue'

    export default {
        components: {
            addknowledgebase
        }
    }
</script>

<script setup>
    useHead({
        title: 'Knowledgebase'
    })
</script>