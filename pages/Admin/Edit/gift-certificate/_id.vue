<template>
  <div>
    <FormulateForm v-for="certificates in gift_certificates" :key="certificates.id"  method="POST" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><FormulateInput type="reset" class="btn btn-warning" label="Reset" /></a>
          <a class="navbar-brand"><FormulateInput type="button" @click="addGift_Certificate" label="Save Gift_Certificate" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Gift Certificate or Gift Card</a>
          </div>
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-excerpt">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table" >
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Gift Name</td>
                      <td><FormulateInput type="text" required />{{ certificates.name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount</td>
                      <td><FormulateInput type="text" required />{{ certificates.discount }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Expiration</td>
                      <td><FormulateInput id="expiration" name="expiration" type="text" />{{ certificates.expiration }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Gift Type</td>
                      <td><FormulateInput id="expiration" name="expiration" type="text" label="Gift Card or Gift Certificate" />{{ certificates.type }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td><FormulateInput id="reviewDescription" type="textarea" label="Enter information about this gift" validation="required|max:50,length" :help="`Keep it under 50 characters. ${50 - excerpt.length} left.`" />{{ certificates.excerpt }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import gql from 'graphql-tag'
// eslint-disable-next-line camelcase
import gift_certificates from '~/apollo/mutations/sales/gift_certificates'
// eslint-disable-next-line camelcase
import allGift_certificates from '~/apollo/queries/sales/gift_certificates'

const DELETE_GIFT_CERTIFICATE = gql `
  mutation delete_gift_certificates($id: Int!){
  delete_gift_certificates(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_GIFT_CERTIFICATE = gql `
  mutation update_gift_certificates($id: Int!){
  update_gift_certificates(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Gift Certificate'
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
   async deleteCountry(certificates){
    await this.$apollo.mutate({
        mutation: DELETE_GIFT_CERTIFICATE,
        variables: {
          id: certificates.id
        },
        refetchQueries: [
          {
            query: allGift_certificates
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/sales/gift_certificates'})
            }).catch(err => console.log(err));
    },
    async updateCountry(certificates){
    await this.$apollo.mutate({
        mutation: UPDATE_GIFT_CERTIFICATE,
        variables: {
          id: certificates.id
        },
        refetchQueries: [
          {
            query: allGift_certificates
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    gift_certificates: {
      query: gift_certificates,
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
