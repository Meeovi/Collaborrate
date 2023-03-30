<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-user-circle"></v-icon>Edit Webhook
                </v-btn>
            </template>
            <v-card>
                <form enctype="multipart/form-data" v-for="user in findManyUsers" :key="user.id" @submit.prevent="updateUser(user)">
                <v-card-title>
                    <span class="text-h6">Edit {{ user.username }}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field :value="user.username" label="Username*" id="username" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field :value="user.first_name" label="First Name*" id="first_name" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field :value="user.last_name" label="Last Name" id="last_name" hint="Optional"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field :value="user.phone" label="Phone" id="userPhone" hint="Optional"></v-text-field>
                            </v-col>
                            <v-divider></v-divider>
                            <v-col cols="6">
                                <v-text-field type="email" :value="user.email" label="Email*" id="email" hint="example@example.com" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field type="password" :value="user.password" label="Password*" id="password" required></v-text-field>
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
                    <v-btn color="blue-darken-1" variant="text" @click="deleteUser(user)">
                        Delete
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Create
                    </v-btn>
                </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
/* eslint-disable camelcase */
import  gql from "graphql-tag";
import findManyUsers from "../../../graphql/query/findManyUsers.gql";

const UPDATE_USER = gql`
      mutation ($first_name:String!,$last_name:String!,$username:String!,$email:String!, $password: String!, $phone: String!){
        updateOneUsers(data: {first_name: $first_name, last_name: $last_name, email: $email, username: $username, password: $password, phone: $phone} where: {id: $id}) {
            email
            first_name
            last_name
            username
            password
            phone
    }
    }`;
  
  const DELETE_USER = gql`
    mutation deleteOneUsers($id: Int){
    deleteOneUsers(where: {id: $id}){
        email
            first_name
            last_name
            username
            password
            phone
    }
  }
  `;
  
  export default {
   mounted(){
        this.forceRerender();
    },
    // eslint-disable-next-line vue/order-in-components
    data(){
        return{
            dialog: false,
            componentKey: 0
        }
    },
    methods: {
     async deleteUser(user){
      await this.$apollo.mutate({
          mutation: DELETE_USER,
          variables: {
            id: user.id
          },
          refetchQueries: [
            {
              query: findManyUsers
            }       
            
          ]
        }).then(() => {
              this.$router.push({path: './editor.vue'})
              }).catch(err => console.log(err));
      },
      async updateUser(user){
      await this.$apollo.mutate({
          mutation: UPDATE_USER,
          variables: {
            id: user.id
          },
          refetchQueries: [
            {
              query: findManyUsers
            }       
          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;  
      }
    },
    apollo: {
      findManyUsers: {
        query: findManyUsers,
        prefetch: ({ route }) => ({ id: route.params.id }),
        variables() {
          return { id: this.$route.params.id }
        }
      },
    }
  }
  </script>