<template>
  <div>
    <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><FormulateInput type="reset" class="btn btn-warning" label="Reset" /></a>
          <a class="navbar-brand"><FormulateInput type="button" label="Save Report" @click="addReport" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Account Information</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <!-- Tab content -->
          <div id="v-tabs-tabContent" class="tab-content">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table" >
                  <tbody>
                    <!--<tr>
                      <td style="text-align: right;">Report Since</td>
                      <client-only>
                      <td><FormulateInput id="currentDate" v-model="customer_since" type="text" disabled /></td>
                      </client-only>
                    </tr>-->
                    <tr>
                      <td style="text-align: right;">Name Prefix</td>
                      <td><FormulateInput v-model="name_prefix" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">First Name</td>
                      <td><FormulateInput v-model="first_name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Middle Name/Initial</td>
                      <td><FormulateInput v-model="middle_name" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Last Name</td>
                      <td><FormulateInput v-model="last_name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name Suffix</td>
                      <td><FormulateInput v-model="name_suffix" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Email</td>
                      <td><FormulateInput v-model="email" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Date of Birth</td>
                      <td><FormulateInput v-model="date_of_birth" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Phone Number</td>
                      <td><FormulateInput v-model="phone" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tax/VAT Number</td>
                      <td><FormulateInput v-model="tax_vat_number" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Gender</td>
                      <td><FormulateInput id="gender" v-model="gender" name="gender" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">About Report</td>
                      <td><FormulateInput id="aboutReport" v-model="short_description" type="textarea" name="aboutReport" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address Line 1</td>
                      <td><FormulateInput v-model="Address" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address Line 2</td>
                      <td><FormulateInput v-model="address_two" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td><FormulateInput id="state" v-model="state" name="state" :options="states.name" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Postal Code</td>
                      <td><FormulateInput v-model="zipcode" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td><FormulateInput id="country" v-model="country" name="country" :options="countries.name" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Image</td>
                      <td><FormulateInput type="image" name="headshot" v-model="image" label="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Tab content -->
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
import gql from "graphql-tag";
import reports from "~/apollo/queries/reports/reports"

const ADD_REPORTS = gql`
    mutation ($first_name:String!,$middle_name:String!,$last_name:String!,$gender:String!,$email:String!,$description:String!,$date_of_birth:String!,$websites:String!,$customer_group:String!,$phone:String!,$zipcode:String!,$name_prefix:String!,$name_suffix:String!,$product:String!,$state:String!,$country:String!,$tax_vat_number: String!,$Address:String!,$address_two:String!,$short_description:String!,$image: String){
    insert_reports(objects: {first_name: $first_name, middle_name: $middle_name, last_name: $last_name, gender: $gender, email: $email, description: $description, product: $product, state: $state, date_of_birth: $date_of_birth, websites: $websites, customer_group: $customer_group, phone: $phone, zipcode: $zipcode, name_suffix: $name_suffix, name_prefix: $name_prefix, country: $country, Address: $Address, address_two: $address_two, tax_vat_number: $tax_vat_number, short_description: $short_description, image: $image}) {
        affected_rows
        returning {
            first_name
            middle_name
            last_name
            gender
            email
            description
            product
            state
            date_of_birth
            websites
            customer_group
            phone
            zipcode
            name_prefix
            name_suffix
            tax_vat_number
            country
            Address
            address_two
            short_description
            image
    }
  }
}`;

export default {

    data() {
    return {
            first_name: " ",
            middle_name: " ",
            last_name: " ",
            gender: " ",
            email: " ",
            description: " ",
            date_of_birth: " ",
            websites: " ",
            customer_group: " ",
            phone: " ",
            product: " ",
            zipcode: " ",
            name_prefix: " ",
            name_suffix: " ",
            tax_vat_number: " ",
            state: " ",
            country: " ",
            Address: " ",
            address_two: " ",
            short_description: " ",
            image: " ",
            
        }
  },
    head: {
        title: 'Add New Report'
    }, 
/* eslint-disable camelcase */
   
  methods: {
      async addReport() {
            const first_name = this.first_name;
            const middle_name = this.middle_name;
            const last_name = this.last_name;
            const gender = this.gender;
            const email = this.email;
            const description = this.description;
            const product = this.product;
            const state = this.state;
            const date_of_birth = this.date_of_birth;
            const websites = this.websites;
            const customer_group = this.customer_group;
            const tax_vat_number = this.tax_vat_number;
            const phone = this.phone;
            const zipcode = this.zipcode;
            const name_prefix = this.name_prefix;
            const name_suffix = this.name_suffix;
            const country = this.country;
            const Address = this.Address;
            const address_two = this.address_two;
            const short_description = this.short_description;
            const image = this.image;
            await this.$apollo.mutate({
                mutation: ADD_REPORTS,
                variables: {
                    first_name,
                    middle_name,
                    last_name,
                    gender,
                    email,
                    description,
                    product,
                    state,
                    date_of_birth,
                    tax_vat_number,
                    websites,
                    customer_group,
                    phone,
                    zipcode,
                    name_prefix,
                    name_suffix,
                    country,
                    Address,
                    address_two,
                    short_description,
                    image,
                 },
        update: (cache, { data: { insertReports }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedReport = insertReports.returning;
                            console.log(insertedReport)
                            cache.writeQuery({
                                query: reports
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../reports/reports'})
                }).catch(err => console.log(err));
                    this.first_name = ' ';
                    this.middle_name = ' ';
                    this.last_name = ' ';
                    this.gender = ' ';
                    this.email = ' ';
                    this.description = ' ';
                    this.product = ' ';
                    this.state = ' ';
                    this.date_of_birth = ' ';
                    this.websites = ' ';
                    this.customer_group = ' ';
                    this.tax_vat_number = ' ';
                    this.phone = ' ';
                    this.zipcode = ' ';
                    this.name_prefix = ' ';
                    this.name_suffix = ' ';
                    this.country = ' ';
                    this.Address = ' ';
                    this.address_two = ' ';
                    this.short_description = ' ';
                    this.image = ' ';
                },
        },
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
