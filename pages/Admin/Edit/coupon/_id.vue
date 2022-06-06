<template>
  <div>
    <FormulateForm v-for="coupon in coupons" :key="coupon.id" method="POST" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><FormulateInput type="reset" class="btn btn-warning" label="Reset" /></a>
          <a class="navbar-brand"><FormulateInput type="button" @click="addCoupon" label="Save Coupon" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Coupon</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <!-- Tab excerpt -->
          <div id="v-tabs-tabContent" class="tab-excerpt">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table" >
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Coupon Name</td>
                      <td><FormulateInput type="text" required />{{ coupon.name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount</td>
                      <td><FormulateInput type="text" required />{{ coupon.discount }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Expiration</td>
                      <td><FormulateInput id="expiration" name="expiration" type="url" />{{ coupon.expiration }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Coupon Content</td>
                      <td><FormulateInput id="reviewDescription" type="textarea" label="Enter information about this coupon" validation="required|max:50,length" :help="`Keep it under 50 characters. ${50 - excerpt.length} left.`" />{{ coupon.excerpt }}
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
import coupons from '~/apollo/mutations/shop/coupons'
import allCoupons from '~/apollo/queries/shop/coupons'

const DELETE_COUPON = gql `
  mutation delete_coupons($id: Int!){
  delete_coupons(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_COUPON = gql `
  mutation update_coupons($id: Int!){
  update_coupons(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Coupon'
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
   async deleteCoupon(coupon){
    await this.$apollo.mutate({
        mutation: DELETE_COUPON,
        variables: {
          id: coupon.id
        },
        refetchQueries: [
          {
            query: allCoupons
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/coupons'})
            }).catch(err => console.log(err));
    },
    async updateCoupon(coupon){
    await this.$apollo.mutate({
        mutation: UPDATE_COUPON,
        variables: {
          id: coupon.id
        },
        refetchQueries: [
          {
            query: allCoupons
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    coupons: {
      query: coupons,
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
