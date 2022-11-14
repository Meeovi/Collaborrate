<template>
  <div>
    <form v-for="customer in findManyCustomers" :key="customer.id" @submit.prevent="addCustomer">
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
              aria-controls="v-tabs-home" aria-selected="true">Edit Customer</a>
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
                      <td><select id="name_prefix" :value="customer.name_prefix" name="template" class="form-category">
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
                      <td><input :value="customer.first_name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Middle Name</td>
                      <td><input :value="customer.middle_name" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Last Name</td>
                      <td><input :value="customer.last_name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Suffix</td>
                      <td><input :value="customer.name_suffix" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Email Address</td>
                      <td><input :value="customer.email" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Gender</td>
                      <td><select id="gender" :value="customer.gender" name="template" class="form-category">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other / Rather Not Say</option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Username</td>
                      <td><input :value="customer.username" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Password</td>
                      <td><input :value="customer.password" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Websites</td>
                      <td><input :value="customer.websites" type="url" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Phone</td>
                      <td><input :value="customer.phone" type="number" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tax VAT Number</td>
                      <td><input :value="customer.tax_vat_number" type="number" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Image</td>
                      <td><input :value="customer.image" type="image" name="image" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Date of Birth</td>
                      <td><input :value="customer.date_of_birth" type="datetime-local" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address</td>
                      <td><input :value="customer.Address" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address 2</td>
                      <td><input :value="customer.address_two" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td>
                        <select id="state" :value="customer.state" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states" :value="states">{{ states.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="country" :value="customer.country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :value="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Postal</td>
                      <td><input :value="customer.zipcode" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Customer Group</td>
                      <td>
                        <select id="segments" :value="customer.customer" name="template" class="form-category">
                          <option v-for="segments in findManySegments" :key="segments" :value="segments">{{ segments.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <div class="row">
                      <div class="col-md-6">
                        <tr>
                          <td style="text-align: right;">Short Description</td>
                          <td><textarea :value="customer.short_description" col="40" rows="10"></textarea></td>
                        </tr>
                      </div>
                      <div class="col-md-6">
                        <tr>
                          <td style="text-align: right;">Long Description</td>
                          <td><textarea :value="customer.description" col="40" rows="10"></textarea></td>
                        </tr>
                      </div>
                    </div>
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
  import findManySegments from '~/graphql/query/findManySegments'
  // import  tax from '~/graphql/query/findManyTax'

  const DELETE_CUSTOMER = gql`
    mutation ($Address: String!, $address_two: String!, $comments: String!, $confirmed_email: String!, $country: String!, $credit_memos: String!, $customer: String!, $customer_customerTocustomers: String!, $customer_payment: String!, $customer_since: String!, $date_of_birth: String!, $description: String!, $email: String!, $emails: String!, $first_name: String!, $gender: String!, $id: String!, $image: String!, $last_name: String!, $mediamanager: String!, $messages: String!, $middle_name: String!, $name_prefix: String!, $name_suffix: String!, $newsletter_subscribers: String!, $orders: String!, $password: String!, $payment_type: String!, $phone: String!, $product: String!, $projects: String!, $quotes: String!, $returns: String!, $short_description: String!, $state: String!, $tax_vat_number: String!, $thumbnail: String!, $username: String!, $websites: String!, $workspaces: String!, $zipcode: String!){
    createOneCustomers(data: {Address: $Address, address_two: $address_two, comments: $comments, confirmed_email: $confirmed_email, country: $country, credit_memos: $credit_memos, customer: $customer, customer_customerTocustomers: $customer_customerTocustomers, customer_payment: $customer_payment, customer_since: $customer_since, date_of_birth: $date_of_birth, description: $description, email: $email, emails: $emails, first_name: $first_name, gender: $gender, id: $id, image: $image, last_name: $last_name, mediamanager: $mediamanager, messages: $messages, middle_name: $middle_name, name_prefix: $name_prefix, name_suffix: $name_suffix, newsletter_subscribers: $newsletter_subscribers, orders: $orders, password: $password, payment_type: $payment_type, phone: $phone, product: $product, projects: $projects, quotes: $quotes, returns: $returns, short_description: $short_description, state: $state, tax_vat_number: $tax_vat_number, thumbnail: $thumbnail, username: $username, websites: $websites, workspaces: $workspaces, zipcode: $zipcode}) {
        Address
        address_two
        comments
        confirmed_email
        country
        credit_memos
        customer
        customer_customerTocustomers
        customer_payment
        customer_since
        date_of_birth
        description
        email
        emails
        first_name
        gender
        id
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

const UPDATE_CUSTOMER = gql`
  mutation updateOnecustomers($id: Int!){
  updateOneCustomers(where: {id: $id}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Customer'
    },
 mounted(){
      this.forceRerender();
  },
  // eslint-disable-next-line vue/order-in-components
  data(){
      return{
          componentKey: 0
      }
  },
  methods: {
   // eslint-disable-next-line camelcase
   async deleteCountry(customer){
    await this.$apollo.mutate({
        mutation: DELETE_CUSTOMER,
        variables: {
          id: customer.id
        },
        refetchQueries: [
          {
            query: findManyCustomers
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/customers/customers'})
            }).catch(err => console.log(err));
    },
    // eslint-disable-next-line camelcase
    async updateCountry(customer){
    await this.$apollo.mutate({
        mutation: UPDATE_CUSTOMER,
        variables: {
          id: customer.id
        },
        refetchQueries: [
          {
            query: findManyCustomers
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
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
      findManyCustomers: {
        prefetch: true,
        query: findManyCustomers
      },
      findManyWorkspaces: {
        prefetch: true,
        query: findManyWorkspaces
      },
    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Edit Customer'
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
