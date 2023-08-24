<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Accounts</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addaccount />
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
                        City
                    </th>
                    <th class="text-left">
                        Billing Country
                    </th>
                    <th class="text-left">
                        Phone
                    </th>
                    <th class="text-left">
                        User
                    </th>
                    <th class="text-left">
                        Email Address
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
                    <td>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" v-bind="props" icon="fas fa-ellipsis-vertical" title="More Menu" size="x-small"></v-btn>
                            </template>
                            <v-list>
                    <td>
                        <v-list-item>
                            <v-btn icon="fas fa-phone" title="Call Account" size="x-small" variant="text"></v-btn>
                        </v-list-item>
                    </td>
                    <td>
                        <v-list-item>
                            <v-btn icon="fas fa-calendar" title="Add Date to Calendar" size="x-small" variant="text"></v-btn>
                        </v-list-item>
                    </td>
                    <td>
                        <v-list-item>
                            <v-btn icon="fas fa-list" title="Add A Note" size="x-small" variant="text"></v-btn>
                        </v-list-item>
                    </td>
                    <td>
                        <v-list-item>
                            <v-btn icon="fas fa-envelope" title="Send Account an Email" size="x-small" variant="text"></v-btn>
                        </v-list-item>
                    </td>
                    </v-list>
                    </v-menu>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import addaccount from '../../../components/Content/customers/Add/add-account.vue'

    export default {
        components: {
            addaccount
        }
    }
</script>

<script setup>
    useHead({
        title: 'Accounts'
    })
</script>