<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Contacts</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addcontact />
                </v-col>
            </v-row>
        </v-toolbar>
        <v-table fixed-header class="customerTable">
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Email
                    </th>
                    <th class="text-left">
                        Phone Number
                    </th>
                    <th class="text-left">
                        Job Title & Company
                    </th>
                    <th class="text-left">
                        Labels
                    </th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" v-bind="props" icon="fas fa-ellipsis-vertical" title="More Menu" size="x-small"></v-btn>
                            </template>
                            <v-list>
                    <td>
                        <v-list-item>
                            <v-btn icon="fas fa-star" title="Favorite Contact" size="x-small" variant="text"></v-btn>
                        </v-list-item>
                    </td>
                    <td>
                        <v-list-item>
                            <v-btn icon="fas fa-pen-to-square" title="Edit Contact" size="x-small" variant="text"></v-btn>
                        </v-list-item>
                    </td>
                    <td>
                        <v-list-item>
                            <v-btn icon="fas fa-print" title="Print" size="x-small" variant="text"></v-btn>
                        </v-list-item>
                    </td>
                    <td>
                        <v-list-item>
                            <v-btn icon="fas fa-file-export" title="Export" size="x-small" variant="text"></v-btn>
                        </v-list-item>
                    </td>
                    <td>
                        <v-list-item>
                            <v-btn icon="fas fa-eye-slash" title="Hide from Contacts" size="x-small" variant="text"></v-btn>
                        </v-list-item>
                    </td>
                    <td>
                        <v-list-item>
                            <v-btn icon="fas fa-trash-can" title="Delete" size="x-small" variant="text"></v-btn>
                        </v-list-item>
                    </td>
                    </v-list>
                    </v-menu>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import addcontact from './Add/add-contact.vue'

export default {
    components: { addcontact }
}
</script>

<script setup>
    useHead({
        title: 'Contacts'
    })
</script>