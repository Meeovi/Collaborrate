<template>
  <div>
    <form @submit.prevent="addLead">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Lead" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Lead</a>
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
                      <td><select id="name_prefix" v-model="prefix" name="template" class="form-category">
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
                      <td>
                        <input v-model="first_name" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Last Name</td>
                      <td>
                        <input v-model="last_name" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Job Title</td>
                      <td>
                        <input v-model="job_title" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Department</td>
                      <td>
                        <input v-model="department" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Account Name</td>
                      <td>
                        <select id="accountName" v-model="account_name" name="template" class="form-category">
                            <option v-for="accounts in findManyAccounts" :key="accounts.id" :value="accounts">
                              {{ accounts.name }}
                            </option>
                          </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Office Phone</td>
                      <td>
                        <input v-model="office_phone" type="phone" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Mobile</td>
                      <td>
                        <input v-model="mobile" type="phone" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Fax</td>
                      <td>
                        <input v-model="fax" type="phone" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Website</td>
                      <td>
                        <input v-model="website" type="url" />
                      </td>
                    </tr>
                    <div class="col">
                      <tr>
                        <td style="text-align: right;">Primary Address Street</td>
                        <td>
                          <input v-model="address" type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Primary Address Postalcode</td>
                        <td>
                          <input v-model="postalcode" type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Primary Address City</td>
                        <td>
                          <select id="city" v-model="city" name="template" class="form-category">
                            <option v-for="cities in findManyCities" :key="cities.id" :value="cities">
                              {{ cities.name }}
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Primary Address State</td>
                        <td>
                          <select id="state" v-model="state" name="template" class="form-category">
                            <option v-for="states in findManyStates" :key="states.id" :value="states">{{ states.name }}
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Primary Address Country</td>
                        <td>
                          <select id="country" v-model="country" name="template" class="form-category">
                            <option v-for="countries in findManyCountries" :key="countries.id" :value="countries">
                              {{ countries.name }}
                            </option>
                          </select>
                        </td>
                      </tr>
                    </div>
                    <div class="col">
                      <tr>
                        <td style="text-align: right;">Alternate Address Street</td>
                        <td>
                          <input v-model="alt_address" type="text" value="Other Address" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Alternate Address Postalcode</td>
                        <td>
                          <input v-model="alt_postalcode" type="text" value="Other Address Postalcode" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Alternate Address City</td>
                        <td>
                          <select id="city" v-model="alt_city" name="template" class="form-category">
                            <option v-for="cities in findManyCities" :key="cities.id" :value="cities">
                              {{ cities.name }}
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Alternate Address State</td>
                        <td>
                          <select id="state" v-model="alt_state" name="template" class="form-category">
                            <option v-for="states in findManyStates" :key="states" :value="states">{{ states.name }}
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Alternate Address Country</td>
                        <td>
                          <select id="country" v-model="alt_country" name="template" class="form-category">
                            <option v-for="countries in findManyCountries" :key="countries" :value="countries">
                              {{ countries.name }}
                            </option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Email Address</td>
                        <td>
                          <input v-model="email" type="email" />
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Description</td>
                        <td>
                          <textarea v-model="description" col="40" rows="10"></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: right;">Assigned To</td>
                        <td>
                          <select id="assignedTo" v-model="assigned_to">
                            <option v-for="users in findManyUsers" :key="users.id" :value="users">
                              {{ users.name }}
                            </option>
                          </select>
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
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      More Information
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="table table-responsive">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Status</td>
                              <td>
                                <select id="status" v-model="status" name="template" class="form-category">
                                  <option value="active">Active Lead</option>
                                  <option value="noLongerActive">No Longer Active</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Status Description</td>
                              <td>
                                <textarea v-model="status_description" cols="40" rows="10"></textarea>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Opportunity Amount</td>
                              <td>
                                <input v-model="opportunity_amount" type="number" />
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Lead Source</td>
                              <td>
                                <select id="leadSource" v-model="lead_source">
                                  <option value="coldCall">Cold Call</option>
                                  <option value="exCustomer">Existing Customer</option>
                                  <option value="website">Website</option>
                                  <option value="selfGenerated">Self Generated</option>
                                  <option value="staff">Staff Member</option>
                                  <option value="partner">Partner</option>
                                  <option value="publicRelations">Public Relations</option>
                                  <option value="directMail">Direct Mail</option>
                                  <option value="conference">Conference</option>
                                  <option value="tradeShow">Trade Show</option>
                                  <option value="wordMouth">Word of Mouth</option>
                                  <option value="email">Email</option>
                                  <option value="campaign">Campaign</option>
                                  <option value="other">Other</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Lead Source Description</td>
                              <td>
                                <textarea v-model="lead_source_description" cols="40" rows="10"></textarea>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Referred By</td>
                              <td>
                                <select id="assignedTo" v-model="referred_by">
                                  <option v-for="users in findManyUsers" :key="users.id" :value="users">
                                    {{ users.name }}
                                  </option>
                                </select>
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
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import findManyLeads from "~/graphql/query/findManyLeads";
  import findManyAccounts from "~/graphql/query/findManyAccounts";
  import findManyUsers from '~/graphql/query/findManyUsers'
  import findManyCities from '~/graphql/query/findManyCities'
  import findManyCountries from '~/graphql/query/findManyCountries'
  import findManyStates from '~/graphql/query/findManyStates'
  

  /* eslint-disable camelcase */
  const ADD_LEADS = gql`
    mutation ($prefix: String!, $account_name: String!, $address: String!, $address: String!, $city: String!, $country: String!, $postalcode: String!, $campaign: String!, $customer_name: String!, $description: String!, $department: String!, $email: String!, $fax: String!, $first_name: String!, $last_name: String!, $job_title: String!, $lead_source: String!, $lead_source_description: String!, $mobile: String!, $status: String!, $status_description: String!, $office_phone: String!, $opportunity_amount: String!, $state: String!, $website: String!, $assigned_to: String){
    createOneLeads(data: {prefix: $prefix, account_name: $account_name, address: $address, address: $address, city: $city, country: $country, postalcode: $postalcode, campaign: $campaign, customer_name: $customer_name, description: $description, department: $department, email: $email, fax: $fax, first_name: $first_name, last_name: $last_name, job_title: $job_title, lead_source: $lead_source, lead_source_description: $lead_source_description, mobile: $mobile, status: $status, status_description: $status_description, office_phone: $office_phone, opportunity_amount: $opportunity_amount, state: $state, website: $website, assigned_to: $assigned_to}) {
        prefix
        account_name
        address
        city
        country
        postalcode
        campaign
        customer_name
        description
        department
        email
        fax
        first_name
        last_name
        job_title
        lead_source
        lead_source_description
        mobile
        state
        status
        status_description
        office_phone
        opportunity_amount
        referred_by
        alt_address
        alt_city
        alt_country
        alt_postalcode
        alt_state
        assigned_to
        website
  }
}`;

  export default {
    data() {
      return {
        prefix: " ",
        account_name: " ",
        address: " ",
        city: " ",
        country: " ",
        postalcode: " ",
        campaign: " ",
        customer_name: " ",
        description: " ",
        department: " ",
        email: " ",
        fax: " ",
        first_name: " ",
        last_name: " ",
        job_title: " ",
        lead_source: " ",
        lead_source_description: " ",
        mobile: " ",
        state: " ",
        status: " ",
        status_description: " ",
        office_phone: " ",
        opportunity_amount: " ",
        referred_by: " ",
        alt_address: " ",
        alt_city: " ",
        alt_country: " ",
        alt_postalcode: " ",
        alt_state: " ",
        assigned_to: " ",
        website: " ",
      }
    },
    head: {
      title: 'Add New Lead'
    },
    methods: {
      async addLead() {
        const prefix = this.prefix;
        const account_name = this.account_name;
        const address = this.address;
        const alt_address = this.alt_address;
        const city = this.city;
        const country = this.country;
        const postalcode = this.postalcode;
        const campaign = this.campaign;
        const customer_name = this.customer_name;
        const description = this.description;
        const department = this.department;
        const email = this.email;
        const fax = this.fax;
        const first_name = this.first_name;
        const last_name = this.last_name;
        const job_title = this.job_title;
        const lead_source = this.lead_source;
        const lead_source_description = this.lead_source_description;
        const mobile = this.mobile;
        const status = this.status;
        const status_description = this.status_description;
        const office_phone = this.office_phone;
        const opportunity_amount = this.opportunity_amount;
        const referred_by = this.referred_by;
        const alt_city = this.alt_city;
        const alt_country = this.alt_country;
        const alt_postalcode = this.alt_postalcode;
        const state = this.state;
        const alt_state = this.alt_state;
        const website = this.website;
        const assigned_to = this.assigned_to;
        await this.$apollo.mutate({
          mutation: ADD_LEADS,
          variables: {
            prefix,
            account_name,
            address,
            city,
            country,
            postalcode,
            campaign,
            customer_name,
            description,
            department,
            email,
            website,
            assigned_to,
            fax,
            first_name,
            last_name,
            job_title,
            lead_source,
            lead_source_description,
            mobile,
            state,
            status,
            status_description,
            office_phone,
            opportunity_amount,
            referred_by,
            alt_address,
            alt_city,
            alt_country,
            alt_postalcode,
            alt_state,
          },
          update: (cache, {
            data: {
              insertLeads
            }
          }) => {
            try {
              const insertedLead = insertLeads.returning;
              console.log(insertedLead)
              cache.writeQuery({
                query: findManyLeads
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../customers/leads'
          })
        }).catch(err => console.log(err));
        this.prefix = ' ';
        this.account_name = ' ';
        this.address = ' ';
        this.city = ' ';
        this.country = ' ';
        this.postalcode = ' ';
        this.campaign = ' ';
        this.customer_name = ' ';
        this.description = ' ';
        this.department = ' ';
        this.email = ' ';
        this.fax = ' ';
        this.first_name = ' ';
        this.last_name = ' ';
        this.job_title = ' ';
        this.lead_source = ' ';
        this.lead_source_description = ' ';
        this.mobile = ' ';
        this.state = ' ';
        this.status = ' ';
        this.status_description = ' ';
        this.office_phone = ' ';
        this.opportunity_amount = ' ';
        this.referred_by = ' ';
        this.alt_address = ' ';
        this.alt_city = ' ';
        this.alt_country = ' ';
        this.alt_postalcode = ' ';
        this.alt_state = ' ';
        this.website = ' ';
        this.assigned_to = ' ';
      },

    },
    apollo: {
      findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
      findManyCities: {
        prefetch: true,
        query: findManyCities
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyAccounts: {
        prefetch: true,
        query: findManyAccounts
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
