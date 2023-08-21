<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Campaigns</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <v-menu :location="location" transition="slide-y-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn variant="text" v-bind="props" size="large" prepend-icon="fas fa-plus"
                                append-icon="fas fa-caret-down" title="New">New</v-btn>
                        </template>
                        <addaccount />
                    </v-menu>

                    
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
import addaccount from './Add/add-account.vue'

export default {
    components: { addaccount }
}
</script>

<script setup>
    useHead({
        title: 'Campaigns'
    })
</script>