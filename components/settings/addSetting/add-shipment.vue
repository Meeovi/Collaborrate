<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Shipment
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Shipment</span>
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
    import findManyShipments from "../../../graphql/query/findManyShipments.gql";

    const ADD_SHIPMENTS = gql `
    mutation ($carrier_name:String!,$transit_time:String!,$image:String!,$tracking_url:String!,$speed_grade:String!,$product:String!){
    createOneShipments(data: {carrier_name: $carrier_name, transit_time: $transit_time, image: $image, tracking_url: $tracking_url, product: $product, speed_grade: $speed_grade}) {
        carrier_name
        transit_time
        image
        tracking_url
        speed_grade
        product
  }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                carrier_name: " ",
                transit_time: " ",
                image: " ",
                tracking_url: " ",
                speed_grade: " ",
                product: " ",

            }
        },
        /* eslint-disable camelcase */
        methods: {
            async addShipment() {
                const carrier_name = this.carrier_name;
                const transit_time = this.transit_time;
                const image = this.image;
                const tracking_url = this.tracking_url;
                const speed_grade = this.speed_grade;
                const product = this.product;
                await this.$apollo.mutate({
                    mutation: ADD_SHIPMENTS,
                    variables: {
                        carrier_name,
                        transit_time,
                        image,
                        tracking_url,
                        speed_grade,
                        product,
                    },
                    update: (cache, {
                        data: {
                            insertShipments
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedShipment = insertShipments.returning;
                            console.log(insertedShipment)
                            cache.writeQuery({
                                query: findManyShipments
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../../marketing/shipments'
                    })
                }).catch(err => console.log(err));
                this.carrier_name = ' ';
                this.transit_time = ' ';
                this.image = ' ';
                this.tracking_url = ' ';
                this.speed_grade = ' ';
                this.product = ' ';
            },
        },
    }
</script>