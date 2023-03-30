<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Sale
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark style="background-color: yellowgreen; color: white;">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Sale</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12"><h5>Items Ordered</h5></v-col>
                                <v-divider></v-divider>
                                <v-col cols="12">
                                    <v-autocomplete v-model="products" :items="['Skiing']"
                                        label="Add item to order" multiple></v-autocomplete>
                                </v-col>
                                <v-col cols="12"><h5>Account Information</h5></v-col>
                                <v-divider></v-divider>
                                <v-col cols="6">
                                    <v-select v-model="segment" :items="['Draft']" label="Segment*" required>
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="email" label="Email*" required></v-text-field>
                                </v-col>
                                <v-col cols="12"><h5>Customer Information</h5></v-col>
                                <v-divider></v-divider>
                                <v-col cols="6">
                                    <v-text-field v-model="bill_to_name" label="Bill to Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="ship_to_name" label="Ship to Name"></v-text-field>
                                </v-col>
                                <v-col cols="12"><h5>Address Information</h5></v-col>
                                <v-divider></v-divider>
                                <v-col cols="6">
                                    <v-text-field v-model="billing_street" label="Billing City"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="billing_city" :items="['0-17']" label="Billing City"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="billing_state" :items="['0-17']" label="Billing State">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="billing_postal" label="Billing Postal"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="billing_country" :items="['0-17']" label="Billing Country">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="shipping_street" label="Shipping City"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="shipping_city" :items="['0-17']" label="Shipping City">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="shipping_state" :items="['0-17']" label="Shipping State">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="shipping_postal" label="Shipping Postal"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="shipping_country" :items="['0-17']" label="Shipping Country">
                                    </v-select>
                                </v-col>
                                <v-col cols="12"><h5>Order Information</h5></v-col>
                                <v-divider></v-divider>
                                <v-col cols="6">
                                    <v-text-field v-model="braintree_transaction_source" label="Braintree Transaction Source"
                                        required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="transactions" :items="['0-17']" label="Transactions"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="quotes" :items="['0-17']" label="Quotes"></v-select>
                                </v-col>
                                
                                <v-col cols="6">
                                    <v-text-field v-model="shipping_tax" label="Shipping Tax"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="allocated_sources" :items="['0-17']" label="Allocated Sources"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="customers" :items="['0-17']" label="Customers"></v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field type="number" v-model="grand_total_base" label="Grand Total Base">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field type="number" v-model="grand_total_purchased" label="Grand Total Purchased"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="purchase_date" type="datetime" label="Purchase Date"
                                        hint="What is the purchase date?">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="status" :items="['Draft']" label="Status" required>
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="purchase_point" label="Purchase Point"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field type="number" v-model="line_item_subtotal" label="Line Item Subtotal">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="payment_terms" label="Payment Terms"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="tax" label="Tax"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field type="number" v-model="subtotal" label="Subtotal"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
        }),
    }
</script>