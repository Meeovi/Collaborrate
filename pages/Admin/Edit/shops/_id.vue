<template>
  <div>
    <FormulateForm v-for="shop in shops" :key="shop.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
      <div class="table table-responsive">
        <table class="table" >
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="shopAddOptions">
                <li>
                  <FormulateInput type="submit" label="Save" @click="addShop" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Shop Type</td>
              <td>
                <FormulateInput v-model="type" name="shopType" type="text" label="What type of shop is this?" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Attribute</td>
              <td>
                <FormulateInput v-model="product" name="shopAttribute" type="text"
                  label="Example is apple, bag, etc" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Shop Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Price</td>
              <td>
                <FormulateInput v-model="statistics" type="text" placeholder="$" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Tax Class</td>
              <td>
                <FormulateInput v-model="customers" name="shopTax" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Quantity</td>
              <td>
                <FormulateInput v-model="special_discounts" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Stock</td>
              <td>
                <FormulateInput v-model="coupons" type="text" name="stockStatus" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Height</td>
              <td>
                <FormulateInput v-model="reports" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Weight</td>
              <td>
                <FormulateInput v-model="articles" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Visibility</td>
              <td>
                <FormulateInput v-model="gift_certificates" name="shopVisibility" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Categories</td>
              <td>
                <FormulateInput v-model="categories" name="shopCategory" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Country of polls</td>
              <td>
                <FormulateInput v-model="polls" name="shopManufacture" type="text"
                  label="Where is this shop made?" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Size</td>
              <td>
                <FormulateInput v-model="quotes" name="shopSize" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Format</td>
              <td>
                <FormulateInput v-model="rating" name="shopFormat" type="text" label="Downloadable or Shipped" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br><br>
      <div id="accordionExample" class="accordion">
        <div class="accordion-item">
          <h2 id="headingOne" class="accordion-header">
            <FormulateInput class="accordion-button" type="button" data-mdb-toggle="collapse"
              data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Content
            </FormulateInput>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-mdb-parent="#accordionExample">
            <div class="accordion-body">
              <div class="table table-responsive">
                <table class="table" >
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Short Description</td>
                      <td>
                        <div class="form-check form-switch">
                          <FormulateInput v-model="reviews" type="textarea" label="Enter a short description"
                            validation="required|max:50,length" validation-name="excerpt" error-behavior="live"
                            :help="`Keep it under 50 characters. ${50 - reviews.length} left.`" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <div class="form-check form-switch">
                          <vue-simplemde id="longDescription" v-model="description" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="headingThree" class="accordion-header">
            <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
              data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Images and Videos
            </FormulateInput>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-mdb-parent="#accordionExample">
            <div class="accordion-body">
              <td><FormulateInput v-model="image" type="image" name="headshot" label="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/>
              </td>
            </div>
          </div>
          <div class="accordion-item">
            <h2 id="headingFour" class="accordion-header">
              <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Search Engine Optimization
              </FormulateInput>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
              data-mdb-parent="#accordionExample">
              <div class="accordion-body">
                <table class="table" >
                  <tbody>
                    <tr>
                      <td></td>
                      <td>Meta Title, Meta Keywords, and Meta Description are used to describe your shops to
                        potential customers using search engine like Google, Bing, etc.</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Meta Title</td>
                      <td>
                        <FormulateInput v-model="stocks" type="text" label="Shop Url" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Meta Keywords</td>
                      <td>
                        <FormulateInput v-model="tags" type="text" label="Shop Keywords" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Meta Description</td>
                      <td>
                        <FormulateInput v-model="users" type="textarea" label="Shop Description" rows="10"
                          cols="50" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shop Url</td>
                      <td>
                        <FormulateInput v-model="physical_store" type="url" label="Shop URL" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 id="headingFive" class="accordion-header">
              <FormulateInput class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Upload Shop File(s)
              </FormulateInput>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
              data-mdb-parent="#accordionExample">
              <div class="accordion-body">
                <td><FormulateInput v-model="file" type="file" name="file" label="Select your files to upload" help="Select one or more files to upload" multiple/></td>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import shops from '~/apollo/mutations/shop/shops'
import allShops from '~/apollo/queries/shop/shops'

const DELETE_SHOP = gql `
  mutation delete_shops($id: Int!){
  delete_shops(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_SHOP = gql `
  mutation update_shops($id: Int!){
  update_shops(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Shop'
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
   async deleteShop(shop){
    await this.$apollo.mutate({
        mutation: DELETE_SHOP,
        variables: {
          id: shop.id
        },
        refetchQueries: [
          {
            query: allShops
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/shops'})
            }).catch(err => console.log(err));
    },
    async updateShop(shop){
    await this.$apollo.mutate({
        mutation: UPDATE_SHOP,
        variables: {
          id: shop.id
        },
        refetchQueries: [
          {
            query: allShops
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    shops: {
      query: shops,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
