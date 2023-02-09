<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Segment
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addSegment()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Segment</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Segment Name*" v-model="name" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Assigned to Website*" type="url" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea label="Description*" required></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password*" type="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select :items="['Active', 'Inactive']" label="Status">
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-autocomplete
                                        :items="['Visitors and Registered Customers', 'Registered Customers', 'Visitors']"
                                        label="Apply To" v-model="apply_to"></v-autocomplete>
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
    import gql from "graphql-tag"
    import findManySegments from "../../../graphql/query/findManySegments.gql"

    const ADD_SEGMENTS = gql`
    mutation ($name:String!,$description:String,$website:String,$status:String,$apply_to:String){
    createOneSegments(data: {name: $name, description: $description, website: $website, status: $status, apply_to: $apply_to}) {
        website
        name
        description
        status
        apply_to
  }
}`;

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                website: " ",
                name: " ",
                description: " ",
                status: " ",
                apply_to: " ",

            }
        },
        methods: {
            /* eslint-disable camelcase */
            async addSegment() {
                const name = this.name;
                const status = this.status;
                const description = this.description;
                const website = this.website;
                const apply_to = this.apply_to;
                await this.$apollo.mutate({
                    mutation: ADD_SEGMENTS,
                    variables: {
                        name,
                        description,
                        website,
                        status,
                        apply_to,
                    },
                    update: (cache, {
                        data: {
                            insertSegments
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedSegment = insertSegments.returning;
                            console.log(insertedSegment)
                            cache.writeQuery({
                                query: findManySegments
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../customers/segments'
                    })
                }).catch(err => console.log(err));
                this.name = ' ';
                this.description = ' ';
                this.website = ' ';
                this.status = ' ';
                this.apply_to = ' ';
            },
        },
    }
</script>