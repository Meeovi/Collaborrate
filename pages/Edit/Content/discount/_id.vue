<template>
  <div>
    <form enctype="multipart/form-data"  v-for="discounts in findManyDiscounts" :key="discounts.id" @submit.prevent="updateDiscount(discount)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" hint="Delete" @click="deleteDiscount(discount)" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" hint="Save Gift_Certificate" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Gift Certificate or Gift Card</a>
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
                      <td style="text-align: right;">Gift Name</td>
                      <td><input :hint="discounts.name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Discount</td>
                      <td><input :hint="discounts.discount" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Expiration</td>
                      <td><input id="expiration" :hint="discounts.expiration" name="expiration" type="datetime-local" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Gift Type</td>
                      <td><select id="status" :hint="discounts.type" name="template" class="form-category">
                          <option value="giftCard">Gift Card</option>
                          <option value="giftCertificate">Gift Certificate</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td><textarea :hint="discounts.excerpt" cols="40" rows="10"></textarea>
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
  import findManyDiscounts from "../../graphql/query/findManyDiscounts"

  const UPDATE_DISCOUNT = gql`
    mutation ($name:String!,$discount:String!$expiration:String!,$excerpt:String!,$type:String){
    updateOneDiscounts(data: {name: $name, discount: $discount, expiration: $expiration, excerpt: $excerpt, type: $type} where: {id: $id} where: {id: $id}) {
        name
        discount
        expiration
        excerpt
        type
  }
}`;

const DELETE_DISCOUNT = gql`
  mutation deleteOneDiscounts($id: Int!){
  deleteOneDiscounts(where: {id: $id}){
    name
        discount
        expiration
        excerpt
        type
  }
}
`;

export default {
    head: {
        name: 'Edit Discount'
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
   async deleteDiscount(discounts){
    await this.$apollo.mutate({
        mutation: UPDATE_DISCOUNT,
        variables: {
          id: discounts.id
        },
        refetchQueries: [
          {
            query: findManyDiscounts
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../inventory/discounts'})
            }).catch(err => console.log(err));
    },
    async updateDiscount(discounts){
    await this.$apollo.mutate({
        mutation: DELETE_DISCOUNT,
        variables: {
          id: discounts.id
        },
        refetchQueries: [
          {
            query: findManyDiscounts
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyDiscounts: {
      query: findManyDiscounts,
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
