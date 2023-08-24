<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Contracts</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addcontract />
                </v-col>
            </v-row>
        </v-toolbar>
        <v-table fixed-header class="customerTable">
            <thead>
                <tr>
                    <th class="text-left">
                        Contract Title
                    </th>
                    <th class="text-left">
                        Status
                    </th>
                    <th class="text-left">
                        Contract Manager
                    </th>
                    <th class="text-left">
                        Account
                    </th>
                    <th class="text-left">
                        Contract Value
                    </th>
                    <th class="text-left">
                        Start Date
                    </th>
                    <th class="text-left">
                        End Date
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
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
import addcontract from './Add/add-contract.vue'

export default {
    components: { addcontract }
}
</script>

<script setup>
    useHead({
        title: 'Contracts'
    })
</script>