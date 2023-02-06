<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Customer
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @v-on:submit.prevent="addCustomer()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Customer</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal first name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal middle name" hint="example of helper text only on focus">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                        persistent-hint required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Email*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password*" type="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required>
                                    </v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-autocomplete
                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                        label="Interests" multiple></v-autocomplete>
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
    /* eslint-disable camelcase */
    import gql from "graphql-tag";
    import findManyCustomers from "../../../graphql/query/findManyCustomers"
    import findManyStates from '../../../graphql/query/findManyStates'
    import findManyCountries from '../../../graphql/query/findManyCountries'
    import findManyWorkspaces from '../../../graphql/query/findManyWorkspaces'
    import segments from '../../../graphql/query/findManySegments'

    const ADD_CUSTOMER = gql`
    mutation ($Address: String!, $address_two: String!, $comments: String!, $confirmed_email: String!, $country: String!, $credit_memos: String!, $customer_group: String!, $customer_payment: String!, $date_of_birth: String!, $description: String!, $email: String!, $emails: String!, $first_name: String!, $gender: String!, $image: String!, $last_name: String!, $mediamanager: String!, $messages: String!, $middle_name: String!, $name_prefix: String!, $name_suffix: String!, $newsletter_subscribers: String!, $orders: String!, $password: String!, $payment_type: String!, $phone: String!, $product: String!, $projects: String!, $quotes: String!, $returns: String!, $short_description: String!, $state: String!, $tax_vat_number: String!, $thumbnail: String!, $username: String!, $websites: String!, $workspaces: String!, $zipcode: String!){
    createOneCustomers(data: {Address: $Address, address_two: $address_two, comments: $comments, confirmed_email: $confirmed_email, country: $country, credit_memos: $credit_memos, customer_group: $customer_group, customer_payment: $customer_payment, date_of_birth: $date_of_birth, description: $description, email: $email, emails: $emails, first_name: $first_name, gender: $gender, image: $image, last_name: $last_name, mediamanager: $mediamanager, messages: $messages, middle_name: $middle_name, name_prefix: $name_prefix, name_suffix: $name_suffix, newsletter_subscribers: $newsletter_subscribers, orders: $orders, password: $password, payment_type: $payment_type, phone: $phone, product: $product, projects: $projects, quotes: $quotes, returns: $returns, short_description: $short_description, state: $state, tax_vat_number: $tax_vat_number, thumbnail: $thumbnail, username: $username, websites: $websites, workspaces: $workspaces, zipcode: $zipcode}) {
        Address
        address_two
        comments
        confirmed_email
        country
        credit_memos
        customer_group
        customer_payment
        date_of_birth
        description
        email
        emails
        first_name
        gender
        image
        last_name
        mediamanager
        messages
        middle_name
        name_prefix
        name_suffix
        newsletter_subscribers
        orders
        password
        payment_type
        phone
        product
        projects
        quotes
        returns
        short_description
        state
        tax_vat_number
        thumbnail
        username
        websites
        workspaces
        zipcode
  }
}`;

    export default {
        data() {
            return {
                Address: " ",
                address_two: " ",
                comments: " ",
                confirmed_email: " ",
                country: " ",
                credit_memos: " ",
                customer_group: " ",
                customer_payment: " ",
                date_of_birth: " ",
                description: " ",
                email: " ",
                emails: " ",
                first_name: " ",
                gender: " ",
                image: " ",
                last_name: " ",
                mediamanager: " ",
                messages: " ",
                middle_name: " ",
                name_prefix: " ",
                name_suffix: " ",
                newsletter_subscribers: " ",
                orders: " ",
                password: " ",
                payment_type: " ",
                phone: " ",
                product: " ",
                projects: " ",
                quotes: " ",
                returns: " ",
                short_description: " ",
                state: " ",
                tax_vat_number: " ",
                thumbnail: " ",
                username: " ",
                websites: " ",
                workspaces: " ",
                zipcode: " ",

            }
        },
        methods: {
            async addCustomer() {
                const Address = this.Address;
                const address_two = this.address_two;
                const comments = this.comments;
                const confirmed_email = this.confirmed_email;
                const country = this.country;
                const credit_memos = this.credit_memos;
                const customer_group = this.customer_group;
                const customer_payment = this.customer_payment;
                const date_of_birth = this.date_of_birth;
                const description = this.description;
                const email = this.email;
                const emails = this.emails;
                const first_name = this.first_name;
                const gender = this.gender;
                const image = this.image;
                const last_name = this.last_name;
                const mediamanager = this.mediamanager;
                const messages = this.messages;
                const middle_name = this.middle_name;
                const name_prefix = this.name_prefix;
                const name_suffix = this.name_suffix;
                const newsletter_subscribers = this.newsletter_subscribers;
                const orders = this.orders;
                const password = this.password;
                const payment_type = this.payment_type;
                const phone = this.phone;
                const product = this.product;
                const projects = this.projects;
                const quotes = this.quotes;
                const returns = this.returns;
                const short_description = this.short_description;
                const state = this.state;
                const tax_vat_number = this.tax_vat_number;
                const thumbnail = this.thumbnail;
                const username = this.username;
                const websites = this.websites;
                const workspaces = this.workspaces;
                const zipcode = this.zipcode;

                await this.$apollo.mutate({
                    mutation: ADD_CUSTOMER,
                    variables: {
                        Address,
                        address_two,
                        comments,
                        confirmed_email,
                        country,
                        credit_memos,
                        customer_group,
                        customer_payment,
                        date_of_birth,
                        description,
                        email,
                        emails,
                        first_name,
                        gender,
                        image,
                        last_name,
                        mediamanager,
                        messages,
                        middle_name,
                        name_prefix,
                        name_suffix,
                        newsletter_subscribers,
                        orders,
                        password,
                        payment_type,
                        phone,
                        product,
                        projects,
                        quotes,
                        returns,
                        short_description,
                        state,
                        tax_vat_number,
                        thumbnail,
                        username,
                        websites,
                        workspaces,
                        zipcode,

                    },
                    update: (cache, {
                        data: {
                            insertCustomers
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedCustomer = insertCustomers.returning;
                            const insertedCountry = insertCountries.returning;
                            const insertedCity = insertCities.returning;
                            const insertedState = insertStates.returning;
                            console.log(insertedCustomer, insertedCountry, insertedCity, insertedState)
                            console.log(insertedCustomer)
                            cache.writeQuery({
                                query: findManyCustomers
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../customers/customers'
                    })
                }).catch(err => console.log(err));
                this.Address = ' ';
                this.address_two = ' ';
                this.comments = ' ';
                this.confirmed_email = ' ';
                this.country = ' ';
                this.credit_memos = ' ';
                this.customer_group = ' ';
                this.customer_payment = ' ';
                this.date_of_birth = ' ';
                this.description = ' ';
                this.email = ' ';
                this.emails = ' ';
                this.first_name = ' ';
                this.gender = ' ';
                this.image = ' ';
                this.last_name = ' ';
                this.mediamanager = ' ';
                this.messages = ' ';
                this.middle_name = ' ';
                this.name_prefix = ' ';
                this.name_suffix = ' ';
                this.newsletter_subscribers = ' ';
                this.orders = ' ';
                this.password = ' ';
                this.payment_type = ' ';
                this.phone = ' ';
                this.product = ' ';
                this.projects = ' ';
                this.quotes = ' ';
                this.returns = ' ';
                this.short_description = ' ';
                this.state = ' ';
                this.tax_vat_number = ' ';
                this.thumbnail = ' ';
                this.username = ' ';
                this.websites = ' ';
                this.workspaces = ' ';
                this.zipcode = ' ';

            },
        },
        apollo: {
            findManyStates: {
                prefetch: true,
                query: findManyStates
            },
            findManyCountries: {
                prefetch: true,
                query: findManyCountries
            },
            segments: {
                prefetch: true,
                query: segments
            },
            findManyWorkspaces: {
                prefetch: true,
                query: findManyWorkspaces
            },
        },
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
    }
</script>