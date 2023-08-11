<template>
    <div>
        <form method="post" @v-on:submit.prevent="addAccessToken()">
            <v-table class="table">
                <tbody>
                    <tr>
                        <td style="text-align: right;">First Name</td>
                        <td>
                            <v-text-field v-model="first_name" type="text" required></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Last Name</td>
                        <td>
                            <v-text-field v-model="last_name" type="text" required></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Email Address</td>
                        <td>
                            <v-text-field v-model="email" type="email" name="email" required></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Username</td>
                        <td>
                            <v-text-field v-model="username" type="username" name="username" required></v-text-field>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Password</td>
                        <td>
                            <v-text-field v-model="password" type="password" name="password" required></v-text-field>
                        </td>
                    </tr>
                </tbody>
            </v-table>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text">
                    Save
                </v-btn>
            </v-card-actions>
        </form>
    </div>
</template>

<script>
    /* eslint-disable camelcase 
    import gql from "graphql-tag";
    import findManyUsers from "../../../graphql/query/findManyUsers.gql";
    // import  tax from '~/graphql/query/findManyTax'

    const ADD_USER = gql `
    mutation ($first_name:String!,$last_name:String!,$username:String!,$email:String!, $password: String!){
    createOneUsers(data: {first_name: $first_name, last_name: $last_name, email: $email, username: $username, password: $password}) {
        email
        first_name
        last_name
        username
        password
  }
}`;

    export default {
        data() {
            return {
                email: " ",
                first_name: " ",
                last_name: " ",
                username: " ",
                password: " ",
            }
        },
        methods: {
            async addUser() {
                const first_name = this.first_name;
                const last_name = this.last_name;
                const email = this.email;
                const username = this.username;
                const password = this.password;
                await this.$apollo.mutate({
                    mutation: ADD_USER,
                    variables: {
                        first_name,
                        last_name,
                        email,
                        username,
                        password
                    },
                    update: (cache, {
                        data: {
                            insertStaffMember
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedStaffMember = insertStaffMember.returning;
                            console.log(insertedStaffMember)
                            cache.writeQuery({
                                query: findManyUsers
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../system/staff-members'
                    })
                }).catch(err => console.log(err));
                this.first_name = ' ';
                this.last_name = ' ';
                this.email = ' ';
                this.username = ' ';
                this.password = ' ';
            },
        },
        /* apollo: {
            tax: {
            prefetch: true,
            query: tax
            } 
        }, 
    }*/
</script>

<script setup>
    useHead({
        title: 'Account',
    });
</script>