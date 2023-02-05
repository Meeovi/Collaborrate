<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-key"></v-icon>Create API Token
                </v-btn>
            </template>
            <v-card>
                <form enctype="multipart/form-data" @submit.prevent="addApiToken()">
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="name" label="Name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="token" type="password" label="Token*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="description" label="Description" hint="What is this token used for?"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-autocomplete v-model="token_type" :items="['Read-Only', 'Full Access', 'Custom']" label="Token Type*"></v-autocomplete>
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
  import gql from 'graphql-tag'
  import apitokens from '../../../graphql/query/apitokens.gql'

  const ADD_TOKENS = gql`
      mutation ($name: String!, $description: String!, $token_type: String!, $token: String!) {
      createOneApitokens(data: {name: $name, description: $description, token_type: $token_type, token: $token}) {
          token
          name
          token_type
          description
    }
  }`;

  export default {
    data() {
      return {
        dialog: false,
        token: [],
        name: " ",
        token_type: " ",
        description: " ",
      }
    },
    methods: {
      async addApiToken() {
        const name = this.name;
        const description = this.description;
        const token_type = this.token_type;
        const token = this.token;
        await this.$apollo.mutate({
          mutation: ADD_TOKENS,
          variables: {
            name,
            token_type,
            token,
            description,
          },
          update: (cache, {
            data: {
              insertTokens,
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedApiToken = insertTokens.returning;
              console.log(insertedApiToken)
              cache.writeQuery({
                query: apitokens
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../settings/general-settings'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.token_type = ' ';
        this.token = ' ';
        this.description = ' ';
      },
    },
  }

</script>