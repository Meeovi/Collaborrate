<template>
  <div>
    <FormulateForm v-for="newsletter in newsletter_subscribers" :key="newsletter.id"  method="POST" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><FormulateInput type="reset" class="btn btn-warning" label="Reset" /></a>
          <a class="navbar-brand"><FormulateInput type="button" @click="addCustomer" label="Save Customer" /></a>
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
                      <td style="text-align: right;">Customer Since</td>
                      <client-only>
                      <td><FormulateInput id="currentDate" v-model="customer_since" type="text" disabled /></td>
                      </client-only>
                    </tr>-->
                    <tr>
                      <td style="text-align: right;">Name Prefix</td>
                      <td><FormulateInput type="text" />{{ newsletter.name_prefix }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">First Name</td>
                      <td><FormulateInput type="text" required />{{ newsletter.first_name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Middle Name/Initial</td>
                      <td><FormulateInput type="text" />{{ newsletter.middle_name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Last Name</td>
                      <td><FormulateInput type="text" required />{{ newsletter.last_name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name Suffix</td>
                      <td><FormulateInput type="text" />{{ newsletter.name_suffix }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Email</td>
                      <td><FormulateInput type="text" required />{{ newsletter.email }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Date of Birth</td>
                      <td><FormulateInput type="text" />{{ newsletter.date_of_birth }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Phone Number</td>
                      <td><FormulateInput type="text" />{{ newsletter.phone }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tax/VAT Number</td>
                      <td><FormulateInput type="text" />{{ newsletter.tax_vat_number }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Gender</td>
                      <td><FormulateInput id="gender" name="gender" type="text" />{{ newsletter.gender }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">About Customer</td>
                      <td><FormulateInput
  type="textarea" id="aboutCustomer" name="aboutCustomer" validation="required|max:50,length" error-behavior="live"
  :help="`Keep it under 50 characters. ${50 - value.length} left.`">{{ newsletter.short_description }}
                        </FormulateInput></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address Line 1</td>
                      <td><FormulateInput type="text" />{{ newsletter.address }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address Line 2</td>
                      <td><FormulateInput type="text" />{{ newsletter.address_two }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td><FormulateInput id="state" name="state" type="select" placeholder="Select a State" />{{ newsletter.state }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Postal Code</td>
                      <td><FormulateInput type="text" />{{ newsletter.zipcode }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td><FormulateInput id="country" v-model="country" name="country" type="select" placeholder="Select a Country" />{{ newsletter.country }}
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
// eslint-disable-next-line camelcase
import gql from 'graphql-tag'
// eslint-disable-next-line camelcase
import newsletter_subscribers from '~/apollo/mutations/marketing/newsletter_subscribers'
import allGlossaries from '~/apollo/queries/marketing/newsletter_subscribers'

const DELETE_GLOSSARY = gql `
  mutation delete_newsletter_subscribers($id: Int!){
  delete_newsletter_subscribers(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_GLOSSARY = gql `
  mutation update_newsletter_subscribers($id: Int!){
  update_newsletter_subscribers(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Newsletter Subscribers'
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
   async deleteCountry(newsletter){
    await this.$apollo.mutate({
        mutation: DELETE_GLOSSARY,
        variables: {
          id: newsletter.id
        },
        refetchQueries: [
          {
            query: allGlossaries
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/newsletter_subscribers'})
            }).catch(err => console.log(err));
    },
    async updateCountry(newsletter){
    await this.$apollo.mutate({
        mutation: UPDATE_GLOSSARY,
        variables: {
          id: newsletter.id
        },
        refetchQueries: [
          {
            query: allGlossaries
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    newsletter_subscribers: {
      query: newsletter_subscribers,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
