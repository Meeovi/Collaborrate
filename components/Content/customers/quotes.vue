<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Quotes</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addquote />
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
                        Quote Stage
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
                        Valid Until
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
import addquote from './Add/add-quote.vue'

export default {
    components: { addquote }
}
</script>

<script setup>
    useHead({
        title: 'Quotes'
    })
</script>