<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Lists</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addlist />
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
import addlist from './Add/add-list.vue'

export default {
    components: { addlist }
}
</script>

<script setup>
    useHead({
        title: 'Lists'
    })
</script>