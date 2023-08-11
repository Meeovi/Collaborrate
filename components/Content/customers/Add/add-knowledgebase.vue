<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Add Tag
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addTag()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Tag</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Tag Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea label="Tag Description">
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
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
/*    import gql from "graphql-tag";
    import findManyTags from "../../graphql/query/findManyTags.gql";

    const ADD_TAGS = gql `
    mutation ($name:String!,$excerpt:String){
    createOneTags(data: {name: $name, excerpt: $excerpt}) {
        name
        excerpt
  }
}`;
*/

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            //    name: " ",
            //    excerpt: " ",
            }
        },

    /*    methods: {
            async addTag() {
                const name = this.name;
                const excerpt = this.excerpt;
                await this.$apollo.mutate({
                    mutation: ADD_TAGS,
                    variables: {
                        name,
                        excerpt,
                    },
                    update: (cache, {
                        data: {
                            insertTags
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedTag = insertTags.returning;
                            console.log(insertedTag)
                            cache.writeQuery({
                                query: findManyTags
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../content/tags'
                    })
                }).catch(err => console.log(err));
                this.name = ' ';
                this.excerpt = ' ';
            },
        }, */
    }
</script>