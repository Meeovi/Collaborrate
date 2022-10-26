<template>
  <div>
    <form @submit.prevent="addReport">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" value="Reset" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" value="Save Report" /></a>
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
                    <tr>
                      <td style="text-align: right;">Customer Name</td>
                      <td><input v-model="customer" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Applied Coupon</td>
                      <td><input v-model="applied_coupon" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Email</td>
                      <td><input v-model="email" type="email" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">IP Address</td>
                      <td><input v-model="ip_address" type="number" disabled /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Quantity</td>
                      <td><input v-model="quantity" type="number" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Subtotal</td>
                      <td><input v-model="subtotal" type="number" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Tab content -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import  gql from "graphql-tag";
import  findManyReports from "~/graphql/generated/queries/findManyReports"

const ADD_REPORTS = gql`
    mutation ($applied_coupon:String!,$customer:String!,$quantity:String!,$subtotal:String!,$email:String!,$ip_address:String!){
    createOneReports(data: {applied_coupon: $applied_coupon, customer: $customer, quantity: $quantity, subtotal: $subtotal, email: $email, ip_address: $ip_address}) {
        applied_coupon
            customer
            quantity
            subtotal
            email
            ip_address
  }
}`;

export default {

    data() {
    return {
            applied_coupon: " ",
            customer: " ",
            quantity: " ",
            subtotal: " ",
            email: " ",
            ip_address: " "
        }
  },
    head: {
        title: 'Add New Report'
    }, 
/* eslint-disable camelcase */
   
  methods: {
      async addReport() {
            const applied_coupon = this.applied_coupon;
            const customer = this.customer;
            const quantity = this.quantity;
            const subtotal = this.subtotal;
            const email = this.email;
            const ip_address = this.ip_address;
            await this.$apollo.mutate({
                mutation: ADD_REPORTS,
                variables: {
                    applied_coupon,
                    customer,
                    quantity,
                    subtotal,
                    email,
                    ip_address,
                 },
        update: (cache, { data: { insertReports }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedReport = insertReports.returning;
                            console.log(insertedReport)
                            cache.writeQuery({
                                query: findManyReports
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../reports/reports'})
                }).catch(err => console.log(err));
                    this.applied_coupon = ' ';
                    this.customer = ' ';
                    this.quantity = ' ';
                    this.subtotal = ' ';
                    this.email = ' ';
                    this.ip_address = ' ';
                },
        },
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
