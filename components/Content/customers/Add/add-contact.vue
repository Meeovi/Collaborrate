<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Add Contact
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addContact()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Contact</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Prefix"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="First Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Middle Name"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Last Name"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Suffix"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Phonetic First"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Phonetic Middle"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Phonetic Last"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Nickname"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="File as"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Company"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Job Title"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="email" label="Email"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="url" label="Website"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="phone" label="Phone Number"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-select label="Country / Region"
                                        :items="['United States', 'United Kingdom', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                                    </v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Street Address"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Street Address line 2"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="City"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select label="State"
                                        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field label="Zip/Postal Code"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="PO Box"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Label"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="datetime" label="Date of Birth"
                                        hint="mm/dd/yyyy (year optional)"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="datetime" label="Significant Date"
                                        hint="mm/dd/yyyy (year optional)"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Related Person"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Custom Field"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea label="Notes">
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
    import findManyContacts from "../../graphql/query/findManyContacts.gql";

    const ADD_TAGS = gql `
    mutation ($name:String!,$excerpt:String){
    createOneContacts(data: {name: $name, excerpt: $excerpt}) {
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
                async addContact() {
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
                                insertContacts
                            }
                        }) => {
                            // Read data from cache for this query
                            try {
                                const insertedContact = insertContacts.returning;
                                console.log(insertedContact)
                                cache.writeQuery({
                                    query: findManyContacts
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