<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Product Type
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Product Type</span>
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
    /* eslint-disable camelcase */
    import gql from "graphql-tag";
    import
    findManyProduct_types
    from "../../../../graphql/query/findManyProduct_types.gql";

    const ADD_PRODUCT_TYPES = gql `
    mutation ($type_name:String!,$taxes:String!, $filter_options:String!, $id:String!, $isShippable:String!, $meta_description:String!, $meta_name:String!, $meta_url:String!, $position:String!, $prod_id:String!,){
    createOneProduct_attribute(data: {type_name: $type_name, taxes: $taxes, filter_options: $filter_options, id: $id, isShippable: $isShippable, meta_description: $meta_description, meta_name: $meta_name, meta_url: $meta_url, position: $position, prod_id: $prod_id,}) {
        type_name
        taxes
        filter_options
        id
        isShippable
        meta_description
        meta_name
        meta_url
        prod_id
  }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                type_name: " ",
                taxes: " ",
                filter_options: " ",
                id: " ",
                isShippable: " ",
                meta_description: " ",
                meta_name: " ",
                meta_url: " ",
                prod_id: " ",
            }
        },
        /* eslint-disable camelcase */
        methods: {
            async addProduct_Type() {
                const type_name = this.type_name;
                const taxes = this.taxes;
                const filter_options = this.filter_options;
                const id = this.id;
                const isShippable = this.isShippable;
                const meta_description = this.meta_description;
                const meta_name = this.meta_name;
                const meta_url = this.meta_url;
                const prod_id = this.prod_id;

                await this.$apollo.mutate({
                    mutation: ADD_PRODUCT_TYPES,
                    variables: {
                        type_name,
                        taxes,
                        filter_options,
                        id,
                        isShippable,
                        meta_description,
                        meta_name,
                        meta_url,
                        prod_id,
                    },
                    update: (cache, {
                        data: {
                            insertProduct_Types
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedProduct_Type = insertProduct_Types.returning;
                            console.log(insertedProduct_Type)
                            cache.writeQuery({
                                query: findManyProduct_types
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../inventory/product-types'
                    })
                }).catch(err => console.log(err));
                this.type_name = ' ';
                this.taxes = ' ';
                this.filter_options = ' ';
                this.id = ' ';
                this.isShippable = ' ';
                this.meta_description = ' ';
                this.meta_name = ' ';
                this.meta_url = ' ';
                this.prod_id = ' ';
            },
        },
    }
</script>