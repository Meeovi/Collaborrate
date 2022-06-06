<template>
  <div>
    <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
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
                      <td><FormulateInput v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount</td>
                      <td><FormulateInput v-model="discount" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Expiration</td>
                      <td><FormulateInput id="expiration" v-model="expiration" name="expiration" type="url" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Coupon Content</td>
                      <td><FormulateInput id="reviewDescription" v-model="excerpt" type="textarea" label="Enter information about this coupon" validation="required|max:50,length" :help="`Keep it under 50 characters. ${50 - excerpt.length} left.`" />
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
import gql from "graphql-tag";
import coupons from "~/apollo/queries/shop/coupons"

const ADD_COUPONS = gql`
    mutation ($name:String!,$discount:String!$expiration:String!,$excerpt:String){
    insert_coupons(objects: {name: $name, discount: $discount, expiration: $expiration, excerpt: $excerpt}) {
        affected_rows
        returning {
            name
            discount
            expiration
            excerpt
    }
  }
}`;

export default {

    data() {
    return {
            name: " ",
            discount: " ",
            expiration: " ",
            excerpt: " ",
        }
  },
    head: {
        title: 'Add New Coupon'
    }, 
/* eslint-disable camelcase */
   
  methods: {
      async addCoupon() {
            const name = this.name;
            const discount = this.discount;
            const expiration = this.expiration;
            const excerpt = this.excerpt;
            await this.$apollo.mutate({
                mutation: ADD_COUPONS,
                variables: {
                    name,
                    discount,
                    expiration,
                    excerpt,
                 },
        update: (cache, { data: { insertCoupons }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCoupon = insertCoupons.returning;
                            console.log(insertedCoupon)
                            cache.writeQuery({
                                query: coupons
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/coupons'})
                }).catch(err => console.log(err));
                    this.name = ' ';
                    this.discount = ' ';
                    this.expiration = ' ';
                    this.excerpt = ' ';
                }, 
        },
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
