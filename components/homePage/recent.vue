<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h5>Recent Projects</h5>
            </v-col>

            <a href="">
                <v-col cols="3">
                    <v-card class="mx-auto" width="400" prepend-icon="fas fa-list">
                        <template v-slot:title>
                            This is a title
                        </template>

                        <v-card-text>
                            This is content
                        </v-card-text>
                    </v-card>
                </v-col>
            </a>
        </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>