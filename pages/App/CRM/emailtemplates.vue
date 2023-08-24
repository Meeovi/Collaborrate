<template>
    <div>
        <v-toolbar color="transparent" class="topToolbar">
            <v-row>
                <v-col cols="9">
                    <v-toolbar-title class="toolbarTitle">Email - Templates</v-toolbar-title>
                </v-col>
                <v-col cols="1">
                    <addemailtemplates />
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
                        Type
                    </th>
                    <th class="text-left">
                        Description
                    </th>
                    <th class="text-left">
                        User
                    </th>
                    <th class="text-left">
                        Date Modified
                    </th>
                    <th class="text-left">
                        Date Created
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
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import addemailtemplates from '../../../components/Content/customers/Add/add-emailtemplate.vue'

    export default {
        components: {
            addemailtemplates
        }
    }
</script>

<script setup>
    useHead({
        title: 'Email - Templates'
    })
</script>