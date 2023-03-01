<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Warehouse
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar color="orange">
                        <v-btn icon @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Warehouse</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <h5>General Information</h5>
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="name" label="Warehouse Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="websites" type="url" label="Warehouse Website"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="description" label="Warehouse Description"></v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="category" :items="['0-17']" label="Category">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="isPublic" :items="['public', 'private']" label="Is Public?">
                                    </v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-select v-model="products" :items="['0-17']" label="Products">
                                    </v-select>
                                </v-col>

                                <v-col cols="12">
                                    <h5>Address Information</h5>
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="address" label="Address"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="city" :items="['0-17']" label="City">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="state" :items="['0-17']" label="State">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="postal" label="Postal"></v-text-field>
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

    import warehouses from "../../../../graphql/query/warehouses.gql";
    import findManyStates from '../../../../graphql/query/findManyStates.gql'
    import findManyCountries from '../../../../graphql/query/findManyCountries.gql'
    import findManyCities from '../../../../graphql/query/findManyCities.gql'
    import findManyCategories from '../../../../graphql/query/findManyCategories.gql'

    const ADD_WAREHOUSES = gql `
    mutation ($name: String!,$description: String!,$image: String!,$products: String!,$status: String!,$state: String!,$postal: String!,$country: String!,$isPublic: String!,$city: String!, $category: String!){
    createOneWarehouse(data: {name: $name,description: $description,image: $image,postal: $postal,country: $country,products: $products,status: $status,state: $state,city: $city,isPublic: $isPublic, category: $category}){
      country
        thumbnail
        name
        description
        category
        image
        websites
        products
        postal
        status
        state
        city
        isPublic
    }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                country: [],
                thumbnail: " ",
                name: " ",
                description: " ",
                category: "",
                image: " ",
                websites: " ",
                products: [],
                postal: " ",
                status: " ",
                state: " ",
                city: " ",
                isPublic: " "
            }
        },

        methods: {
            async addWarehouse() {
                const name = this.name;
                const description = this.description;
                const image = this.image;
                const postal = this.postal;
                const country = this.country;
                const products = this.products;
                const status = this.status;
                const state = this.state;
                const city = this.city;
                const isPublic = this.isPublic;
                const category = this.category;

                await this.$apollo.mutate({
                    mutation: ADD_WAREHOUSES,
                    variables: {
                        name,
                        description,
                        image,
                        postal,
                        country,
                        products,
                        status,
                        state,
                        city,
                        isPublic,
                        category
                    },
                    update: (cache, {
                        data: {
                            insertCategories,
                            insertCountries,
                            insertCities,
                            insertStates
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedCategory = insertCategories.returning;
                            const insertedCountry = insertCountries.returning;
                            const insertedCity = insertCities.returning;
                            const insertedState = insertStates.returning;
                            console.log(insertedCategory, insertedCountry, insertedCity, insertedState)
                            cache.writeQuery({
                                query: warehouses
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../inventory/warehouses'
                    })
                }).catch(err => console.log(err));
                this.name = ' ';
                this.description = ' ';
                this.image = ' ';
                this.postal = ' ';
                this.country = ' ';
                this.products = ' ';
                this.status = ' ';
                this.state = ' ';
                this.city = ' ';
                this.isPublic = ' ';
                this.category = ' ';
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
            findManyCategories: {
                prefetch: true,
                query: findManyCategories
            },
            findManyCities: {
                prefetch: true,
                query: findManyCities
            },
        }
    }
</script>