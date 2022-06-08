<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Occassion" @click="addOccassion" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Occassion</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Code</td>
                      <td>
                        <FormulateInput v-model="code" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Occassion Name</td>
                      <td>
                        <FormulateInput v-model="name" type="text" />
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="categories">Categories</label><br>
                        <select id="categories" v-model="category" name="template" class="form-category">
                          <option v-for="categories in categoriess" :key="categories" :value="categories">
                            {{ categories.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="tags">Tags</label><br>
                        <select id="tags" v-model="tags" name="template" class="form-category">
                          <option v-for="tags in tagss" :key="tags" :value="tags">
                            {{ tags.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="products">Products</label><br>
                        <select id="products" v-model="products" name="template" class="form-category">
                          <option v-for="products in productss" :key="products" :value="products">
                            {{ products.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-6">
                      <td>
                        <label for="wishlists">Wishlists</label><br>
                        <select id="wishlists" v-model="wishlists" name="template" class="form-category">
                          <option v-for="wishlists in wishlistss" :key="wishlists" :value="wishlistss">
                            {{ wishlists.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr class="col-lg-12">
                      <td>
                        <FormulateInput v-model="description" type="textarea" label="Description" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
  import  gql from "graphql-tag";

  import  occassions from "~/apollo/queries/shop/occassions";
  import  categories from "~/apollo/queries/shop/categories"
  import  products from "~/apollo/queries/shop/products"
  import  wishlists from "~/apollo/queries/shop/wishlists"
  import  tags from "~/apollo/queries/content/tags"

  const ADD_OCCASSIONS = gql `
    mutation ($name: String!,$code: String!,$tags: String!,$description: String!,$products: String!,$created_at: String!,$shipping_zones: String!,$address_two: String!,$state: String!,$wishlists: String!,$category: String!,$pickup: String!,$city: String!,$pickup: String!){
    insert_occassions(objects: {name: $name,code: $code,tags: $tags,description: $description,products: $products,wishlists: $wishlists,category: $category,created_at: $created_at,shipping_zones: $shipping_zones,address_two: $address_two,state: $state,category: $category,city: $city,pickup: $pickup,pickup: $pickup}) {
        affected_rows
        returning {
            name
            code
            tags
            description
            products
            wishlists
            category
            created_at
    }
  }
}`;


  export default {
    data() {
      return {
        category: [],
        categories: [],
        thumbnail: " ",
        name: " ",
        code: " ",
        tags: " ",
        description: " ",
        products: " ",
        created_at: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Occassion'
    },

    methods: {
      async addOccassion({
        target
      }) {
        const name = this.name;
        const code = this.code;
        const tags = this.tags;
        const description = this.description;
        // eslint-disable-next-line camelcase
        const products = this.products;
        const wishlists = this.wishlists;
        const category = this.category;
        const created_at = this.created_at;

        await this.$apollo.mutate({
          mutation: ADD_OCCASSIONS,
          variables: {
            name,
            code,
            tags,
            description,
            products,
            wishlists,
            category,
            created_at,
          },
          update: (cache, {
            data: {
              insertOccassions,
              insertCategories,
              insertProducts,
              insertTags,
              insertWishlists,
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedOccassion = insertOccassions.returning;
              const insertedCategories = insertCategories.returning;
              const insertedProducts = insertProducts.returning;
              const insertedTags = insertTags.returning;
              const insertedWishlists = insertWishlists.returning;
              console.log(insertedOccassion, insertedCategories, insertedProducts, insertedTags, insertedWishlists)
              cache.writeQuery({
                query: occassions
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../shop/occassions'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.code = ' ';
        this.tags = ' ';
        this.description = ' ';
        this.products = ' ';
        this.wishlists = ' ';
        this.category = ' ';
        this.created_at = ' ';
        this.category = ' ';
      },
    },
    apollo: {
      categories: {
        prefetch: true,
        query: categories
      },
      tags: {
        prefetch: true,
        query: tags
      },
      products: {
        prefetch: true,
        query: products
      },
      wishlists: {
        prefetch: true,
        query: wishlists
      },
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
