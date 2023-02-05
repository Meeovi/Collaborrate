<template>
    <v-row justify="center" class="mediaOptions">
        <v-card>
            <v-card-title>
                <span class="text-h6">Options for "Media"</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card class="mx-auto" max-width="400" v-bind="props">
                                <v-img class="align-end text-white" height="400"
                                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
                                    <v-card-title>Top 10 Australian beaches</v-card-title>
                                </v-img>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Name*" id="mediaName" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Description" id="mediaDescription"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-combobox v-model="keywords" :items="mkeywords" id="mediaKeywords" chips clearable label="Keywords" multiple>
                                        <template v-slot:selection="{ attrs, item, select, selected }">
                                            <v-chip v-bind="attrs" :model-value="selected" closable @click="select"
                                                @click:close="remove(item)">
                                                <strong>{{ item }}</strong>&nbsp;
                                                <span>(interest)</span>
                                            </v-chip>
                                        </template>
                                    </v-combobox>
                                </v-col>
                                <v-col cols="12">
                                    <v-combobox v-model="tags" :items="mtags" id="mediaTags" chips clearable label="Tags" multiple>
                                        <template v-slot:selection="{ attrs, item, select, selected }">
                                            <v-chip v-bind="attrs" :model-value="selected" closable @click="select"
                                                @click:close="remove(item)">
                                                <strong>{{ item }}</strong>&nbsp;
                                                <span>(interest)</span>
                                            </v-chip>
                                        </template>
                                    </v-combobox>
                                </v-col>
                                <v-col cols="12">
                                    <v-autocomplete id="mediaStatus" :items="['Public', 'Private']" label="Status">
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="datetime-local" label="Expiration Date*"
                                        id="mediaExpirationDate"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Copyright" id="mediaCopyright"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Dimensions" id="mediaDimensions"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Content Type" id="mediaContentType"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Versions" id="mediaVersions"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Watermark Name" id="watermarkName"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Watermark Description" id="watermarkDescription">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Watermark Media" id="watermarkMedia"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-combobox v-model="albums" :items="malbums" id="mediaAlbums" chips clearable label="Albums" multiple>
                                        <template v-slot:selection="{ attrs, item, select, selected }">
                                            <v-chip v-bind="attrs" :model-value="selected" closable @click="select"
                                                @click:close="remove(item)">
                                                <strong>{{ item }}</strong>&nbsp;
                                                <span>(interest)</span>
                                            </v-chip>
                                        </template>
                                    </v-combobox>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>

                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                keywords: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
                tags: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
                albums: ['Programming', 'Playing video games', 'Watching movies', 'Sleeping'],
                mkeywords: ['Streaming', 'Eating'],
                mtags: ['Streaming', 'Eating'],
                malbums: ['Streaming', 'Eating'],
            }
        },

        methods: {
            remove(item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
            },
        },
    }
</script>