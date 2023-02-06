<template>
    <v-row justify="center">
        <v-dialog v-model="dialog">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Invite
                </v-btn>
            </template>
            <v-card>
                <form method="post" @v-on:submit.prevent="addAccessToken()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Invite a member to this organization</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="6">
                                    <v-select label="Member Role" :items="['California']">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-textarea prepend-icon="fas fa-envelope" v-model="content" label="Email*" id="inviteEmail" hint="Email is required">
                                    </v-textarea>
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
                            Invite New Member
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import gql from "graphql-tag";
    import findManyCategories from "../../graphql/query/findManyCategories.gql"

    const ADD_CATEGORIES = gql `
    mutation createOneCategories($name: String!, $content: String, $image: String, $meta_title: String, $meta_keywords: String, $meta_description:String){
    createOneCategories(data: {name: $name, content: $content, image: $image, meta_description: $meta_description, meta_keywords: $meta_keywords, meta_title: $meta_title}) {
      name
        content
        image
        meta_description
        meta_keywords
        meta_title
}
    }`;

    export default {
        data() {
            return {
                dialog: false,
                name: ' ',
                content: ' ',
                image: ' ',
                meta_description: ' ',
                meta_keywords: ' ',
                meta_title: ' '
            }
        },
        methods: {
            addAccessToken() {
                const name = this.name;
                const content = this.content;
                const image = this.image;
                // eslint-disable-next-line camelcase
                const meta_title = this.meta_title;
                // eslint-disable-next-line camelcase
                const meta_keywords = this.meta_keywords;
                // eslint-disable-next-line camelcase
                const meta_description = this.meta_description;
                this.$apollo.mutate({
                    mutation: ADD_CATEGORIES,
                    variables: {
                        name,
                        content,
                        image,
                        meta_description,
                        meta_keywords,
                        meta_title,
                    },
                    update: (store, {
                        data: {
                            addAccessToken
                        }
                    }) => {
                        // Read data from store for this query
                        const data = store.readQuery({
                            query: findManyCategories,
                            variables: {
                                first: 5,
                                skip: 0,
                                orderBy: 'createdAt_DESC'
                            }
                        })
                        data.allCategories.push(addAccessToken)
                        store.writeQuery({
                            query: findManyCategories,
                            variables: {
                                first: 5,
                                skip: 0,
                                orderBy: 'createdAt_DESC'
                            },
                            data
                        })
                    }
                }).then((_data) => {
                    this.$router.push({
                        path: '../../content/categories'
                    })
                }).catch(error => console.error(error));
                this.name = ' ';
                this.content = ' ';
                this.image = ' ';
                this.meta_description = ' ';
                this.meta_keywords = ' ';
                this.meta_title = ' ';
            },
        },
    }
</script>