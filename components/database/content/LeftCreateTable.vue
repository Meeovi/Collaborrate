<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-file-pen"></v-icon>Create Table
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addDatabaseTable()">
                    <v-toolbar dark style="background-color: lightseagreen;color: white;">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new content</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field v-model="contentName" label="Name*" id="contentName" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="contentDescription" label="Description" id="contentDescription"
                                        hint="Optional"></v-text-field>
                                </v-col>
                                <v-divider></v-divider>
                                <v-col cols="6">
                                    <div class="text-subtitle-1 text-medium-emphasis">Broadcast changes to eligible
                                        users?</div>
                                    <v-autocomplete v-model="contentBroadcast" id="contentBroadcast"
                                        :items="['Broadcast', 'Disable']" label="Notifications"></v-autocomplete>
                                </v-col>
                                <v-col cols="6">
                                    <div class="text-subtitle-1 text-medium-emphasis">Who can see this content?</div>
                                    <v-autocomplete v-model="contentVisible" id="contentVisible"
                                        :items="['Public', 'Private']" label="Visibility"></v-autocomplete>
                                </v-col>
                                <v-divider></v-divider>
                                <br>
                                <v-col cols="3">
                                    <v-text-field v-model="contentColumnName" id="columnName" label="Content Name"
                                        hint="Recommended to use lowercase names and seperate words with an underscore. i.e column_name"></v-text-field>
                                </v-col>
                                <v-col cols="3">
                                    <v-select v-model="contentColumnType" id="columnType"
                                        :items="['Text', 'Email', 'Rich Text', 'Password', 'Number', 'Date', 'Enumeration', 'Media', 'Boolean', 'JSON', 'Relation', 'UID']"
                                        label="Type*" required></v-select>
                                </v-col>
                                <v-col cols="2">
                                    <v-autocomplete v-model="contentColumnDefault" id="columnDefaultName"
                                        :items="['Set as NULL', 'Set as empty string']" label="Default Value">
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="2"><v-checkbox label="Primary"></v-checkbox></v-col>
                                <v-col cols="2">
                                    <v-autocomplete v-model="contentColumnDefault" id="columnDefaultName"
                                        :items="['Is Nullable', 'Is Unique', 'Define as Array']" label="Extra Options" prepend-icon="fas fa-cog">
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="9">
                                    <v-btn variant="text" prepend-icon="fas fa-plus">Add Column</v-btn>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn variant="text" size="x-small" prepend-icon="fas fa-arrow-up-right-from-square" href="https://www.alternatecms.com/docs/data-types">Learn more about data types</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Create
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                form: {
                    contentName: "",
                    contentDescription: "",
                    contentBroadcast: "",
                    contentVisible: "",
                    contentColumnName: "",
                    contentColumnType: "",
                    contentColumnDefault: "",
                }

            }
        },
        methods: {
            addDatabaseTable: async function () {
                const formData = new FormData();

                for (let [key, value] of Object.entries(this.form)) {
                    formData.append(key, value);
                }

                await axios
                    .post("{Formeezy-Endpoint}", formData)
                    .then(({
                        data
                    }) => {
                        const {
                            redirect
                        } = data;
                        window.location.href = redirect;
                    })
                    .catch((e) => {
                        window.location.href = e.response.data.redirect;
                    });
            }
        }
    }
</script>

<script setup>
    const { data: types } = await useFetch('/api/dataType.json')
</script>