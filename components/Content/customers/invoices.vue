<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Invoices</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addinvoice />
                </v-col>
            </v-row>
        </v-toolbar>
        <v-table fixed-header class="customerTable">
            <thead>
                <tr>
                    <th class="text-left">
                        Num
                    </th>
                    <th class="text-left">
                        Title
                    </th>
                    <th class="text-left">
                        Status
                    </th>
                    <th class="text-left">
                        Contact
                    </th>
                    <th class="text-left">
                        Account
                    </th>
                    <th class="text-left">
                        Grand Total
                    </th>
                    <th class="text-left">
                        Due Date
                    </th>
                    <th class="text-left">
                        User
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
import addinvoice from './Add/add-invoice.vue'

export default {
    components: { addinvoice }
}
</script>

<script setup>
    useHead({
        title: 'Invoices'
    })
</script>