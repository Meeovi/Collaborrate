<template>
    <div>
        <form method="POST" @submit.prevent  enctype="multipart/form-data">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="productAddOptions">
                            <li><a href="/admin/add-new/add-new-attribute"><input type="submit" class="btn btn-warning" value="Add Attribute" /></a></li>
                            <li><input type="submit" @click="addProduct" value="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Product Type</td>
                        <td><input v-model="type" name="productType" type="text" value="What type of product is this?" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Attribute</td>
                        <td><input v-model="attribute" name="productAttribute" type="text" value="Example is apple, bag, etc" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Product Name</td>
                        <td><input v-model="name" type="productName" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Price</td>
                        <td><input v-model="price" type="productPrice" value="$" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Class</td>
                        <td><input v-model="tax_class" name="productTax" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Quantity</td>
                        <td><input v-model="quantity_per_source" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Stock</td>
                        <td><input v-model="status" type="number" name="stockStatus" />
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Height</td>
                        <td><input v-model="height" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Weight</td>
                        <td><input v-model="weight" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Visibility</td>
                        <td><input v-model="visibility" name="productVisibility" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Categories</td>
                        <td><input v-model="categories" name="productCategory" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Country of manufacture</td>
                        <td><input v-model="manufacture" name="productManufacture" type="text" value="Where is this product made?" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Size</td>
                        <td><input v-model="size" name="productSize" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Format</td>
                        <td><input v-model="format" name="productFormat" type="text" value="Downloadable or Shipped" /></td>
                    </tr>
                </tbody>
            </table>
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
                            <table class="table" >
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Short Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <input type="textarea" v-model="short_description" value="Enter a short description" validation="required|max:50,length" validation-name="excerpt" error-behavior="live" :help="`Keep it under 50 characters. ${50 - value.length} left.`" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <div class="wysiwyg" data-mdb-wysiwyg="wysiwyg" data-mdb-wysiwyg-fixed="true" :content="content"></div>
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
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Images and Videos
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <td><div class="file-upload-wrapper">
  <input
    type="file"
    id="input-file-now"
    class="file-upload-input"
    data-mdb-file-upload="file-upload"
    data-mdb-accepted-extensions="image/*"
  />
</div></td>
                    </div>
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
                        <table class="table" >
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to potential customers using search engine like Google, Bing, etc.</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Title</td>
                                        <td><input v-model="meta_title" type="text" value="Product Url" required /></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Keywords</td>
                                        <td><input v-model="meta_keywords" type="text" value="Product Keywords" /></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Meta Description</td>
                                        <td><input
  type="textarea" v-model="meta_description" value="Product Description" rows="10" cols="50" /></td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Product Url</td>
                                        <td><input v-model="meta_url" type="url" value="Product URL" /></td>
                                    </tr>
                                </tbody>
                            </table>
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
                        <td><dashboard :uppy="uppy" v-model="file"  :plugins="['Webcam', 'Companion', 'Dashboard', 'Status-Bar', 'Progress-Bar', 'Informer', 'drag-drop', 'drop-target', 'file-input', 'audio', 'screen-capture']" :props="{theme: 'light'}" /></td>
                    </div>
                </div>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
import  gql from "graphql-tag";
import products from "~/apollo/queries/shop/products";
// import  categories from "~/apollo/queries/shop/categories"
// import  countries from "~/apollo/queries/shop/countries"
// import  attributes from "~/apollo/queries/shop/attributes"

const ADD_PRODUCTS = gql`
    mutation ($thumbnail: String!,$name: String!,$attribute_set: String!,$price: String!,$quantity_per_source: String!,$salable_quantity: String!,$visibility: String!,$websites: String!,$product: String!,$tax_class: String!,$stock_status: String!,$weight: String!,$manufacture: String!,$categories: String!,$country: String!,$size: String!,$format: String!,$height: String!,$content: String!,$short_description: String!,$image: Upload!,$meta_title: String!,$meta_keywords: String!,$meta_description: String!,$meta_url: String!,$file: Upload!,$type: String){
    insert_products(objects: {thumbnail: $thumbnail,name: $name,attribute_set: $attribute_set,price: $price,quantity_per_source: $quantity_per_source,salable_quantity: $salable_quantity,visibility: $visibility,manufacture: $manufacture,categories: $categories,websites: $websites,product: $product,tax_class: $tax_class,stock_status: $stock_status,weight: $weight,country: $country,size: $size,format: $format,height: $height,content: $content,short_description: $short_description,image: $image,meta_title: $meta_title,meta_keywords: $meta_keywords,meta_description: $meta_description,meta_url: $meta_url,file: $file,type: $type}) {
        affected_rows
        returning {
            thumbnail
            name
            attribute_set
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
            attribute_set: " ",
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
            
        }
  },
    head: {
        title: 'Add New Product'
    }, 
   
  methods: {
      async addProduct() {
            const thumbnail = this.thumbnail;
            const name = this.name;
            // eslint-disable-next-line camelcase
            const attribute_set = this.attribute_set;
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
            const image = this.image;
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
                    attribute_set,
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
                    image,
                    meta_title,
                    meta_keywords,
                    meta_description,
                    meta_url,
                    file,
                    type,
                 },
        update: (cache, { data: { insertCategories, insertCountries }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCategory = insertCategories.returning;
                            const insertedCountries = insertCountries.returning;
                            console.log(insertedCategory, insertedCountries)
                            cache.writeQuery({
                                query: products
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../shop/products'})
                }).catch(err => console.log(err));
                    this.thumbnail = ' ';
                    this.name = ' ';
                    this.attribute_set = ' ';
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
        /* apollo: {
                    categories: {
                    prefetch: true,
                    query: categories
                    },
                    countries: {
                    prefetch: true,
                    query: countries
                    },
                    attributes: {
                    prefetch: true,
                    query: attributes
                    }
            } */
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>