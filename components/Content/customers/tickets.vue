<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Tickets</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addticket />
                </v-col>
            </v-row>
        </v-toolbar>
        <v-table fixed-header class="customerTable">
            <thead>
                <tr>
                    <th class="text-left">
                        ID
                    </th>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Short Description
                    </th>
                    <th class="text-left">
                        Priority
                    </th>
                    <th class="text-left">
                        State
                    </th>
                    <th class="text-left">
                        Assignment Group
                    </th>
                    <th class="text-left">
                        Assigned To
                    </th>
                    <th class="text-left">
                        Task Type
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Updated
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
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
import addticket from './Add/add-ticket.vue'

export default {
    components: { addticket }
}
</script>

<script setup>
    useHead({
        title: 'Tickets'
    })
</script>