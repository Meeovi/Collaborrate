<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
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
                        <FormulateInput v-model="name" type="text" required label="Product Name" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="price" type="text" placeholder="$" label="Product Price" required />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="tax_class" name="productTax" label="Tax Class" type="text" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="quantity_per_source" type="number" label="Quantity" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="stock_status" type="text" name="stockStatus" label="Stock" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="height" type="text" label="Product Height" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <FormulateInput v-model="weight" type="text" label="Product Weight" />
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
                          <option v-for="product in products" :key="product" :value="product">
                            {{ product.name }}</option>
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
                                    :help="`Keep it under 50 characters. ${50 - short_description.length} left.`" />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <vue-simplemde id="longDescription" v-model="content" />
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
                                <FormulateInput v-model="meta_title" type="text" label="Meta Title" required />
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <FormulateInput v-model="meta_keywords" type="text" label="Meta Keywords" />
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <FormulateInput type="textarea" v-model="meta_description" label="Meta Description"
                                  rows="10" cols="50" />
                              </td>
                            </tr>
                            <tr class="col-lg-6">
                              <td>
                                <FormulateInput v-model="meta_url" type="url" label="Meta URL" />
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
  import  gql from "graphql-tag";

  import  products from "~/apollo/queries/shop/products";
  import  categories from "~/apollo/queries/shop/categories"
  import  countries from "~/apollo/queries/shop/countries"
  import  product_attribute from "~/apollo/queries/shop/attributes"
  import  product_types from "~/apollo/queries/shop/product-type"
  import  brands from "~/apollo/queries/shop/brands"
  import  contracts from "~/apollo/queries/marketing/contracts"
  import  occassions from "~/apollo/queries/shop/occassions"
  import  manufacturer from "~/apollo/queries/shop/manufacturer"
  import  tags from "~/apollo/queries/content/tags"
  import  zones from "~/apollo/queries/system/zones"

  const ADD_PRODUCTS = gql `
    mutation ($attributes: String!, $brand: String!, $categories: String!, $content: String!, $contract: String!, $cost_string: String!, $country: String!, $created_at: String!, $customer_type: String!, $family: String!, $file: String!, $format: String!, $height: String!, $id: String!, $image: String!, $manufacture: String!, $manufacturer_part_number: String!, $occassions: String!, $name: String!, $meta_url: String!, $meta_title: String!, $meta_keywords: String!, $meta_description: String!, $part_number: String!, $price: String!, $product: String!, $quantity_per_source: String!, $related_product: String!, $salable_quantity: String!, $short_description: String!, $size: String!, $sku: String!, $status: String!, $stock_status: String!, $tags: String!, $tax_class: String!, $thumbnail: String!, $types: String!, $variants: String!, $visibility: String!, $websites: String!, $weight: String!, $zone: String!){
    insert_products(objects: {attributes: $attributes, brand: $brand, categories: $categories, content: $content, contract: $contract, cost_string: $cost_string, country: $country, created_at: $created_at, customer_type: $customer_type, family: $family, file: $file, format: $format, height: $height, id: $id, image: $image, manufacture: $manufacture, manufacturer_part_number: $manufacturer_part_number, occassions: $occassions, name: $name, meta_url: $meta_url, meta_title: $meta_title, meta_keywords: $meta_keywords, meta_description: $meta_description, part_number: $part_number, price: $price, product: $product, quantity_per_source: $quantity_per_source, related_product: $related_product, salable_quantity: $salable_quantity, short_description: $short_description, size: $size, sku: $sku, status: $status, stock_status: $stock_status, tags: $tags, tax_class: $tax_class, thumbnail: $thumbnail, types: $types, variants: $variants, visibility: $visibility, websites: $websites, weight: $weight, zone: $zone}) {
        affected_rows
        returning {
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
  }
}`;


  export default {
    data() {
      return {
        attributes: [ ],
        brand: [ ],
        categories: [ ],
        content: " ",
        contract: [ ],
        cost_string: " ",
        country: [ ],
        created_at: " ",
        customer_type: " ",
        family: " ",
        file: " ",
        format: " ",
        height: " ",
        id: " ",
        image: " ",
        manufacture: [ ],
        manufacturer_part_number: " ",
        occassions: [ ],
        name: " ",
        meta_url: " ",
        meta_title: " ",
        meta_keywords: " ",
        meta_description: " ",
        part_number: " ",
        price: " ",
        product: [ ],
        quantity_per_source: " ",
        related_product: " ",
        salable_quantity: " ",
        short_description: " ",
        size: " ",
        sku: " ",
        status: " ",
        stock_status: " ",
        tags: [ ],
        tax_class: " ",
        thumbnail: " ",
        types: [ ],
        variants: " ",
        visibility: " ",
        websites: " ",
        weight: " ",
        zone: [ ],
        show: true
      }
    },
    head: {
      title: 'Add New Product'
    },

    methods: {
      async addProduct({
        target
      }) {
        const attributes = this.attributes;
        const brand = this.brand;
        const categories = this.categories;
        const content = this.content;
        const contract = this.contract;
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
            contract,
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
              insertContracts
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
              const insertedContracts = insertContracts.returning;
              console.log(insertedCategory, insertedCountries, insertedAttributes, insertedproduct_types, insertedBrands, insertedOccassions, insertedZones, insertedTags, insertedmanufacturer, insertedProducts, insertedContracts)
              cache.writeQuery({
                query: products
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../shop/products'
          })
        }).catch(err => console.log(err));
        this.attributes = ' ';
        this.brand = ' ';
        this.categories = ' ';
        this.content = ' ';
        this.contract = ' ';
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
      categories: {
        prefetch: true,
        query: categories
      },
      countries: {
          prefetch: true,
          query: countries
          },
      product_attribute: {
        prefetch: true,
        query: product_attribute
      },
      product_types: {
        prefetch: true,
        query: product_types
      },
      brands: {
        prefetch: true,
        query: brands
      },
      contracts: {
        prefetch: true,
        query: contracts
      },
      manufacturer: {
        prefetch: true,
        query: manufacturer
      },
      occassions: {
        prefetch: true,
        query: occassions
      },
      tags: {
        prefetch: true,
        query: tags
      },
      zones: {
        prefetch: true,
        query: zones
      },
      products: {
        prefetch: true,
        query: products
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
