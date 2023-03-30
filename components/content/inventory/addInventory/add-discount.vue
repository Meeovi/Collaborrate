<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Discount
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar color="orange">
                        <v-btn icon @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Discount</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field v-model="name" label="Discount Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="discount" type="number" label="Discount*" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="expiration" type="datetime-local" label="Discount Expiration"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="type" :items="['Percent (%)', 'Gift Card', 'Gift Certificate', 'Coupon']" label="Discount Type*" required>
                                    </v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="excerpt" label="Discount Description"></v-textarea>
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
    // eslint-disable-next-line camelcase
    import findManyDiscounts from '../../../../graphql/query/findManyDiscounts.gql'

    const ADD_DISCOUNT = gql `
    mutation ($name:String!,$discount:String!$expiration:String!,$excerpt:String!,$type:String){
    createOneDiscounts(data: {name: $name, discount: $discount, expiration: $expiration, excerpt: $excerpt, type: $type}) {
        name
        discount
        expiration
        excerpt
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
                name: " ",
                discount: " ",
                expiration: " ",
                excerpt: " ",
                type: "",
            }
        },
        /* eslint-disable camelcase */

        methods: {
            async addDiscount() {
                const name = this.name;
                const discount = this.discount;
                const expiration = this.expiration;
                const excerpt = this.excerpt;
                const type = this.type;
                await this.$apollo.mutate({
                    mutation: ADD_DISCOUNT,
                    variables: {
                        name,
                        discount,
                        expiration,
                        excerpt,
                        type,
                    },
                    update: (cache, {
                        data: {
                            insertDiscounts
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedDiscount = insertDiscounts.returning;
                            console.log(insertedDiscount)
                            cache.writeQuery({
                                query: findManyDiscounts
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../../marketing/discounts'
                    })
                }).catch(err => console.log(err));
                this.name = ' ';
                this.discount = ' ';
                this.expiration = ' ';
                this.excerpt = ' ';
                this.type = '';
            },
        },
    }
</script>