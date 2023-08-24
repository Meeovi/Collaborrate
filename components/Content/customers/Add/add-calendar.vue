<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Add Date
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addDate()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Date</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Date Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea label="Date Description">
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
    import findManyDates from "../../graphql/query/findManyDates.gql";

    const ADD_TAGS = gql `
    mutation ($name:String!,$excerpt:String){
    createOneDates(data: {name: $name, excerpt: $excerpt}) {
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
            async addDate() {
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
                            insertDates
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedDate = insertDates.returning;
                            console.log(insertedDate)
                            cache.writeQuery({
                                query: findManyDates
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