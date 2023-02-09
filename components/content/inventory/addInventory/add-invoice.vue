<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Invoice
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Invoice</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal first name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal middle name" hint="example of helper text only on focus">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                        persistent-hint required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Email*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password*" type="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required>
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-autocomplete
                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                        label="Interests" multiple></v-autocomplete>
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
    import gql from "graphql-tag";
    import findManyInvoices from "../../../../graphql/query/findManyInvoices.gql";
    // import  grand_total_base from "~/graphql/query/findManyGrand_total_base"
    // import  findManyCountries from "~/graphql/query/findManyCountries"
    // import  attributes from "~/graphql/query/findManyAttributes"

    const ADD_INVOICES = gql `
    mutation ($subtotal: String!,$customer_name: String!,$shipping_information: String!,$shipping_address: String!,$shipping_and_handling: String!,$payment_method: String!,$bill_to_name: String!,$grand_total_purchased: String!,$customer_group: String!,$email: String!,$billing_address: String!,$grand_total_base: String){
    createOneInvoices(data: {subtotal: $subtotal,customer_name: $customer_name,shipping_information: $shipping_information,shipping_and_handling: $shipping_and_handling,shipping_address: $shipping_address,payment_method: $payment_method,bill_to_name: $bill_to_name,customer_group: $customer_group,grand_total_purchased: $grand_total_purchased,grand_total_base: $grand_total_base,email: $email,billing_address: $billing_address}) {
        grand_total_base
            attributes
            subtotal
            customer_name
            shipping_information
            shipping_and_handling
            payment_method
            bill_to_name
            customer_group
            grand_total_purchased
            email
            billing_address
            shipping_address
  }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                grand_total_base: [],
                attributes: [],
                subtotal: " ",
                customer_name: " ",
                shipping_information: " ",
                shipping_and_handling: " ",
                payment_method: " ",
                bill_to_name: " ",
                customer_group: " ",
                grand_total_purchased: " ",
                email: " ",
                billing_address: " ",
                shipping_address: " "
            }
        },

        methods: {
            /* eslint-disable camelcase */
            async addInvoice() {
                const subtotal = this.subtotal;
                const customer_name = this.customer_name;
                const shipping_information = this.shipping_information;
                const shipping_and_handling = this.shipping_and_handling;
                const payment_method = this.payment_method;
                const bill_to_name = this.bill_to_name;
                const customer_group = this.customer_group;
                const grand_total_purchased = this.grand_total_purchased;
                const grand_total_base = this.grand_total_base;
                const email = this.email;
                const billing_address = this.billing_address;
                const shipping_address = this.shipping_address;

                await this.$apollo.mutate({
                    mutation: ADD_INVOICES,
                    variables: {
                        subtotal,
                        customer_name,
                        shipping_information,
                        shipping_and_handling,
                        payment_method,
                        bill_to_name,
                        customer_group,
                        grand_total_purchased,
                        grand_total_base,
                        email,
                        billing_address,
                        shipping_address,
                    },
                    update: (cache, {
                        data: {
                            insertCategories,
                            insertCountries
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedCategory = insertCategories.returning;
                            const insertedCountries = insertCountries.returning;
                            console.log(insertedCategory, insertedCountries)
                            cache.writeQuery({
                                query: findManyInvoices
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../../marketing/invoices'
                    })
                }).catch(err => console.log(err));
                this.subtotal = ' ';
                this.customer_name = ' ';
                this.shipping_information = ' ';
                this.shipping_and_handling = ' ';
                this.payment_method = ' ';
                this.bill_to_name = ' ';
                this.customer_group = ' ';
                this.grand_total_purchased = ' ';
                this.grand_total_base = ' ';
                this.email = ' ';
                this.billing_address = ' ';
                this.shipping_address = ' ';
            },
        },
        apollo: {
            /*
                                grand_total_base: {
                                prefetch: true,
                                query: grand_total_base
                                },
                             countries: {
                                prefetch: true,
                                query: countries
                                },
                                attributes: {
                                prefetch: true,
                                query: attributes
                                } */
        }
    }
</script>