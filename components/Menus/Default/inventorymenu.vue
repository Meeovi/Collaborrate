<template>
    <v-row justify="center">
        <v-dialog class="sidebarmenu" v-model="dialog" :scrim="false" transition="dialog-bottom-transition" scrollable
            fullscreen>
            <template v-slot:activator="{ props }">
                <v-btn stacked size="x-small" prepend-icon="fas fa-shopping-cart" variant="text" v-bind="props">Inventory</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Inventory</span>
                    <v-divider></v-divider>
                </v-card-title>
                <v-card-text>
                        <v-list>
                            <v-list-item prepend-icon="fas fa-shop" title="Dashboard" value="Dashboard"
                                href="/Admin/Commerce/">
                            </v-list-item>
                            
                            <v-list-item prepend-icon="fas fa-bag-shopping" title="Attributes" value="Attributes"
                                href="/Admin/Commerce/Attributes"></v-list-item>
                            
                            <v-list-item prepend-icon="fas fa-tags" title="Discounts" value="Discounts"
                                href="/Admin/Commerce/Discounts"></v-list-item>
                            
                            <v-list-item prepend-icon="fas fa-camera-retro" title="Product Types" value="Product Types"
                                href="/Admin/Commerce/product-types"></v-list-item>
                            <v-list-item prepend-icon="fas fa-basket-shopping" title="Products" value="Products"
                                href="/Admin/Commerce/Products"></v-list-item>
                            
                            <v-list-item prepend-icon="fas fa-people-group" title="Vendors" value="Vendors"
                                href="/Admin/Commerce/Vendors"></v-list-item>
                            <v-list-item prepend-icon="fas fa-warehouse" title="Warehouses" value="Warehouses"
                                href="/Admin/Commerce/Warehouses"></v-list-item>
                            <v-list-item prepend-icon="fas fa-hand-sparkles" title="Wishlists" value="Wishlists"
                                href="/Admin/Commerce/Wishlists"></v-list-item>
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