<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Surveys</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addsurvey />
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
                        Assigned To
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
    </div>
</template>

<script>
import addsurvey from './Add/add-survey.vue'

export default {
    components: { addsurvey }
}
</script>

<script setup>
    useHead({
        title: 'Surveys'
    })
</script>