<template>
  <div>
    <form @submit.prevent="addCustomer">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Customer" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Customer</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Name Prefix</td>
                      <td><select id="name_prefix" v-model="name_prefix" name="template" class="form-category">
                          <option value="mr">Mr.</option>
                          <option value="ms">Ms.</option>
                          <option value="miss">Miss</option>
                          <option value="madam">Madam</option>
                          <option value="dr">Dr.</option>
                          <option value="sir">Sir</option>
                          <option value="dame">Dame</option>
                          <option value="lady">Lady</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">First Name</td>
                      <td><input v-model="first_name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Middle Name</td>
                      <td><input v-model="middle_name" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Last Name</td>
                      <td><input v-model="last_name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Suffix</td>
                      <td><input v-model="name_suffix" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Email Address</td>
                      <td><input v-model="email" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Gender</td>
                      <td><select id="gender" v-model="gender" name="template" class="form-category">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other / Rather Not Say</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Username</td>
                      <td><input v-model="username" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Password</td>
                      <td><input v-model="password" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Websites</td>
                      <td><input v-model="websites" type="url" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Phone</td>
                      <td><input v-model="phone" type="number" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tax VAT Number</td>
                      <td><input v-model="tax_vat_number" type="number" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Image</td>
                      <td><input v-model="image" type="image" name="image" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Date of Birth</td>
                      <td><input v-model="date_of_birth" type="datetime-local" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address</td>
                      <td><input v-model="Address" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address 2</td>
                      <td><input v-model="address_two" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td>
                        <select id="state" v-model="state" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states" :value="states">{{ states.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="country" v-model="country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :value="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Postal</td>
                      <td><input v-model="zipcode" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Customer Segment</td>
                      <td>
                        <select id="segments" v-model="customer_group" name="template" class="form-category">
                          <option v-for="segments in segments" :key="segments" :value="segments">{{ segments.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                        <tr>
                          <td style="text-align: right;">Short Description</td>
                          <td><textarea v-model="short_description" rows="10" cols="50"></textarea></td>
                        </tr>
                        <tr>
                          <td style="text-align: right;">Long Description</td>
                          <td><textarea v-model="description" rows="10" cols="50"></textarea></td>
                        </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  /* eslint-disable camelcase */
  import gql from "graphql-tag";
  import findManyCustomers from "~/graphql/query/findManyCustomers";
  import  findManyStates from '~/graphql/query/findManyStates'
  import  findManyCountries from '~/graphql/query/findManyCountries'
  import  findManyWorkspaces from '~/graphql/query/findManyWorkspaces'
  import segments from '~/graphql/query/findManySegments'
  // import  tax from '~/graphql/query/findManyTax'

  const ADD_CUSTOMER = gql `
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
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New Customer'
    }
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

  li {
    display: inline-block;
  }

</style>
