<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Review
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addReview()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Review</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="First Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Last Name"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea label="Content*" required></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Websites*" type="url" required></v-text-field>
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
    import findManyReviews from "../../../graphql/query/findManyReviews.gql"

    const ADD_REVIEWS = gql`
    mutation ($first_name:String!,$last_name:String!$websites:String!,$content:String!){
    createOneReviews(data: {first_name: $first_name, last_name: $last_name, websites: $websites, content: $content}) {
        first_name
            last_name
            websites
            content
  }
}`;

    export default {
        data() {
            return {
                first_name: " ",
                last_name: " ",
                websites: " ",
                content: " ",
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            }
        },
        methods: {
            async addReview() {
                const first_name = this.first_name;
                const last_name = this.last_name;
                const websites = this.websites;
                const content = this.content;
                await this.$apollo.mutate({
                    mutation: ADD_REVIEWS,
                    variables: {
                        first_name,
                        last_name,
                        websites,
                        content,
                    },
                    update: (cache, {
                        data: {
                            insertReviews
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedReview = insertReviews.returning;
                            console.log(insertedReview)
                            cache.writeQuery({
                                query: findManyReviews
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../customers/reviews'
                    })
                }).catch(err => console.log(err));
                this.first_name = ' ';
                this.last_name = ' ';
                this.websites = ' ';
                this.content = ' ';
            },
        },
    }
</script>