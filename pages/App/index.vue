<template>
    <div class="appHomepage">
        <v-row>
            <v-toolbar density="compact" title="Online Members" color="transparent"></v-toolbar>
            <v-col cols="3">
                <v-avatar size="100"><img src="../../assets/images/john-smirk.png" alt=""></v-avatar>
            </v-col>

            <v-toolbar density="compact" title="Recently Shared Documents" color="transparent"></v-toolbar>
            <v-col cols="3">
                <a href="">
                    <v-card class="mx-auto" width="200">
                        <img class="align-end text-white" height="200" src="../../assets/images/alternatecms.png"
                            cover />
                        <v-card-title>Sample Document</v-card-title>

                        <v-card-subtitle class="pt-4">
                            Created: August 10, 2023
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-btn color="orange">
                                Share
                            </v-btn>

                            <v-btn color="orange" href="">
                                Access
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </a>
            </v-col>

            <v-toolbar density="compact" title="Tutorials and How To's" color="transparent"></v-toolbar>
            <v-col cols="3">
                <v-card title="Card title" subtitle="Subtitle" text="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                    <v-card-actions>
                        <v-btn href="">Click me</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
    useHead({
        title: 'Collaborrate'
    })
</script>