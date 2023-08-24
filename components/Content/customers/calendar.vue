<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Calendar</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addcalendar />
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
                        Calories
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import addcalendar from './Add/add-calendar.vue'

export default {
    components: { addcalendar }
}
</script>

<script setup>
    useHead({
        title: 'Calendar'
    })
</script>