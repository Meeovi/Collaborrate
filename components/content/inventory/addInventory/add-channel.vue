<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Channel
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark style="background-color: yellowgreen; color: white;">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Channel</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field v-model="name" label="Channel Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="code" label="Channel Code"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="client_id" label="Client ID"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="client_secret" label="Client Secret"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="client_zone" label="Client Zone"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="currency" label="Currency">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-autocomplete v-model="include_tax" :items="['Yes', 'No']" label="Include Tax"></v-autocomplete>
                                </v-col>
                                <v-col cols="6">
                                    <v-autocomplete v-model="default_lang" :items="['en', 'es']" label="Default Language"></v-autocomplete>
                                </v-col>
                                <v-col cols="6">
                                    <v-autocomplete v-model="default_shipping" :items="['en']" label="Default Shipping"></v-autocomplete>
                                </v-col>
                                <v-col cols="6">
                                    <v-autocomplete v-model="default_zone" :items="['en']" label="Default Zone"></v-autocomplete>
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
    import findManyChannels from "../../../../graphql/query/findManyChannels.gql";
    import findManyZones from "../../../../graphql/query/findManyZones.gql";
    import findManyCurrencies from "../../../../graphql/query/findManyCurrencies.gql";

    const ADD_CHANNELS = gql `
    mutation ($client_id:String!,$client_secret:String,$default_shipping:String,$default_zone:String,$code:String!,$include_tax:String!,$name:String!,$currency:String!,$default_lang:String!){
    createOneChannels(data: {client_id: $client_id, client_secret: $client_secret, default_shipping: $default_shipping, default_zone: $default_zone, default_lang: $default_lang, code: $code, include_tax: $include_tax, name: $name, currency: $currency}) {
      default_shipping
        client_id
        client_secret
        default_zone
        code
        default_lang
        name
        currency
        include_tax
  }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                default_shipping: [],
                client_id: " ",
                client_secret: " ",
                default_zone: " ",
                code: " ",
                default_lang: " ",
                name: " ",
                currency: " ",
                include_tax: " ",
            }
        },
        methods: {
            async addChannel() {
                const client_id = this.client_id;
                const default_zone = this.default_zone;
                const client_secret = this.client_secret;
                const default_shipping = this.default_shipping;
                const currency = this.currency;
                const default_lang = this.default_lang;
                const include_tax = this.include_tax;
                const name = this.name;
                const code = this.code;
                await this.$apollo.mutate({
                    mutation: ADD_CHANNELS,
                    variables: {
                        default_zone,
                        default_shipping,
                        default_lang,
                        currency,
                        code,
                        client_secret,
                        client_id,
                        include_tax,
                        name,
                    },
                    update: (cache, {
                        data: {
                            insertChannels
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedChannel = insertChannels.returning;
                            console.log(insertedChannel)
                            cache.writeQuery({
                                query: findManyChannels
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
                this.client_id = ' ';
                this.default_zone = ' ';
                this.client_secret = ' ';
                this.default_shipping = ' ';
                this.currency = ' ';
                this.default_lang = ' ';
                this.include_tax = ' ';
                this.name = ' ';
                this.code = ' ';
            },
        },
        apollo: {
            findManyZones: {
                prefetch: true,
                query: findManyZones
            },
            findManyCurrencies: {
                prefetch: true,
                query: findManyCurrencies
            },
        },
    }
</script>