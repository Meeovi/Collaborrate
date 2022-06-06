<template>
  <div>
    <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><FormulateInput type="reset" class="btn btn-warning" label="Reset" /></a>
          <a class="navbar-brand"><FormulateInput type="button" @click="addNewsletter" label="Save Newsletter" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create a New Newsletter Customer</a>
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
                      <td style="text-align: right;">Customer First Name</td>
                      <td><FormulateInput v-model="customer_first_name" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Cusotmer Last Name</td>
                      <td><FormulateInput v-model="customer_last_name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Email</td>
                      <td><FormulateInput v-model="email" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Store</td>
                      <td><FormulateInput v-model="store" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Website</td>
                      <td><FormulateInput id="websites" v-model="websites" name="websites" type="url" />
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
import newsletters from "~/apollo/queries/marketing/newsletter_subscribers"

const ADD_NEWSLETTERS = gql`
    mutation ($customer_first_name:String!,$customer_last_name:String!$email:String!,$websites:String!,$store:String){
    insert_newsletter_subscribers(objects: {customer_first_name: $customer_first_name, customer_last_name: $customer_last_name, email: $email, websites: $websites, store: $store}) {
        affected_rows
        returning {
            customer_first_name
            customer_last_name
            email
            websites
            store
    }
  }
}`;

export default {

    data() {
    return {
            customer_first_name: " ",
            customer_last_name: " ",
            email: " ",
            websites: " ",
            store: " ",
        }
  },
    head: {
        title: 'Add New Newsletter'
    }, 
/* eslint-disable camelcase */
   
  methods: {
      async addNewsletter() {
            const customer_first_name = this.customer_first_name;
            const customer_last_name = this.customer_last_name;
            const email = this.email;
            const websites = this.websites;
            const store = this.store;
            await this.$apollo.mutate({
                mutation: ADD_NEWSLETTERS,
                variables: {
                    customer_first_name,
                    customer_last_name,
                    email,
                    websites,
                    store,
                 },
        update: (cache, { data: { insertNewsletters }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedNewsletter = insertNewsletters.returning;
                            console.log(insertedNewsletter)
                            cache.writeQuery({
                                query: newsletters
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../marketing/customer-engagement'})
                }).catch(err => console.log(err));
                    this.customer_first_name = ' ';
                    this.customer_last_name = ' ';
                    this.email = ' ';
                    this.websites = ' ';
                },
        },
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
