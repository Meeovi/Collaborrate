<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Documents</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <adddocument />
                </v-col>
            </v-row>
        </v-toolbar>
        <v-table fixed-header class="customerTable">
            <thead>
                <tr>
                    <th class="text-left">
                        Document Name
                    </th>
                    <th class="text-left">
                        File Name
                    </th>
                    <th class="text-left">
                        Category
                    </th>
                    <th class="text-left">
                        Sub Category
                    </th>
                    <th class="text-left">
                        Revision Date
                    </th>
                    <th class="text-left">
                        Expiration Date
                    </th>
                    <th class="text-left">
                        User
                    </th>
                    <th class="text-left">
                        Date Created
                    </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import adddocument from './Add/add-document.vue'

export default {
    components: { adddocument }
}
</script>

<script setup>
    useHead({
        title: 'Documents'
    })
</script>