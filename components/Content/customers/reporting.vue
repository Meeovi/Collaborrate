<template>
    <div>
        <v-toolbar color="transparent">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Reporting</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addreporting />
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
                        Report Module
                    </th>
                    <th class="text-left">
                        Assigned To
                    </th>
                    <th class="text-left">
                        Date Created
                    </th>
                    <th class="text-left">
                        Date Modified
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
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
import addreporting from './Add/add-reporting.vue'

export default {
    components: { addreporting }
}
</script>

<script setup>
    useHead({
        title: 'Reporting'
    })
</script>