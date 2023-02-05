<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Zone
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Zone</span>
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
    import findManyZones from "../../../graphql/query/findManyZones.gql"
    import findManyCountries from "../../../graphql/query/findManyCountries.gql"

    const ADD_ZONES = gql `
    mutation ($code:String!,$name:String!$type:String!,$scope:String!,$country:String!){
    createOneZones(data: {code: $code, name: $name, type: $type, scope: $scope, country: $country}) {
        code
        name
        type
        scope
        country
  }
}`;

    export default {

        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                code: " ",
                name: " ",
                type: " ",
                scope: " ",
                country: " ",
            }
        },
        /* eslint-disable camelcase */

        methods: {
            async addZone() {
                const code = this.code;
                const name = this.name;
                const type = this.type;
                const scope = this.scope;
                const country = this.country;
                await this.$apollo.mutate({
                    mutation: ADD_ZONES,
                    variables: {
                        code,
                        name,
                        type,
                        scope,
                        country,
                    },
                    update: (cache, {
                        data: {
                            insertZones
                        }
                    }) => {
                        try {
                            const insertedZone = insertZones.returning;
                            console.log(insertedZone)
                            cache.writeQuery({
                                query: findManyZones
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../system/general-settings'
                    })
                }).catch(err => console.log(err));
                this.code = ' ';
                this.name = ' ';
                this.type = ' ';
                this.scope = ' ';
                this.country = ' ';
            },
        },
        apollo: {
            findManyCountries: {
                prefetch: true,
                query: findManyCountries
            }
        }
    }
</script>