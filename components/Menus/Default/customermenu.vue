<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-users" variant="text" v-bind="props">Customers</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Customers</span>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                        <v-list>
                            <v-list-item prepend-icon="fas fa-users-gear" title="Accounts" value="Accounts"
                                href="/Admin/Customers/accounts"></v-list-item>
                            <v-list-item prepend-icon="fas fa-user-group" title="Contacts" value="Contacts"
                                href="/Admin/Customers/contacts"></v-list-item>
                            <v-list-item prepend-icon="fas fa-user-tie" title="Opportunities"
                                value="Opportunities" href="/Admin/Customers/opportunities"></v-list-item>
                            <v-list-item prepend-icon="fas fa-person" title="Leads" value="Leads"
                                href="/Admin/Customers/leads">
                            </v-list-item>
                            <v-list-item prepend-icon="fas fa-person-rays" title="Quotes" value="Quotes"
                                href="/Admin/Customers/quotes"></v-list-item>
                            <v-list-item prepend-icon="fas fa-calendar" title="Calendar" value="Calendar"
                                href="/Admin/Customers/calendar"></v-list-item>
                        </v-list>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {

        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            }
        },
    }
</script>