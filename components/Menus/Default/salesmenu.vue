<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-tags" variant="text" v-bind="props">Sales</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Sales</span>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                        <v-list>
                            <v-list-item prepend-icon="fas fa-scale-balanced" title="Sales" value="Sales"
                                href="/Admin/Sales/Sales"></v-list-item>
                            <v-list-item prepend-icon="fas fa-scale-unbalanced-flip" title="Transactions"
                                value="Transactions" href="/Admin/Sales/Transactions"></v-list-item>
                            <v-list-item prepend-icon="fas fa-check-double" title="Channels" value="Channels"
                                href="/Admin/Sales/Channels"></v-list-item>
                            <v-list-item prepend-icon="fas fa-object-group" title="Collections" value="Collections"
                                href="/Admin/Sales/Collections"></v-list-item>
                            <v-list-item prepend-icon="fas fa-receipt" title="Invoices" value="Invoices"
                                href="/Admin/Sales/Invoices"></v-list-item>
                            <v-list-item prepend-icon="fas fa-file-contract" title="Quotes" value="Quotes"
                                href="/Admin/Sales/Quotes"></v-list-item>
                            <v-list-item prepend-icon="fas fa-credit-card" title="Payments" value="Payments"
                                href="/Admin/Sales/Payments"></v-list-item>
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