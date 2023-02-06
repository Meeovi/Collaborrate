<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Tax
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Tax</span>
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
    import findManyTaxes from "../../../graphql/query/findManyTaxes.gql";
    import findManyCountries from "../../../graphql/query/findManyCountries.gql";
    import findManyStates from "../../../graphql/query/findManyStates.gql";

    const ADD_TAX_RATE = gql `
    mutation ($country:String! $default_store_view:String! $zip_post_is_range:Boolean! $tax_identifier:String! $state:String! $rate_percent:String! $postcode:String!, $taxDefault:String $taxCategory:String){
    createOnetax_rate(data: {country: $country, default_store_view: $default_store_view, zip_post_is_range: $zip_post_is_range, tax_identifier: $tax_identifier, state: $state, rate_percent: $rate_percent, postcode: $postcode, taxDefault: $taxDefault, taxCategory: $taxCategory}) {
    country
        default_store_view
        postcode
        rate_percent
        state
        tax_identifier
        zip_post_is_range
        taxRuleName
        taxDefault
        taxCategory
  }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                country: " ",
                default_store_view: " ",
                postcode: " ",
                rate_percent: " ",
                state: " ",
                tax_identifier: " ",
                zip_post_is_range: " ",
                taxDefault: "",
                taxCategory: "",
            }
        },
        /* eslint-disable camelcase */
        methods: {
            async addTaxRate() {
                const country = this.country;
                const default_store_view = this.default_store_view;
                const postcode = this.postcode;
                const rate_percent = this.rate_percent;
                const state = this.state;
                const tax_identifier = this.tax_identifier;
                const zip_post_is_range = this.zip_post_is_range;
                const taxDefault = this.taxDefault;
                const taxCategory = this.taxCategory;
                await this.$apollo.mutate({
                    mutation: ADD_TAX_RATE,
                    variables: {
                        country,
                        default_store_view,
                        postcode,
                        rate_percent,
                        state,
                        tax_identifier,
                        zip_post_is_range,
                        taxDefault,
                        taxCategory,
                    },
                    update: (cache, {
                        data: {
                            insertTaxRates
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedTaxRate = insertTaxRates.returning;
                            console.log(insertedTaxRate)
                            cache.writeQuery({
                                query: findManyTaxes
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../inventory/tax-rate'
                    })
                }).catch(err => console.log(err));
                this.country = " ";
                this.default_store_view = " ";
                this.postcode = " ";
                this.rate_percent = " ";
                this.state = " ";
                this.tax_identifier = " ";
                this.zip_post_is_range = " ";
                this.taxDefault = " ";
                this.taxCategory = " ";
            },
        },
        apollo: {
            findManyStates: {
                prefetch: true,
                query: findManyStates
            },
            findManyCountries: {
                prefetch: true,
                query: findManyCountries
            },
        }
    }
</script>