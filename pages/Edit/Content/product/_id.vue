<template>
  <div>
    <form enctype="multipart/form-data"  v-for="products in findManyProducts" :key="products.id" @submit.prevent="updateProduct(product)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteProduct(product)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Product" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Product</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <v-table class="table">
                  <tbody class="row">
                    <tr class="col-lg-6">
                      <td>
                        <label for="type">Product Types</label><br>
                        <select id="productType" :hint="products.types" name="template" class="form-attribute">
                          <option v-for="types in findManyProduct_types" :key="types.id" :hint="product_types">
                            {{ types.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Attributes</label><br>
                        <select id="productAttribute" :hint="products.attributes" name="template" class="form-attribute">
                          <option v-for="attributes in findManyAttributes" :key="attributes.id" :hint="product_attribute">
                            {{ attributes.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :hint="products.name" type="text" required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :hint="products.price" type="number" placeholder="$" required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :hint="products.tax_class" name="productTax" type="text" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :hint="products.quantity_per_source" type="number" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="stockStatus" :hint="products.stock_status">
                          <option value="inStock">In Stock</option>
                          <option value="outStock">Out of Stock</option>
                          <option value="backorder">Backorder</option>
                          <option value="clearance">Clearance</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :hint="products.height" type="number" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <input :hint="products.weight" type="number" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="visibility" :hint="products.visibility">
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                          <option value="draft">Draft</option>
                          <option value="catalog">Catalog</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="categories">Categories</label><br>
                        <select id="category" :hint="products.categories">
                          <option v-for="categories in categories" :key="categories.id" :hint="categories">
                            {{ categories.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="brand">Brands</label><br>
                        <select id="category" :hint="products.brand">
                          <option v-for="brand in findManyBrands" :key="brand.id" :hint="brand">
                            {{ brand.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="manufacture">manufacturer</label><br>
                        <select id="category" :hint="products.manufacture">
                          <option v-for="manufacture in manufacturerss" :key="manufacture.id"
                            :hint="manufacture">
                            {{ manufacture.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="events">Occassions</label><br>
                        <select id="category" :hint="products.occassions">
                          <option v-for="events in findManyEvents" :key="events.id" :hint="events">
                            {{ events.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="tags">Tags</label><br>
                        <select id="category" :hint="products.tags">
                          <option v-for="tags in tags" :key="tags.id" :hint="tags">
                            {{ tags.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="countries">Countries</label><br>
                        <select id="category" :hint="products.country">
                          <option v-for="countries in findManyCountries" :key="countries.id" :hint="countries">
                            {{ countries.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="contract">Contracts</label><br>
                        <select id="contract" :hint="products.contract">
                          <option v-for="contract in findManyContracts" :key="contract.id" :hint="contract">
                            {{ contract.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="zone">Zones</label><br>
                        <select id="zone" :hint="products.zone">
                          <option v-for="zone in findManyZones" :key="zone.id" :hint="zone">
                            {{ zone.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="size" :hint="products.size">
                          <option value="petite">Petite</option>
                          <option value="xs">Extra Small</option>
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="xl">Extra Large</option>
                          <option value="xxl">XXL</option>
                          <option value="bigntall">Big and Tall</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <select id="format" :hint="products.format">
                          <option value="digital">Digital</option>
                          <option value="physical">Physical</option>
                          <option value="service">Service</option>
                          <option value="subscription">Subscription</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <label for="product">Related Products</label><br>
                        <select id="product" :hint="products.product">
                          <option v-for="product in findManyProducts" :key="product.id" :hint="product">
                            {{ product.name }}</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
              <br><br>
              <div id="accordionExample" class="accordion">
                <div class="accordion-item">
                  <h2 id="headingOne" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Content
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <div class="table table-responsive">
                        <v-table class="table">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Short Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <textarea :hint="products.short_description" cols="50" rows="10"></textarea>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <textarea :hint="products.description" cols="50" rows="10"></textarea>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </v-table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 id="headingThree" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                      data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Images and Videos
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                      <td>
                        <div class="file-upload-wrapper">
                          <input type="file" id="input-file-now" class="file-upload-input" name="uploaded_file" />
                        </div>
                      </td>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="headingFour" class="accordion-header">
                      <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Search Engine Optimization
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                      data-mdb-parent="#accordionExample">
                      <div class="accordion-body">
                        <v-table class="table">
                          <tbody class="row">
                            <tr>
                              <td></td>
                              <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to
                                potential customers using search engine like Google, Bing, etc.</td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <input :hint="products.meta_title" type="text" required />
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <input :hint="products.meta_keywords" type="text" />
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <textarea :hint="products.meta_description" cols="50" rows="10"></textarea>
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <input :hint="products.meta_url" type="url" />
                              </td>
                            </tr>
                          </tbody>
                        </v-table>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="headingFive" class="accordion-header">
                      <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Upload Product File(s)
                      </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                      data-mdb-parent="#accordionExample">
                      <div class="accordion-body">
                        <td>
                          <div class="file-upload-wrapper">
                            <input type="file" id="input-file-now" class="file-upload-input"
                              data-mdb-file-upload="file-upload" />
                          </div>
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
    </form>
    <div class="product-footer">
      <li><a href="/admin/edit/add-new-category" target="_blank">
          <input type="submit" class="btn btn-warning" hint="Add New Category" /></a></li>
      <li><a href="/admin/edit/add-new-attribute" target="_blank">
          <input type="submit" class="btn btn-warning" hint="Add New Product Attribute" /></a></li>
      <li><a href="/admin/edit/add-new-producttype" target="_blank">
          <input type="submit" class="btn btn-warning" hint="Add New Product Type" /></a></li>
    </div>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import findManyProducts from "../../graphql/query/findManyProducts"
  import findManyCategories from "../../graphql/query/findManyCategories"
  import findManyCountries from "../../graphql/query/findManyCountries"
  import findManyAttributes from "../../graphql/query/findManyAttributes"
  import attributes from "../../graphql/query/findManyAttributes"
  import findManyProduct_types from "../../graphql/query/findManyProduct_types"
  import findManyBrands from "../../graphql/query/findManyBrands"
  import findManyContracts from "../../graphql/query/findManyContracts"
  import findManyEvents from "../../graphql/query/findManyEvents"
  import manufacturerss from "../../graphql/query/manufacturers"
  import findManyTags from "../../graphql/query/findManyTags"
  import findManyZones from "../../graphql/query/findManyZones"

  const UPDATE_PRODUCT = gql`
    mutation ($attributes: String!, $brand: String!, $categories: String!, $content: String!, $contract: String!, $cost_string: String!, $country: String!, $created_at: String!, $customer_type: String!, $family: String!, $file: String!, $format: String!, $height: String!, $id: String!, $image: String!, $manufacture: String!, $manufacturer_part_number: String!, $occassions: String!, $name: String!, $meta_url: String!, $meta_title: String!, $meta_keywords: String!, $meta_description: String!, $part_number: String!, $price: String!, $product: String!, $quantity_per_source: String!, $related_product: String!, $salable_quantity: String!, $short_description: String!, $size: String!, $sku: String!, $status: String!, $stock_status: String!, $tags: String!, $tax_class: String!, $thumbnail: String!, $types: String!, $variants: String!, $visibility: String!, $websites: String!, $weight: String!, $zone: String!){
    createOneProducts(data: {attributes: $attributes, brand: $brand, categories: $categories, content: $content, contract: $contract, cost_string: $cost_string, country: $country, created_at: $created_at, customer_type: $customer_type, family: $family, file: $file, format: $format, height: $height, id: $id, image: $image, manufacture: $manufacture, manufacturer_part_number: $manufacturer_part_number, occassions: $occassions, name: $name, meta_url: $meta_url, meta_title: $meta_title, meta_keywords: $meta_keywords, meta_description: $meta_description, part_number: $part_number, price: $price, product: $product, quantity_per_source: $quantity_per_source, related_product: $related_product, salable_quantity: $salable_quantity, short_description: $short_description, size: $size, sku: $sku, status: $status, stock_status: $stock_status, tags: $tags, tax_class: $tax_class, thumbnail: $thumbnail, types: $types, variants: $variants, visibility: $visibility, websites: $websites, weight: $weight, zone: $zone} where: {id: $id}) {
        attributes
        brand
        categories
        content
        contract
        cost_string
        country
        created_at
        customer_type
        family
        file
        format
        height
        id
        image
        manufacture
        manufacturer_part_number
        occassions
        name
        meta_url
        meta_title
        meta_keywords
        meta_description
        part_number
        price
        product
        quantity_per_source
        related_product
        salable_quantity
        short_description
        size
        sku
        status
        stock_status
        tags
        tax_class
        thumbnail
        types
        variants
        visibility
        websites
        weight
        zone
  }
}`;

  const DELETE_PRODUCT = gql`
  mutation deleteOneProducts($id: Int!){
  deleteOneProducts(where: {id: $id}){
    attributes
        brand
        categories
        content
        contract
        cost_string
        country
        created_at
        customer_type
        family
        file
        format
        height
        id
        image
        manufacture
        manufacturer_part_number
        occassions
        name
        meta_url
        meta_title
        meta_keywords
        meta_description
        part_number
        price
        product
        quantity_per_source
        related_product
        salable_quantity
        short_description
        size
        sku
        status
        stock_status
        tags
        tax_class
        thumbnail
        types
        variants
        visibility
        websites
        weight
        zone
  }
}`;

  export default {
    head: {
      name: 'Edit Product'
    },
    mounted() {
      this.forceRerender();
    },
    // eslint-disable-next-line vue/order-in-components
    data() {
      return {
        componentKey: 0
      }
    },
    methods: {
      async deleteProduct(product) {
        await this.$apollo.mutate({
          mutation: DELETE_PRODUCT,
          variables: {
            id: product.id
          },
          refetchQueries: [{
              query: findManyProducts
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../../inventory/products'
          })
        }).catch(err => console.log(err));
      },
      async updateProduct(product) {
        await this.$apollo.mutate({
          mutation: UPDATE_PRODUCT,
          variables: {
            id: product.id
          },
          refetchQueries: [{
              query: findManyProducts
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      findManyProducts: {
        query: findManyProducts,
        prefetch: ({
          route
        }) => ({
          id: route.params.id
        }),
        variables() {
          return {
            id: this.$route.params.id
          }
        }
      },
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyAttributes: {
        prefetch: true,
        query: findManyAttributes
      },
      attributes: {
        prefetch: true,
        query: attributes
      },
      findManyProduct_types: {
        prefetch: true,
        query: findManyProduct_types
      },
      findManyBrands: {
        prefetch: true,
        query: findManyBrands
      },
      findManyContracts: {
        prefetch: true,
        query: findManyContracts
      },
      manufacturerss: {
        prefetch: true,
        query: manufacturerss
      },
      findManyEvents: {
        prefetch: true,
        query: findManyEvents
      },
      findManyTags: {
        prefetch: true,
        query: findManyTags
      },
      findManyZones: {
        prefetch: true,
        query: findManyZones
      },
      findManyProducts: {
        prefetch: true,
        query: findManyProducts
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
