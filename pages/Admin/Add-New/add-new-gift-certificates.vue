<template>
  <div>
    <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
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
                      <td style="text-align: right;">Gift Name</td>
                      <td><FormulateInput v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount</td>
                      <td><FormulateInput v-model="discount" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Expiration</td>
                      <td><FormulateInput id="expiration" v-model="expiration" name="expiration" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Gift Type</td>
                      <td><FormulateInput id="expiration" v-model="type" name="expiration" type="text" label="Gift Card or Gift Certificate" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td><FormulateInput id="reviewDescription" v-model="excerpt" type="textarea" label="Enter information about this gift" validation="required|max:50,length" :help="`Keep it under 50 characters. ${50 - excerpt.length} left.`" />
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
// eslint-disable-next-line camelcase
import gift_certificate from "~/apollo/queries/sales/gift_certificates"

const ADD_GIFT_CERTIFICATE = gql`
    mutation ($name:String!,$discount:String!$expiration:String!,$excerpt:String!,$type:String){
    insert_gift_certificates(objects: {name: $name, discount: $discount, expiration: $expiration, excerpt: $excerpt, type: $type}) {
        affected_rows
        returning {
            name
            discount
            expiration
            excerpt
            type
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
            type: "",
        }
  },
    head: {
        title: 'Add New Gift_Certificate'
    }, 
/* eslint-disable camelcase */
   
  methods: {
      async addGift_Certificate() {
            const name = this.name;
            const discount = this.discount;
            const expiration = this.expiration;
            const excerpt = this.excerpt;
            const type = this.type;
            await this.$apollo.mutate({
                mutation: ADD_GIFT_CERTIFICATE,
                variables: {
                    name,
                    discount,
                    expiration,
                    excerpt,
                    type,
                 },
        update: (cache, { data: { insertGift_Certificates }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedGift_Certificate = insertGift_Certificates.returning;
                            console.log(insertedGift_Certificate)
                            cache.writeQuery({
                                query: gift_certificate
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../sales/certificates'})
                }).catch(err => console.log(err));
                    this.name = ' ';
                    this.discount = ' ';
                    this.expiration = ' ';
                    this.excerpt = ' ';
                    this.type = '';
                }, 
        },
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
