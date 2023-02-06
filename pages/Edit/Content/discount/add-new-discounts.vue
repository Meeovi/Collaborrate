<template>
  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addDiscount">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" hint="Delete"  @click="deleteNewsletter(newsletter)" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" hint="Save Discount" /></a>
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
                <v-table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Discount Name</td>
                      <td><input v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount</td>
                      <td><input v-model="discount" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Expiration</td>
                      <td><input id="expiration" v-model="expiration" name="expiration" type="datetime-local" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount Type</td>
                      <td><select id="status" v-model="type" name="template" class="form-category">
                          <option value="giftCard">Gift Card</option>
                          <option value="coupon">Coupon</option>
                          <option value="giftCertificate">Gift Certificate</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Summary</td>
                      <td><textarea v-model="excerpt" cols="40" rows="10"></textarea>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
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
  // eslint-disable-next-line camelcase
  import  findManyDiscounts from '../../graphql/query/findManyDiscounts'

  const ADD_DISCOUNT = gql `
    mutation ($name:String!,$discount:String!$expiration:String!,$excerpt:String!,$type:String){
    createOneDiscounts(data: {name: $name, discount: $discount, expiration: $expiration, excerpt: $excerpt, type: $type}) {
        name
        discount
        expiration
        excerpt
        type
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
      title: 'Add New Discount'
    },
    /* eslint-disable camelcase */

    methods: {
      async addDiscount() {
        const name = this.name;
        const discount = this.discount;
        const expiration = this.expiration;
        const excerpt = this.excerpt;
        const type = this.type;
        await this.$apollo.mutate({
          mutation: ADD_DISCOUNT,
          variables: {
            name,
            discount,
            expiration,
            excerpt,
            type,
          },
          update: (cache, {
            data: {
              insertDiscounts
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedDiscount = insertDiscounts.returning;
              console.log(insertedDiscount)
              cache.writeQuery({
                query: findManyDiscounts
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../../marketing/discounts'
          })
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
  input,
  select,
  option {
    padding: 5px;
  }

</style>
