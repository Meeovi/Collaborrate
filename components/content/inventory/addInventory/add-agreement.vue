<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Agreement
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Agreement</span>
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
    import findManyAgreements from "~/graphql/query/findManyAgreements";
    import Editor from '~/components/Editors/editor.vue'

    const ADD_AGREEMENTS = gql `
    mutation ($name:String!,$excerpt:String!,$type:String!,$content:String!,$image:String!,$user_id: String!, $reference_id: String!, $shop_id: String!){
    createOneAgreements(data: {reference_id: $reference_id, user_id: $user_id, shop_id: $shop_id, content: $content, excerpt: $excerpt, image: $image, type: $type, name: $name}) {
      name
      excerpt
      type
      content
      image
      reference_id
      user_id
      shop_id
  }
}`;

    export default {
        components: {
            Editor
        },
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                type: [],
                name: " ",
                excerpt: " ",
                content: " ",
                image: " ",
                user_id: "",
                reference_id: "",
                shop_id: "",
            }
        },
        methods: {
            async addAgreement() {
                const name = this.name;
                const content = this.content;
                const excerpt = this.excerpt;
                const type = this.type;
                const image = this.image;
                const user_id = this.user_id;
                const reference_id = this.reference_id;
                const shop_id = this.shop_id;
                await this.$apollo.mutate({
                    mutation: ADD_AGREEMENTS,
                    variables: {
                        name,
                        excerpt,
                        type,
                        content,
                        image,
                        reference_id,
                        user_id,
                        shop_id,
                    },
                    update: (cache, {
                        data: {
                            insertAgreements
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedAgreement = insertAgreements.returning;
                            console.log(insertedAgreement)
                            cache.writeQuery({
                                query: findManyAgreements
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../marketing/agreements'
                    })
                }).catch(err => console.log(err));
                this.name = ' ';
                this.excerpt = ' ';
                this.type = ' ';
                this.content = ' ';
                this.image = ' ';
                this.reference_id = '';
                this.user_id = '';
                this.shop_id = '';
            },
            apollo: {
                findManyAgreements: {
                    prefetch: true,
                    query: findManyAgreements
                }
            },
        }
    }
</script>