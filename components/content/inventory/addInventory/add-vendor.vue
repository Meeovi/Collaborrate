<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Vendor
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addVendor()">
                    <v-toolbar color="orange">
                        <v-btn icon @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Vendor</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field v-model="name" label="Vendor Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="website" type="url" label="Vendor Website">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="description" label="Vendor Description"></v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="categories" :items="['Shop Owner']" label="Categories">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="country" :items="['Shop Owner']" label="Country*">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="type" :items="['Shop Owner', 'Content Creator']" label="Type*" required>
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="physical_store" :items="['yes', 'false']" label="Physical Store*">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-autocomplete v-model="tags" :items="['Skiing']" label="Tags" multiple></v-autocomplete>
                                </v-col>
                                <v-col cols="6">
                                    <v-file-input label="Vendor Image">
                                    </v-file-input>
                                </v-col>
                                <v-col cols="12">
                                    <v-select v-model="products" :items="['Shop Owner']" label="Products*" required>
                                    </v-select>
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
    /* eslint-disable camelcase */
    import findManyVendors from "../../../../graphql/query/findManyVendors.gql";
    import findManyCategories from "../../../../graphql/query/findManyCategories.gql"
    import findManyCountries from "../../../../graphql/query/findManyCountries.gql"
    import findManyProducts from "../../../../graphql/query/findManyProducts.gql"

    const ADD_VENDORS = gql `
    mutation ($name: String!,$products: String!,$website: String!,$categories: String!,$country: String!,$description: String!,$image: String!,$tags: String!,$physical_store: String!,$type: String!){
    createOneVendors(data: {name: $name,products: $products,categories: $categories,website: $website,country: $country,description: $description,image: $image,tags: $tags,physical_store: $physical_store,type: $type}) {
        categories
        name
        products
        website
        country
        description
        image
        tags
        physical_store
        type
  }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                categories: "",
                name: " ",
                products: " ",
                website: " ",
                country: " ",
                description: " ",
                image: " ",
                tags: " ",
                physical_store: " ",
                type: " "
            }
        },

        methods: {
            async addVendor() {
                const name = this.name;
                const products = this.products;
                const categories = this.categories;
                const website = this.website;
                const country = this.country;
                const description = this.description;
                const image = this.image;
                const tags = this.tags;
                const physical_store = this.physical_store;
                const type = this.type;

                await this.$apollo.mutate({
                    mutation: ADD_VENDORS,
                    variables: {
                        name,
                        products,
                        categories,
                        website,
                        country,
                        description,
                        image,
                        tags,
                        physical_store,
                        type,
                    },
                    update: (cache, {
                        data: {
                            insertCategories,
                            insertCountries,
                            insertProducts
                        }
                    }) => {
                        try {
                            const insertedCategory = insertCategories.returning;
                            const insertedCountry = insertCountries.returning;
                            const insertedProduct = insertProducts.returning;
                            console.log(insertedCategory, insertedCountry, insertedProduct)
                            cache.writeQuery({
                                query: findManyVendors
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../inventory/vendors'
                    })
                }).catch(err => console.log(err));
                this.name = ' ';
                this.products = ' ';
                this.categories = ' ';
                this.website = ' ';
                this.country = ' ';
                this.description = ' ';
                this.image = ' ';
                this.tags = ' ';
                this.physical_store = ' ';
                this.type = ' ';
            },
        },
        apollo: {
            findManyCategories: {
                prefetch: true,
                query: findManyCategories
            },
            findManyCountries: {
                prefetch: true,
                query: findManyCountries
            },
            findManyProducts: {
                prefetch: true,
                query: findManyProducts
            }
        }
    }
</script>