<template>
  <div>
    <FormulateForm v-for="product in products" :key="product.id" method="POST" @submit.prevent>
      <div class="table table-responsive">
        <table class="table" >
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="productAddOptions">
                <li>
                  <FormulateInput type="submit" @click="addProduct" label="Save" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Product Type</td>
              <td>
                <FormulateInput name="productType" type="text" label="What type of product is this?" />{{ product.type }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Attribute</td>
              <td>
                <FormulateInput name="productAttribute" type="text"
                  label="Example is apple, bag, etc" />{{ product.attribute }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Product Name</td>
              <td>
                <FormulateInput type="text" required />{{ product.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Price</td>
              <td>
                <FormulateInput type="text" placeholder="$" required />{{ product.price }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Tax Class</td>
              <td>
                <FormulateInput name="productTax" type="text" />{{ product.type_class }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Quantity</td>
              <td>
                <FormulateInput type="text" />{{ product.quantity_per_source }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Stock</td>
              <td>
                <FormulateInput type="text" name="stockStatus" />{{ product.stock_status }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Height</td>
              <td>
                <FormulateInput type="text" />{{ product.height }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Weight</td>
              <td>
                <FormulateInput type="text" />{{ product.weight }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Visibility</td>
              <td>
                <FormulateInput name="productVisibility" type="text" />{{ product.visibility }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Categories</td>
              <td>
                <FormulateInput name="productCategory" type="text" />{{ product.categories }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Product of manufacture</td>
              <td>
                <FormulateInput name="productManufacture" type="text"
                  label="Where is this product made?" />{{ product.manufacture }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Size</td>
              <td>
                <FormulateInput name="productSize" type="text" />{{ product.size }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Format</td>
              <td>
                <FormulateInput name="productFormat" type="text" label="Downloadable or Shipped" />{{ product.format }}
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
                          <FormulateInput type="textarea" label="Enter a short description"
                            validation="required|max:50,length" validation-name="excerpt" error-behavior="live"
                            :help="`Keep it under 50 characters. ${50 - short_description.length} left.`" />{{ product.short_description }}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <div class="form-check form-switch">
                          <vue-simplemde id="longDescription" />{{ product.content }}
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
              <td><FormulateInput type="image" upload-url="/media" name="headshot" label="Select an image to upload"
                help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif" />{{ product.image }}
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
                      <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to
                        potential customers using search engine like Google, Bing, etc.</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Meta Title</td>
                      <td>
                        <FormulateInput type="text" label="Product Url" required />{{ product.meta_title }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Meta Keywords</td>
                      <td>
                        <FormulateInput type="text" label="Product Keywords" />{{ product.meta_keywords }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Meta Description</td>
                      <td>
                        <FormulateInput type="textarea" label="Product Description" rows="10"
                          cols="50" />{{ product.meta_description }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Product Url</td>
                      <td>
                        <FormulateInput type="url" label="Product URL" />{{ product.meta_url }}
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
                Upload Product File(s)
              </FormulateInput>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
              data-mdb-parent="#accordionExample">
              <div class="accordion-body">
                <td><FormulateInput type="file" upload-url="/media" name="file" label="Select your documents to upload"
                  help="Select one or more files to upload" validation="mime:video/mp4,text/plain,text/csv,application/pdf,audio/mpeg,audio/vorbis" multiple /></td>{{ product.file }}
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
import products from '~/apollo/mutations/shop/products'
import allProducts from '~/apollo/queries/shop/products'

const DELETE_PRODUCT = gql `
  mutation delete_products($id: Int!){
  delete_products(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_PRODUCT = gql `
  mutation update_products($id: Int!){
  update_products(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Product'
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
   async deleteProduct(product){
    await this.$apollo.mutate({
        mutation: DELETE_PRODUCT,
        variables: {
          id: product.id
        },
        refetchQueries: [
          {
            query: allProducts
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/products'})
            }).catch(err => console.log(err));
    },
    async updateProduct(product){
    await this.$apollo.mutate({
        mutation: UPDATE_PRODUCT,
        variables: {
          id: product.id
        },
        refetchQueries: [
          {
            query: allProducts
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    products: {
      query: products,
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
