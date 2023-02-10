<template>
    <div>
            <v-card class="contentright">
                <v-toolbar color="warning">
                    <v-toolbar-title>Inventory</v-toolbar-title>
                </v-toolbar>
                <div class="d-flex flex-row">
                    <v-tabs v-model="tab" direction="vertical" color="primary">
                        <v-tab value="option-1">
                            <v-icon start>
                                mdi-account
                            </v-icon>
                            Overview
                        </v-tab>
                        <v-tab value="option-2">
                            <v-icon start>
                                mdi-lock
                            </v-icon>
                            Sales
                        </v-tab>
                        <v-tab value="option-3">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Products
                        </v-tab>
                        <v-tab value="option-4">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Product Attributes
                        </v-tab>
                        <v-tab value="option-5">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Product Types
                        </v-tab>
                        <v-tab value="option-6">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Collections
                        </v-tab>
                        <v-tab value="option-7">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Discounts
                        </v-tab>
                        <v-tab value="option-8">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Transactions
                        </v-tab>
                        <v-tab value="option-9">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Vendors
                        </v-tab>
                        <v-tab value="option-10">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Warehouses
                        </v-tab>
                        <v-tab value="option-11">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Channels
                        </v-tab>
                        <v-tab value="option-12">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Quotes
                        </v-tab>
                        <v-tab value="option-13">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Payments
                        </v-tab>
                        <v-tab value="option-14">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Wishlists
                        </v-tab>
                    </v-tabs>
                    <v-window v-model="tab" class="metricsWindowRight">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <dashboard />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <sales />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <products />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <attributes />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-5">
                            <v-card flat>
                                <productTypes />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-6">
                            <v-card flat>
                                <collections />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-7">
                            <v-card flat>
                                <discounts />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-8">
                            <v-card flat>
                                <transactions />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-9">
                            <v-card flat>
                                <vendors />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-10">
                            <v-card flat>
                                <warehouses />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-11">
                            <v-card flat>
                                <channels />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-12">
                            <v-card flat>
                                <quotes />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-13">
                            <v-card flat>
                                <payments />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-14">
                            <v-card flat>
                                <wishlists />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </div>
            </v-card>
    </div>
</template>

<script>
    import dashboard from '~/components/content/inventory/dashboard'
    import sales from '~/components/content/inventory/sales'
    import products from '~/components/content/inventory/products'
    import attributes from '~/components/content/inventory/attributes'
    import productTypes from '~/components/content/inventory/product-types'
    import collections from '~/components/content/inventory/collections'
    import discounts from '~/components/content/inventory/discounts'
    import transactions from '~/components/content/inventory/transactions'
    import vendors from '~/components/content/inventory/vendors'
    import warehouses from '~/components/content/inventory/warehouses'
    import channels from '~/components/content/inventory/channels'
    import quotes from '~/components/content/inventory/quotes'
    import payments from '~/components/content/inventory/payments'
    import wishlists from '~/components/content/inventory/wishlists'

    export default {
        components: {
            dashboard,
            sales,
            products,
            attributes,
            productTypes,
            collections,
            discounts,
            transactions,
            vendors,
            warehouses,
            channels,
            quotes,
            payments,
            wishlists
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Inventory',
    })
</script>

<style scoped>

</style>