<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Return
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Return</span>
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
    import findManyReturns from "../../../../graphql/query/findManyReturns.gql";
    import findManyProducts from "../../../../graphql/query/findManyProducts.gql";

    const ADD_RETURNS = gql `
    mutation ($name:String!,$validity:String!,$return_prefix:String!, $description:String!, $shippingNumber:String!, $shippingDescription:String!, $status:String!, $liquidationReason:String!, $media:String!, $weight:String!, $height:String!, $howShipped:String!, $type:String!, $location:String!, $shipTo:String!, $products:String!, $case_id:String!){
    createOneReturns(data: {name: $name, validity: $validity, return_prefix: $return_prefix, description: $description, shippingNumber: $shippingNumber, shippingDescription: $shippingDescription, status: $status, liquidationReason: $liquidationReason, media: $media, weight: $weight, height: $height, howShipped: $howShipped, type: $type, location: $location, shipTo: $shipTo, products: $products, case_id: $case_id}) {
        name
        validity
        return_prefix
        howShipped
        description
        shippingNumber
        shippingDescription
        status
        liquidationReason
        media
        height
        weight
        type
        products
        location
        shipTo
        case_id
  }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                name: " ",
                validity: " ",
                return_prefix: " ",
                howShipped: " ",
                description: " ",
                shippingNumber: " ",
                shippingDescription: " ",
                status: " ",
                liquidationReason: " ",
                media: " ",
                height: " ",
                weight: " ",
                type: " ",
                products: " ",
                location: " ",
                shipTo: " ",
                case_id: " ",
            }
        },
        /* eslint-disable camelcase */
        methods: {
            async addReturn() {
                const name = this.name;
                const validity = this.validity;
                const howShipped = this.howShipped;
                const description = this.description;
                const shippingNumber = this.shippingNumber;
                const return_prefix = this.return_prefix;
                const shippingDescription = this.shippingDescription;
                const status = this.status;
                const liquidationReason = this.liquidationReason;
                const weight = this.weight;
                const height = this.height;
                const media = this.media;
                const type = this.type;
                const location = this.location;
                const products = this.products;
                const shipTo = this.shipTo;
                const case_id = this.case_id;
                await this.$apollo.mutate({
                    mutation: ADD_RETURNS,
                    variables: {
                        name,
                        validity,
                        howShipped,
                        description,
                        shippingNumber,
                        shippingDescription,
                        return_prefix,
                        status,
                        liquidationReason,
                        media,
                        height,
                        weight,
                        type,
                        location,
                        products,
                        shipTo,
                        case_id,
                    },
                    update: (cache, {
                        data: {
                            insertReturns
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedReturn = insertReturns.returning;
                            console.log(insertedReturn)
                            cache.writeQuery({
                                query: findManyReturns
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../../marketing/returns'
                    })
                }).catch(err => console.log(err));
                this.name = ' ';
                this.validity = ' ';
                this.howShipped = ' ';
                this.description = ' ';
                this.return_prefix = ' ';
                this.shippingNumber = ' ';
                this.shippingDescription = ' ';
                this.status = ' ';
                this.liquidationReason = ' ';
                this.weight = ' ';
                this.height = ' ';
                this.media = ' ';
                this.type = ' ';
                this.shipTo = ' ';
                this.location = ' ';
                this.products = ' ';
                this.case_id = ' ';
            },
        },
        apollo: {
            findManyProducts: {
                prefetch: true,
                query: findManyProducts
            }
        }
    }
</script>