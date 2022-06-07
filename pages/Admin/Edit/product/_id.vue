<template>
  <div>
    <FormulateForm v-for="products in products" :key="products.id" method="POST" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Product" @click="addProduct" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Product</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody class="row">
                    <tr class="col-lg-6">
                      <td>
                        <label for="type">Product Types</label><br>
                        <select id="productType" v-model="types" name="template" class="form-attribute">
                          <option v-for="types in product_types" :key="types" :value="product_types">{{ types.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Attributes</label><br>
                        <select id="productAttribute" v-model="attributes" name="template" class="form-attribute">
                          <option v-for="attributes in product_attribute" :key="attributes" :value="product_attribute">
                            {{ attributes.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="name" type="text" required label="Product Name" />{{ products.name }}
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="price" type="text" placeholder="$" label="Product Price" required />{{ products.price }}
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="tax_class" tax_class="productTax" label="Tax Class" type="text" />{{ products.tax_class }}
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="quantity_per_source" type="number" label="Quantity" />{{ products.quantity_per_source }}
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="stock_status" type="text" name="stockStatus" label="Stock" />{{ products.stock_status }}
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="height" type="text" label="Product Height" />{{ products.height }}
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="weight" type="text" label="Product Weight" />{{ products.weight }}
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="visibility" type="select" :options="{first: 'Public', second: 'Draft'}"
                          label="Product Visibility" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="categories">Categories</label><br>
                        <select id="category" v-model="categories" name="template" class="form-category">
                          <option v-for="categories in categories" :key="categories" :value="categories">
                            {{ categories.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="brand">Brands</label><br>
                        <select id="category" v-model="brand" name="template" class="form-category">
                          <option v-for="brand in brands" :key="brand" :value="brand">
                            {{ brand.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="manufacture">manufacturer</label><br>
                        <select id="category" v-model="manufacture" name="template" class="form-category">
                          <option v-for="manufacture in manufacturer" :key="manufacture" :value="manufacture">
                            {{ manufacture.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="occassions">Occassions</label><br>
                        <select id="category" v-model="occassions" name="template" class="form-category">
                          <option v-for="occassions in occassions" :key="occassions" :value="occassions">
                            {{ occassions.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="tags">Tags</label><br>
                        <select id="category" v-model="tags" name="template" class="form-category">
                          <option v-for="tags in tags" :key="tags" :value="tags">
                            {{ tags.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="countries">Countries</label><br>
                        <select id="category" v-model="country" name="template" class="form-category">
                          <option v-for="countries in countries" :key="countries" :value="countries">
                            {{ countries.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="contract">Contracts</label><br>
                        <select id="contract" v-model="contract" name="template" class="form-category">
                          <option v-for="contract in contracts" :key="contract" :value="contract">
                            {{ contract.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="zone">Zones</label><br>
                        <select id="zone" v-model="zone" name="template" class="form-category">
                          <option v-for="zone in zones" :key="zone" :value="zone">
                            {{ zone.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="size" type="select"
                          :options="{first: 'XS', second: 'Small', third: 'Medium', fourth: 'Large', fifth: 'XL', sixth: 'XXL', seventh: '3XL'}"
                          label="Product Size" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="format" type="select"
                          :options="{first: 'Downloadable', second: 'Physical'}" label="Product Format" />
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <label for="product">Related Products</label><br>
                        <select id="product" v-model="product" name="template" class="form-category">
                          <option v-for="products in products" :key="products" :value="products">
                            {{ products.name }}</option>
                        </select>
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
                        <table class="table">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Short Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <FormulateInput v-model="short_description" type="textarea"
                                    label="Enter a short description" validation="required|max:50,length"
                                    validation-name="excerpt" error-behavior="live"
                                    :help="`Keep it under 50 characters. ${50 - short_description.length} left.`" />{{ products.short_description }}
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <vue-simplemde id="longDescription" v-model="content" />{{ products.description }}
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
                      <td>
                        <FormulateInput type="image" name="headshot" v-model="image" label="Select an image to upload"
                          help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif" />
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
                        <table class="table">
                          <tbody class="row">
                            <tr>
                              <td></td>
                              <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to
                                potential customers using search engine like Google, Bing, etc.</td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <FormulateInput v-model="meta_title" type="text" label="Meta Title" required />{{ products.meta_title }}
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <FormulateInput v-model="meta_keywords" type="text" label="Meta Keywords" />{{ products.meta_keywords }}
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <FormulateInput type="textarea" v-model="meta_description" label="Meta Description"
                                  rows="10" cols="50" />{{ products.meta_description }}
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <FormulateInput v-model="meta_url" type="url" label="Meta URL" />{{ products.meta_url }}
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
                        <td>
                          <FormulateInput type="file" name="file" v-model="file" label="Select your files to upload"
                            help="Select one or more files to upload" multiple />
                        </td>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormulateForm>
    <div class="product-footer">
      <li><a href="/admin/add-new/add-new-category" target="_blank">
          <FormulateInput type="button" label="Add New Category" /></a></li>
      <li><a href="/admin/add-new/add-new-attribute" target="_blank">
          <FormulateInput type="button" label="Add New Product Attribute" /></a></li>
      <li><a href="/admin/add-new/add-new-producttype" target="_blank">
          <FormulateInput type="button" label="Add New Product Type" /></a></li>
    </div>
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
