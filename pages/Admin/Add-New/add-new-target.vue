
<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Target" @click="addTarget" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Target</a>
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
              <td style="text-align: right;">Prefix</td>
              <td>
                <FormulateInput v-model="prefix" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">First Name</td>
              <td>
                <FormulateInput v-model="first_name" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Last Name</td>
              <td>
                <FormulateInput v-model="last_name" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Job Title</td>
              <td>
                <FormulateInput v-model="job_title" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Department</td>
              <td>
                <FormulateInput v-model="department" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Account Name</td>
              <td>
                <FormulateInput v-model="account_name" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Office Phone</td>
              <td>
                <FormulateInput v-model="office_phone" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Mobile</td>
              <td>
                <FormulateInput v-model="mobile" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Fax</td>
              <td>
                <FormulateInput v-model="fax" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Website</td>
              <td>
                <FormulateInput v-model="website" type="text" />
              </td>
            </tr>
            <div class="col">
            <tr>
              <td style="text-align: right;">Primary Address Street</td>
              <td>
                <FormulateInput v-model="address" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address Postalcode</td>
              <td>
                <FormulateInput v-model="postalcode" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address City</td>
              <td>
                <FormulateInput v-model="city" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address State</td>
              <td>
                <FormulateInput v-model="state" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Primary Address Country</td>
              <td>
                <FormulateInput v-model="state" type="text" />
              </td>
            </tr>
            </div>
            <div class="col">
            <tr>
              <td style="text-align: right;">Alternate Address Street</td>
              <td>
                <FormulateInput v-model="alt_address" type="text" label="Other Address" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address Postalcode</td>
              <td>
                <FormulateInput v-model="alt_postalcode" type="text" label="Other Address Postalcode" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address City</td>
              <td>
                <FormulateInput v-model="alt_city" type="text" label="Other Address City" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address State</td>
              <td>
                <FormulateInput v-model="alt_state" type="text" label="Other Address State" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Alternate Address Country</td>
              <td>
                <FormulateInput v-model="alt_country" type="text" label="Other Address Country" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Email Address</td>
              <td>
                <FormulateInput v-model="email" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <FormulateInput v-model="description" type="textarea" />
              </td>
            </tr>
            </div>
          </tbody>
        </table>
      </div>
      <br><br>
      <div id="accordionExample" class="accordion">
        <div class="accordion-item">
          <h2 id="headingOne" class="accordion-header">
            <FormulateInput class="accordion-button" type="button" data-mdb-toggle="collapse"
              data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              More Information
            </FormulateInput>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-mdb-parent="#accordionExample">
            <div class="accordion-body">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Email Opt Out</td>
                      <td>
                        <FormulateInput v-model="email_opt_out" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Do Not Call</td>
                      <td>
                        <FormulateInput v-model="donotcall" type="textarea" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import {
    targets
  } from "~/apollo/queries/customers/targets";
/* eslint-disable camelcase */
  const ADD_TARGETS = gql `
    mutation ($prefix: String!, $account_name: String!, $address: String!, $address: String!, $city: String!, $country: String!, $postalcode: String!, $department: String!, $customer_name: String!, $description: String!, $email: String!, $fax: String!, $first_name: String!, $last_name: String!, $job_title: String!, $email_opt_out: String!, $donotcall: String!, $mobile: String!, $office_phone: String!, $state: String!, $website: String){
    insert_targets(objects: {prefix: $prefix, account_name: $account_name, address: $address, address: $address, city: $city, country: $country, postalcode: $postalcode, department: $department, customer_name: $customer_name, description: $description, department: $department, email: $email, fax: $fax, first_name: $first_name, last_name: $last_name, job_title: $job_title, email_opt_out: $email_opt_out, donotcall: $donotcall, mobile: $mobile, status: $status, status_description: $status_description, office_phone: $office_phone, opportunity_amount: $opportunity_amount, state: $state, website: $website, assigned_to: $assigned_to}) {
        affected_rows
        returning {
            prefix
            account_name
            address
            city
            country
            postalcode
            department
            customer_name
            description
            email
            state
            fax
            first_name
            last_name
            job_title
            email_opt_out
            donotcall
            mobile
            office_phone
            alt_address
            alt_city
            alt_country
            alt_postalcode
            alt_state
            website
    }
  }
}`;

  export default {
    data() {
      return {
        prefix:" ",
        account_name:" ",
        address:" ",
        city:" ",
        country:" ",
        postalcode:" ",
        department:" ",
        customer_name:" ",
        description:" ",
        email:" ",
        fax:" ",
        first_name:" ",
        last_name:" ",
        job_title:" ",
        email_opt_out:" ",
        donotcall:" ",
        mobile:" ",
        state: " ",
        office_phone:" ",
        alt_address:" ",
        alt_city:" ",
        alt_country:" ",
        alt_postalcode:" ",
        alt_state:" ",
        website:" ",
      }
    },
    head: {
      title: 'Add New Target'
    },
    methods: {
      async addTarget() {
        const prefix = this.prefix;
        const account_name = this.account_name;
        const address = this.address;
        const alt_address = this.alt_address;
        const city = this.city;
        const country = this.country;
        const postalcode = this.postalcode;
        const department = this.department;
        const customer_name = this.customer_name;
        const description = this.description;
        const email = this.email;
        const fax = this.fax;
        const first_name = this.first_name;
        const last_name = this.last_name;
        const job_title = this.job_title;
        const email_opt_out = this.email_opt_out;
        const donotcall = this.donotcall;
        const mobile = this.mobile;
        const office_phone = this.office_phone;
        const alt_city = this.alt_city;
        const alt_country = this.alt_country;
        const alt_postalcode = this.alt_postalcode;
        const state = this.state;
        const alt_state = this.alt_state;
        const website = this.website;
        await this.$apollo.mutate({
          mutation: ADD_TARGETS,
          variables: {
            prefix,
            account_name,
            address,
            city,
            country,
            postalcode,
            department,
            customer_name,
            description,
            email,
            website,
            fax,
            first_name,
            last_name,
            job_title,
            email_opt_out,
            donotcall,
            mobile,
            state,
            office_phone,
            alt_address,
            alt_city,
            alt_country,
            alt_postalcode,
            alt_state,
          },
          update: (cache, {
            data: {
              insertTargets
            }
          }) => {
            try {
              const insertedTarget = insertTargets.returning;
              console.log(insertedTarget)
              cache.writeQuery({
                query: targets
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../customers/targets'
          })
        }).catch(err => console.log(err));
        this.prefix = ' ';
        this.account_name = ' ';
        this.address = ' ';
        this.city = ' ';
        this.country = ' ';
        this.postalcode = ' ';
        this.department = ' ';
        this.customer_name = ' ';
        this.description = ' ';
        this.email = ' ';
        this.fax = ' ';
        this.first_name = ' ';
        this.last_name = ' ';
        this.job_title = ' ';
        this.email_opt_out = ' ';
        this.donotcall = ' ';
        this.mobile = ' ';
        this.state = ' ';
        this.office_phone = ' ';
        this.alt_address = ' ';
        this.alt_city = ' ';
        this.alt_country = ' ';
        this.alt_postalcode = ' ';
        this.alt_state = ' ';
        this.website = ' ';
      },

    },
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
