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
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="productAddOptions">
                <li><a href="/admin/add-new/add-new-attribute">
                    <FormulateInput type="button" label="Add Attribute" /></a></li>
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
                <FormulateInput v-model="type" name="productType" type="text" label="What type of product is this?" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Attributes</td>
              <td>
                <select id="category" v-model="attributes" name="template" class="form-attribute">
                  <option v-for="attributes in attributes" :key="attributes" :value="attributes">{{ attributes.name }}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Product Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Price</td>
              <td>
                <FormulateInput v-model="price" type="text" placeholder="$" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Tax Class</td>
              <td>
                <FormulateInput v-model="tax_class" name="productTax" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Quantity</td>
              <td>
                <FormulateInput v-model="quantity_per_source" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Stock</td>
              <td>
                <FormulateInput v-model="stock_status" type="text" name="stockStatus" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Height</td>
              <td>
                <FormulateInput v-model="height" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Weight</td>
              <td>
                <FormulateInput v-model="weight" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Visibility</td>
              <td>
                <FormulateInput v-model="visibility" type="select" :options="{first: 'Public', second: 'Draft'}" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Categories</td>
              <td>
                <select id="category" v-model="categories" name="template" class="form-category">
                  <option v-for="categories in categories" :key="categories" :value="categories">{{ categories.name }}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Country of manufacture</td>
              <td>
                <FormulateInput v-model="manufacture" name="productManufacture" type="text"
                  label="Who made this product?" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Size</td>
              <td>
                <FormulateInput v-model="size" name="productSize" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Format</td>
              <td>
                <FormulateInput v-model="format" type="select" :options="{first: 'Downloadable', second: 'Physical'}" />
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
                          <FormulateInput v-model="short_description" type="textarea" label="Enter a short description"
                            validation="required|max:50,length" validation-name="excerpt" error-behavior="live"
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
              <td><FormulateInput type="image" name="headshot" v-model="image" label="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/>
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
                        <FormulateInput v-model="meta_title" type="text" label="Product Url" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Meta Keywords</td>
                      <td>
                        <FormulateInput v-model="meta_keywords" type="text" label="Product Keywords" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Meta Description</td>
                      <td>
                        <FormulateInput type="textarea" v-model="meta_description" label="Product Description" rows="10"
                          cols="50" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Product Url</td>
                      <td>
                        <FormulateInput v-model="meta_url" type="url" label="Product URL" />
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
                <td><FormulateInput type="file" name="file" v-model="file" label="Select your files to upload" help="Select one or more files to upload" multiple/></td>
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
  </div>
</template>

<script>
import gql from "graphql-tag";

import {
    products
  } from "~/apollo/queries/shop/products";
  import categories from "~/apollo/queries/shop/categories"
  // import countries from "~/apollo/queries/shop/countries"
  import attributes from "~/apollo/queries/shop/attributes"

  const ADD_PRODUCTS = gql `
    mutation ($thumbnail: String!,$name: String!,$attribute: String!,$price: String!,$quantity_per_source: String!,$salable_quantity: String!,$visibility: String!,$websites: String!,$product: String!,$tax_class: String!,$stock_status: String!,$weight: String!,$manufacture: String!,$categories: String!,$country: String!,$size: String!,$format: String!,$height: String!,$content: String!,$short_description: String!,$image: Upload!,$meta_title: String!,$meta_keywords: String!,$meta_description: String!,$meta_url: String!,$file: Upload!,$type: String){
    insert_products(objects: {thumbnail: $thumbnail,name: $name,attribute: $attribute,price: $price,quantity_per_source: $quantity_per_source,salable_quantity: $salable_quantity,visibility: $visibility,manufacture: $manufacture,categories: $categories,websites: $websites,product: $product,tax_class: $tax_class,stock_status: $stock_status,weight: $weight,country: $country,size: $size,format: $format,height: $height,content: $content,short_description: $short_description,image: $image,meta_title: $meta_title,meta_keywords: $meta_keywords,meta_description: $meta_description,meta_url: $meta_url,file: $file,type: $type}) {
        affected_rows
        returning {
            thumbnail
            name
            attribute
            price
            quantity_per_source
            salable_quantity
            visibility
            manufacture
            categories
            websites
            product
            tax_class
            stock_status
            weight
            country
            size
            format
            height
            content
            short_description
            image
            meta_title
            meta_keywords
            meta_description
            meta_url
            file
            type
    }
  }
}`;


  export default {
    data() {
      return {
        categories: [],
        countries: [],
        attributes: [],
        thumbnail: " ",
        name: " ",
        attribute: " ",
        price: " ",
        quantity_per_source: " ",
        salable_quantity: " ",
        visibility: " ",
        websites: " ",
        product: " ",
        tax_class: " ",
        manufacture: " ",
        stock_status: " ",
        weight: " ",
        country: " ",
        size: " ",
        format: " ",
        height: " ",
        content: " ",
        short_description: " ",
        image: " ",
        meta_title: " ",
        meta_keywords: " ",
        meta_description: " ",
        meta_url: " ",
        file: " ",
        type: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Product'
    },

    methods: {
      async addProduct({ target }) {
        const thumbnail = this.thumbnail;
        const name = this.name;
        // eslint-disable-next-line camelcase
        const attribute = this.attribute;
        const price = this.price;
        // eslint-disable-next-line camelcase
        const quantity_per_source = this.quantity_per_source;
        // eslint-disable-next-line camelcase
        const salable_quantity = this.salable_quantity;
        const visibility = this.visibility;
        const manufacture = this.manufacture;
        const categories = this.categories;
        const websites = this.websites;
        const product = this.product;
        // eslint-disable-next-line camelcase
        const tax_class = this.tax_class;
        // eslint-disable-next-line camelcase
        const stock_status = this.stock_status;
        const weight = this.weight;
        const country = this.country;
        const size = this.size;
        const format = this.format;
        // eslint-disable-next-line camelcase
        const height = this.height;
        const content = this.content;
        // eslint-disable-next-line camelcase
        const short_description = this.short_description;
        // const image = this.image;
        // eslint-disable-next-line camelcase
        const meta_title = this.meta_title;
        // eslint-disable-next-line camelcase
        const meta_keywords = this.meta_keywords;
        // eslint-disable-next-line camelcase
        const meta_description = this.meta_description;
        // eslint-disable-next-line camelcase
        const meta_url = this.meta_url;
        const file = this.file;
        const type = this.type;
        
        await this.$apollo.mutate({
          mutation: ADD_PRODUCTS,
          variables: {
            thumbnail,
            name,
            attribute,
            price,
            quantity_per_source,
            salable_quantity,
            visibility,
            manufacture,
            categories,
            websites,
            product,
            tax_class,
            stock_status,
            weight,
            country,
            size,
            format,
            height,
            content,
            short_description,
            image: target.files[0],
            meta_title,
            meta_keywords,
            meta_description,
            meta_url,
            file,
            type,
          },
          update: (cache, {
            data: {
              insertCategories,
              insertCountries
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              const insertedCountries = insertCountries.returning;
              console.log(insertedCategory, insertedCountries)
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
        this.thumbnail = ' ';
        this.name = ' ';
        this.attribute = ' ';
        this.price = ' ';
        this.quantity_per_source = ' ';
        this.salable_quantity = ' ';
        this.visibility = ' ';
        this.manufacture = ' ';
        this.categories = ' ';
        this.websites = ' ';
        this.product = ' ';
        this.tax_class = ' ';
        this.stock_status = ' ';
        this.weight = ' ';
        this.country = ' ';
        this.size = ' ';
        this.format = ' ';
        this.height = ' ';
        this.content = ' ';
        this.short_description = ' ';
        this.image = ' ';
        this.meta_title = ' ';
        this.meta_keywords = ' ';
        this.meta_description = ' ';
        this.meta_url = ' ';
        this.file = ' ';
        this.type = ' ';
      },
    },
    apollo: {
      categories: {
        prefetch: true,
        query: categories
      },
      /* countries: {
          prefetch: true,
          query: countries
          }, */
          attributes: {
          prefetch: true,
          query: attributes
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
