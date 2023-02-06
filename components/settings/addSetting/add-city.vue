<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create City
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new City</span>
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
    import findManyCities from "../../../graphql/query/findManyCities.gql";
    import findManyStates from '../../../graphql/query/findManyStates.gql'
    import findManyCountries from '../../../graphql/query/findManyCountries.gql'

    const ADD_CITIES = gql `
    mutation ($name:String!,$state:String,$country:String,$postalCode:String,$description:String){
    createOneCities(data: {name: $name, state: $state, country: $country, postalCode: $postalCode, description: $description}) {
        name
        state
        country
        postalCode
        description
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
                state: " ",
                country: " ",
                postalCode: " ",
                description: " ",
            }
        },

        methods: {
            async addCity() {
                const name = this.name;
                const state = this.state;
                const country = this.country;
                const postalCode = this.postalCode;
                const description = this.description;
                await this.$apollo.mutate({
                    mutation: ADD_CITIES,
                    variables: {
                        name,
                        state,
                        country,
                        postalCode,
                        description,
                    },
                    update: (cache, {
                        data: {
                            insertCities
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedCity = insertCities.returning;
                            console.log(insertedCity)
                            cache.writeQuery({
                                query: findManyCities
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../inventory/cities'
                    })
                }).catch(err => console.log(err));
                this.name = ' ';
                this.state = ' ';
                this.country = ' ';
                this.postalCode = ' ';
                this.description = ' ';
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
        },
    }
</script>