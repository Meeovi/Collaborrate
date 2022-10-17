
<template>
  <div>
    <form  v-for="target in findManyTargets" :key="target.id" @submit.prevent="addTarget()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Target" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Target</a>
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
                        <select id="status" v-model="Prefix" name="template" class="form-category">
                          <option value="mr">Mr.</option>
                          <option value="ms">Ms.</option>
                          <option value="miss">Miss</option>
                          <option value="doctor">Dr.</option>
                          <option value="madam">Madam</option>
                          <option value="sir">Sir</option>
                        </select>
                      </td>
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
                        <input v-model="account_name" type="text" />
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
                          <option v-for="city in findManyCities" :key="city" :value="city">{{ city.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Primary Address State</td>
                      <td>
                        <select id="state" v-model="state" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states" :value="states">{{ states.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Primary Address Country</td>
                      <td>
                        <select id="country" v-model="country" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries" :value="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
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
                          <option v-for="city in findManyCities" :key="city" :value="city">{{ city.name }}
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
                        <textarea v-model="description" cols="40" rows="10"></textarea>
                      </td>
                    </tr>
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
                              <td style="text-align: right;">Email Opt Out</td>
                              <td>
                                <select id="status" v-model="email_opt_out" name="template" class="form-category">
                                  <option value="optIn">Opt In</option>
                                  <option value="OptOut">Opt Out</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Do Not Call</td>
                              <td>
                                <select id="status" v-model="donotcall" name="template" class="form-category">
                                  <option value="call">Call</option>
                                  <option value="doNotCall">Do Not Call</option>
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

  import
  findManyTargets
  from "~/graphql/queries/customers/targets";
  import findManyStates from '~/graphql/queries/shop/states'
  import findManyCountries from '~/graphql/queries/shop/countries'
  import findManyCities from '~/graphql/queries/shop/cities'
  /* eslint-disable camelcase */
  const DELETE_TARGET = gql `
    mutation ($Prefix: String!, $account_name: String!, $address: String!, $city: String!, $country: String!, $postalcode: String!, $department: String!, $customer_name: String!, $description: String!, $email: String!, $fax: String!, $first_name: String!, $last_name: String!, $job_title: String!, $email_opt_out: String!, $donotcall: String!, $mobile: String!, $office_phone: String!, $state: String!, $website: String){
    createOneTargets(data: {Prefix: $Prefix, account_name: $account_name, address: $address, city: $city, country: $country, postalcode: $postalcode, department: $department, customer_name: $customer_name, description: $description, email: $email, fax: $fax, first_name: $first_name, last_name: $last_name, job_title: $job_title, email_opt_out: $email_opt_out, donotcall: $donotcall, mobile: $mobile, office_phone: $office_phone, state: $state, website: $website}) {
        Prefix
        account_name
        address
        city
        country
        postalcode
        department
        customer_name
        description
        email
        fax
        first_name
        last_name
        job_title
        email_opt_out
        donotcall
        mobile
        state
        office_phone
        alt_address
        alt_city
        alt_country
        alt_postalcode
        alt_state
        website
  }
}`;

const UPDATE_TARGET = gql`
  mutation updateOnetargets($id: Int!){
  updateOneTargets(where: {id: {equals: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Target'
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
   async deleteTarget(target){
    await this.$apollo.mutate({
        mutation: DELETE_TARGET,
        variables: {
          id: target.id
        },
        refetchQueries: [
          {
            query: targets
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/customers/targets'})
            }).catch(err => console.log(err));
    },
    async updateTarget(target){
    await this.$apollo.mutate({
        mutation: UPDATE_TARGET,
        variables: {
          id: target.id
        },
        refetchQueries: [
          {
            query: targets
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyTargets: {
      query: findManyTargets,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyCities: {
        prefetch: true,
        query: findManyCities
      },
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
