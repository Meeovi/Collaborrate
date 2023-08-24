<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Lead
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addLead()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Lead</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Lead Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea label="Lead Description">
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
    import findManyLeads from "../../graphql/query/findManyLeads.gql";

    const ADD_TAGS = gql `
    mutation ($name:String!,$excerpt:String){
    createOneLeads(data: {name: $name, excerpt: $excerpt}) {
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
            async addLead() {
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
                            insertLeads
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedLead = insertLeads.returning;
                            console.log(insertedLead)
                            cache.writeQuery({
                                query: findManyLeads
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