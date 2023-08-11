<template>
    <v-card class="channelwindow">
        <v-toolbar color="green" border>
            <v-btn variant="text" icon="fas fa-hashtag"></v-btn>

            <v-row>
                <v-col cols="9">
                    <v-toolbar-title>
                        <v-dialog v-model="dialog" fullscreen scrollable min-width="auto" class="channelOptions">
                            <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" append-icon="fas fa-caret-down">
                                    List Name
                                </v-btn>
                            </template>
                            <v-card>
                                <v-tabs v-model="tab" bg-color="green">
                                    <v-tab :value="1">About</v-tab>
                                    <v-tab :value="2">Members</v-tab>
                                    <v-tab :value="3">Integrations</v-tab>
                                    <v-tab :value="4">Settings</v-tab>
                                    <v-tab :value="5">Media</v-tab>
                                </v-tabs>

                                <v-card-text>
                                    <v-window v-model="tab">
                                        <v-window-item :value="1">
                                            <v-text-field label="Topic" variant="outlined"></v-text-field>
                                            <v-divider></v-divider>

                                            <v-text-field label="Description" variant="outlined"></v-text-field>
                                            <v-divider></v-divider>

                                            <v-text-field label="Managed By" disabled variant="outlined"></v-text-field>
                                            <v-divider></v-divider>

                                            <v-text-field label="Created" disabled variant="outlined"></v-text-field>
                                            <v-divider></v-divider>

                                            <v-btn title="Leave List">Leave List</v-btn>
                                            <v-divider></v-divider>
                                        </v-window-item>

                                        <v-window-item :value="2">
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field prepend-icon="fas fa-search" label="Find members"
                                                        variant="outlined"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-btn prepend-icon="fas fa-user-plus">Add People</v-btn>
                                                </v-col>
                                                <v-col cols="9">
                                                    <v-list lines="two">
                                                        <v-list-item title="Username" subtitle="01/01/2100"
                                                            prepend-avatar="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                                                            Sample Member</v-list-item>
                                                    </v-list>
                                                </v-col>
                                                <v-col cols="3">
                                                    <v-btn icon="fas fa-trash-can" class="memberDeleteBtn" color="green"
                                                        title="Remove User from List">
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-window-item>

                                        <v-window-item :value="3">
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field prepend-icon="fas fa-search" label="Find Apps"
                                                        variant="outlined"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-btn prepend-icon="fas fa-user-plus">Add App</v-btn>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-list lines="two">
                                                        <v-list-item title="App Name" subtitle="Meeovi"
                                                            prepend-avatar="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                                                            Sample App</v-list-item>
                                                    </v-list>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-btn prepend-icon="fas fa-plus" class="memberAppBtn">Add to
                                                        List</v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-window-item>

                                        <v-window-item :value="4">
                                            Three
                                        </v-window-item>

                                        <v-window-item :value="5">
                                            <v-row>
                                                <v-col cols="12">
                                                    <v-text-field prepend-icon="fas fa-search" label="Find Media"
                                                        variant="outlined"></v-text-field>
                                                </v-col>
                                                <v-col cols="3" v-for="n in 12" :key="n">
                                                    <v-avatar size="120" rounded="0"><img
                                                            src="../../../assets/images/6.jpg" alt=""></v-avatar>
                                                </v-col>
                                            </v-row>
                                        </v-window-item>
                                    </v-window>
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
                        </v-dialog>
                    </v-toolbar-title>
                </v-col>


                <v-col cols="3">
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn variant="text" v-bind="props" append-icon="fas fa-caret-down">
                                Add 
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-table fixed-header class="tableList">
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Calories
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>

<script>
    //import editor from '../../Editors/editor.vue'

    export default {
        components: {
            //editor
        },
        data() {
            return {
                dialog: false,
                tab: null,
            }
        },
    }
</script>

<script setup>

</script>