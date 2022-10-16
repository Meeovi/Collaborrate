<template>
  <div>
    <form v-for="coupon in findManyCoupons" :key="coupon.id" @submit.prevent="addCoupon">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" value="Reset" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" value="Save Coupon" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Coupon</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <!-- Tab excerpt -->
          <div id="v-tabs-tabContent" class="tab-excerpt">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Coupon Name</td>
                      <td><input v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount</td>
                      <td><input v-model="discount" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Expiration</td>
                      <td><input id="expiration" v-model="expiration" name="expiration" type="datetime-url" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Coupon Content</td>
                      <td><textarea v-model="excerpt" cols="40" rows="10"></textarea>
                      </td>
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
  import gql from "graphql-tag";
  import findManyCoupons from "~/graphql/queries/shop/coupons"

  const DELETE_COUPON = gql`
    mutation ($name:String!,$discount:String!$expiration:String!,$excerpt:String){
    createOneCoupons(data: {name: $name, discount: $discount, expiration: $expiration, excerpt: $excerpt}) {
        name
        discount
        expiration
        excerpt
  }
}`;

const UPDATE_COUPON = gql`
  mutation updateOnecoupons($id: Int!){
  updateOneCoupons(where: {id: {equals: $id}}){
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
            query: findManyCoupons
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
            query: findManyCoupons
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyCoupons: {
      query: findManyCoupons,
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
