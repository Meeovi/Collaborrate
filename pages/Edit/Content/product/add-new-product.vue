<template>
  <div>
    <form enctype="multipart/form-data"   @submit.prevent="addProduct">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
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
              aria-controls="v-tabs-home" aria-selected="true">Create A New Product</a>
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
                        <select id="productType" v-model="types" name="template" class="form-attribute">
                          <option v-for="types in findManyProduct_types" :key="types.id" :hint="product_types">{{ types.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Attributes</label><br>
                        <select id="productAttribute" v-model="attributes" name="template" class="form-attribute">
                          <option v-for="attributes in attributes" :key="attributes.id" :hint="product_attribute">
                            {{ attributes.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Name</label><br>
                        <input v-model="name" type="text" required hint="Product Name" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Price</label><br>
                        <input v-model="price" type="number" placeholder="$" hint="Product Price" required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Tax Class</label><br>
                        <input v-model="tax_class" name="productTax" hint="Tax Class" type="text" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Quantity Per Source</label><br>
                        <input v-model="quantity_per_source" type="number" hint="Quantity" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Stock Status</label><br>
                        <select id="stockStatus" v-model="stock_status">
                          <option value="inStock">In Stock</option>
                          <option value="outStock">Out of Stock</option>
                          <option value="backorder">Backorder</option>
                          <option value="clearance">Clearance</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Height</label><br>
                        <input v-model="height" type="number" hint="Product Height" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Weight</label><br>
                        <input v-model="weight" type="number" hint="Product Weight" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Visibility</label><br>
                        <select id="visibility" v-model="visibility">
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
                        <select id="category" v-model="categories">
                          <option v-for="categories in categories" :key="categories.id" :hint="categories">
                            {{ categories.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="brand">Brands</label><br>
                        <select id="category" v-model="brand">
                          <option v-for="brand in findManyBrands" :key="brand.id" :hint="brand">
                            {{ brand.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="manufacture">manufacturer</label><br>
                        <select id="category" v-model="manufacture">
                          <option v-for="manufacture in manufacturers" :key="manufacture.id" :hint="manufacture">
                            {{ manufacture.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="events">Occassions</label><br>
                        <select id="category" v-model="occassions">
                          <option v-for="events in findManyEvents" :key="events.id" :hint="events">
                            {{ events.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="tags">Tags</label><br>
                        <select id="category" v-model="tags">
                          <option v-for="tags in tags" :key="tags.id" :hint="tags">
                            {{ tags.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="countries">Countries</label><br>
                        <select id="category" v-model="country">
                          <option v-for="countries in findManyCountries" :key="countries.id" :hint="countries">
                            {{ countries.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="zone">Zones</label><br>
                        <select id="zone" v-model="zone">
                          <option v-for="zone in findManyZones" :key="zone.id" :hint="zone">
                            {{ zone.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="attributes">Product Size</label><br>
                        <select id="size" v-model="size">
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
                        <label for="attributes">Product Format</label><br>
                        <select id="format" v-model="format">
                          <option value="digital">Digital</option>
                          <option value="physical">Physical</option>
                          <option value="service">Service</option>
                          <option value="subscription">Subscription</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="product">Related Products</label><br>
                        <select id="product" v-model="product">
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
                                  <textarea v-model="short_description" cols="50" rows="10" hint="Add a short Description"></textarea>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <textarea v-model="description" cols="50" rows="10" hint="Add a longer Description"></textarea>
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
                                <input v-model="meta_title" type="text" hint="Meta Title" required />
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <input v-model="meta_keywords" type="text" hint="Meta Keywords" />
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <textarea v-model="meta_description" cols="50" rows="10" hint="Add a Meta Description"></textarea>
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <input v-model="meta_url" type="url" hint="Meta URL" />
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
  import attributes from "../../graphql/query/findManyAttributes"
  import findManyProduct_types from "../../graphql/query/findManyProduct_types"
  import findManyBrands from "../../graphql/query/findManyBrands"
  import findManyEvents from "../../graphql/query/findManyEvents"
  import manufacturers from "../../graphql/query/manufacturers"
  import findManyTags from "../../graphql/query/findManyTags"
  import findManyZones from "../../graphql/query/findManyZones"

  const ADD_PRODUCTS = gql`
    mutation ($attributes: String!, $brand: String!, $categories: String!, $content: String!, $cost_string: String!, $country: String!, $created_at: String!, $customer_type: String!, $family: String!, $file: String!, $format: String!, $height: String!, $id: String!, $image: String!, $manufacture: String!, $manufacturer_part_number: String!, $occassions: String!, $name: String!, $meta_url: String!, $meta_title: String!, $meta_keywords: String!, $meta_description: String!, $part_number: String!, $price: String!, $product: String!, $quantity_per_source: String!, $related_product: String!, $salable_quantity: String!, $short_description: String!, $size: String!, $sku: String!, $status: String!, $stock_status: String!, $tags: String!, $tax_class: String!, $thumbnail: String!, $types: String!, $variants: String!, $visibility: String!, $websites: String!, $weight: String!, $zone: String!){
    createOneProducts(data: {attributes: $attributes, brand: $brand, categories: $categories, content: $content, cost_string: $cost_string, country: $country, created_at: $created_at, customer_type: $customer_type, family: $family, file: $file, format: $format, height: $height, id: $id, image: $image, manufacture: $manufacture, manufacturer_part_number: $manufacturer_part_number, occassions: $occassions, name: $name, meta_url: $meta_url, meta_title: $meta_title, meta_keywords: $meta_keywords, meta_description: $meta_description, part_number: $part_number, price: $price, product: $product, quantity_per_source: $quantity_per_source, related_product: $related_product, salable_quantity: $salable_quantity, short_description: $short_description, size: $size, sku: $sku, status: $status, stock_status: $stock_status, tags: $tags, tax_class: $tax_class, thumbnail: $thumbnail, types: $types, variants: $variants, visibility: $visibility, websites: $websites, weight: $weight, zone: $zone}) {
        attributes
        brand
        categories
        content
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
    data() {
      return {
        attributes: [],
        brand: [],
        categories: [],
        content: " ",
        cost_string: " ",
        country: [],
        created_at: " ",
        customer_type: " ",
        family: " ",
        file: " ",
        format: " ",
        height: " ",
        id: " ",
        image: " ",
        manufacture: [],
        manufacturer_part_number: " ",
        occassions: [],
        name: " ",
        meta_url: " ",
        meta_title: " ",
        meta_keywords: " ",
        meta_description: " ",
        part_number: " ",
        price: " ",
        product: [],
        quantity_per_source: " ",
        related_product: " ",
        salable_quantity: " ",
        short_description: " ",
        size: " ",
        sku: " ",
        status: " ",
        stock_status: " ",
        tags: [],
        tax_class: " ",
        thumbnail: " ",
        types: [],
        variants: " ",
        visibility: " ",
        websites: " ",
        weight: " ",
        zone: [],
        show: true
      }
    },
    head: {
      title: 'Add New Product'
    },

    methods: {
      async addProduct() {
        const attributes = this.attributes;
        const brand = this.brand;
        const categories = this.categories;
        const content = this.content;
        const cost_string = this.cost_string;
        const country = this.country;
        const created_at = this.created_at;
        const customer_type = this.customer_type;
        const family = this.family;
        const file = this.file;
        const format = this.format;
        const height = this.height;
        const id = this.id;
        const image = this.image;
        const manufacture = this.manufacture;
        const manufacturer_part_number = this.manufacturer_part_number;
        const occassions = this.occassions;
        const name = this.name;
        const meta_url = this.meta_url;
        const meta_title = this.meta_title;
        const meta_keywords = this.meta_keywords;
        const meta_description = this.meta_description;
        const part_number = this.part_number;
        const price = this.price;
        const product = this.product;
        const quantity_per_source = this.quantity_per_source;
        const related_product = this.related_product;
        const salable_quantity = this.salable_quantity;
        const short_description = this.short_description;
        const size = this.size;
        const sku = this.sku;
        const status = this.status;
        const stock_status = this.stock_status;
        const tags = this.tags;
        const tax_class = this.tax_class;
        const thumbnail = this.thumbnail;
        const types = this.types;
        const variants = this.variants;
        const visibility = this.visibility;
        const websites = this.websites;
        const weight = this.weight;
        const zone = this.zone;


        await this.$apollo.mutate({
          mutation: ADD_PRODUCTS,
          variables: {
            attributes,
            brand,
            categories,
            content,
            cost_string,
            country,
            created_at,
            customer_type,
            family,
            file,
            format,
            height,
            id,
            image: target.files[0],
            manufacture,
            manufacturer_part_number,
            occassions,
            name,
            meta_url,
            meta_title,
            meta_keywords,
            meta_description,
            part_number,
            price,
            product,
            quantity_per_source,
            related_product,
            salable_quantity,
            short_description,
            size,
            sku,
            status,
            stock_status,
            tags,
            tax_class,
            thumbnail,
            types,
            variants,
            visibility,
            websites,
            weight,
            zone,
          },
          update: (cache, {
            data: {
              insertCategories,
              insertCountries,
              insertAttributes,
              insertproduct_types,
              insertBrands,
              insertOccassions,
              insertZones,
              insertTags,
              insertmanufacturer,
              insertProducts,
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              const insertedCountries = insertCountries.returning;
              const insertedAttributes = insertAttributes.returning;
              const insertedproduct_types = insertproduct_types.returning;
              const insertedBrands = insertBrands.returning;
              const insertedOccassions = insertOccassions.returning;
              const insertedZones = insertZones.returning;
              const insertedTags = insertTags.returning;
              const insertedmanufacturer = insertmanufacturer.returning;
              const insertedProducts = insertProducts.returning;
              console.log(insertedCategory, insertedCountries, insertedAttributes, insertedproduct_types,
                insertedBrands, insertedOccassions, insertedZones, insertedTags, insertedmanufacturer,
                insertedProducts)
              cache.writeQuery({
                query: findManyProducts
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../inventory/products'
          })
        }).catch(err => console.log(err));
        this.attributes = ' ';
        this.brand = ' ';
        this.categories = ' ';
        this.content = ' ';
        this.cost_string = ' ';
        this.country = ' ';
        this.created_at = ' ';
        this.customer_type = ' ';
        this.family = ' ';
        this.file = ' ';
        this.format = ' ';
        this.height = ' ';
        this.id = ' ';
        this.image = ' ';
        this.manufacture = ' ';
        this.manufacturer_part_number = ' ';
        this.occassions = ' ';
        this.name = ' ';
        this.meta_url = ' ';
        this.meta_title = ' ';
        this.meta_keywords = ' ';
        this.meta_description = ' ';
        this.part_number = ' ';
        this.price = ' ';
        this.product = ' ';
        this.quantity_per_source = ' ';
        this.related_product = ' ';
        this.salable_quantity = ' ';
        this.short_description = ' ';
        this.size = ' ';
        this.sku = ' ';
        this.status = ' ';
        this.stock_status = ' ';
        this.tags = ' ';
        this.tax_class = ' ';
        this.thumbnail = ' ';
        this.types = ' ';
        this.variants = ' ';
        this.visibility = ' ';
        this.websites = ' ';
        this.weight = ' ';
        this.zone = ' ';
      },
    },
    apollo: {
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
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
      manufacturers: {
        prefetch: true,
        query: manufacturers
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
