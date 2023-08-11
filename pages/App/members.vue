<template>
    <div class="membersPage">
        <v-row>
            <v-toolbar density="compact" title="Members Directory" color="blue"></v-toolbar>
            <v-col cols="3">
                <a href="">
                    <v-card class="mx-auto" max-width="300">
                        <img class="align-end text-white" height="300" src="../../assets/images/john-smirk.png" cover />
                            <v-card-title>John Doe</v-card-title>

                        <v-card-subtitle class="pt-4">
                            Joined August 10, 2023
                        </v-card-subtitle>

                        <v-card-text>
                            <div>IT Developer Engineer</div>
                        </v-card-text>
                    </v-card>
                </a>
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
        title: 'Collaborrate - Members'
    })
</script>