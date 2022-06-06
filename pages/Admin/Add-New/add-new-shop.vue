<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Shop" @click="addShop" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Shop</a>
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
              <td style="text-align: right;">Shop Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Shop Type</td>
              <td>
                <FormulateInput v-model="type" name="shopType" type="text" label="What type of shop is this?" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Country</td>
              <td>
                <select id="category" v-model="country" name="template" class="form-country">
                  <option v-for="country in countries" :key="country" :value="categories">{{ country.name }}</option>
                </select>
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
              <td style="text-align: right;">Physical Store</td>
              <td>
                <FormulateInput v-model="physical_store" type="checkbox" label="Check if shop has a physical store." />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Website</td>
              <td>
                <FormulateInput v-model="website" type="url" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <FormulateInput v-model="description" type="textarea" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Shop Image</td>
              <td>
                <FormulateInput v-model="image" type="image" />
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
import gql from "graphql-tag";
/* eslint-disable camelcase */
import {
    shops
  } from "~/apollo/queries/shop/shops";
  import categories from "~/apollo/queries/shop/categories"
  import countries from "~/apollo/queries/shop/countries"
  // import products from "~/apollo/queries/shop/products"

  const ADD_SHOPS = gql `
    mutation ($thumbnail: String!,$name: String!,$product: String!,$statistics: String!,$special_discounts: String!,$reward_points: String!,$gift_certificates: String!,$website: String!,$invoices: String!,$customers: String!,$coupons: String!,$articles: String!,$polls: String!,$categories: String!,$country: String!,$quotes: String!,$rating: String!,$reports: String!,$description: String!,$reviews: String!,$image: Upload!,$stocks: String!,$tags: String!,$users: String!,$physical_store: String!,$type: String){
    insert_shops(objects: {thumbnail: $thumbnail,name: $name,product: $product,statistics: $statistics,special_discounts: $special_discounts,reward_points: $reward_points,gift_certificates: $gift_certificates,polls: $polls,categories: $categories,website: $website,invoices: $invoices,customers: $customers,coupons: $coupons,articles: $articles,country: $country,quotes: $quotes,rating: $rating,reports: $reports,description: $description,reviews: $reviews,image: $image,stocks: $stocks,tags: $tags,users: $users,physical_store: $physical_store,type: $type}) {
        affected_rows
        returning {
            thumbnail
            name
            product
            statistics
            special_discounts
            reward_points
            gift_certificates
            polls
            categories
            website
            invoices
            customers
            coupons
            articles
            country
            quotes
            rating
            reports
            description
            reviews
            image
            stocks
            tags
            users
            physical_store
            type
    }
  }
}`;


  export default {
    data() {
      return {
        categories: [],
        countries: [],
        products: [],
        thumbnail: " ",
        name: " ",
        product: " ",
        statistics: " ",
        special_discounts: " ",
        reward_points: " ",
        gift_certificates: " ",
        website: " ",
        invoices: " ",
        customers: " ",
        polls: " ",
        coupons: " ",
        articles: " ",
        country: " ",
        quotes: " ",
        rating: " ",
        reports: " ",
        description: " ",
        reviews: " ",
        image: " ",
        stocks: " ",
        tags: " ",
        users: " ",
        physical_store: " ",
        type: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Shop'
    },

    methods: {
      async addShop({ target }) {
        const thumbnail = this.thumbnail;
        const name = this.name;
        const product = this.product;
        const statistics = this.statistics;
        const special_discounts = this.special_discounts;
        const reward_points = this.reward_points;
        const gift_certificates = this.gift_certificates;
        const polls = this.polls;
        const categories = this.categories;
        const website = this.website;
        const invoices = this.invoices;
        const customers = this.customers;
        const coupons = this.coupons;
        const articles = this.articles;
        const country = this.country;
        const quotes = this.quotes;
        const rating = this.rating;
        const reports = this.reports;
        const description = this.description;
        const reviews = this.reviews;
        // const image = this.image;
        const stocks = this.stocks;
        const tags = this.tags;
        const users = this.users;
        const physical_store = this.physical_store;
        const type = this.type;
        
        await this.$apollo.mutate({
          mutation: ADD_SHOPS,
          variables: {
            thumbnail,
            name,
            product,
            statistics,
            special_discounts,
            reward_points,
            gift_certificates,
            polls,
            categories,
            website,
            invoices,
            customers,
            coupons,
            articles,
            country,
            quotes,
            rating,
            reports,
            description,
            reviews,
            image: target.files[0],
            stocks,
            tags,
            users,
            physical_store,
            type,
          },
          update: (cache, {
            data: {
              insertCategories,
              insertCountries
            }
          }) => {
            try {
              const insertedCategory = insertCategories.returning;
              const insertedCountries = insertCountries.returning;
              console.log(insertedCategory, insertedCountries)
              cache.writeQuery({
                query: shops
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../shop/shops'
          })
        }).catch(err => console.log(err));
        this.thumbnail = ' ';
        this.name = ' ';
        this.product = ' ';
        this.statistics = ' ';
        this.special_discounts = ' ';
        this.reward_points = ' ';
        this.gift_certificates = ' ';
        this.polls = ' ';
        this.categories = ' ';
        this.website = ' ';
        this.invoices = ' ';
        this.customers = ' ';
        this.coupons = ' ';
        this.articles = ' ';
        this.country = ' ';
        this.quotes = ' ';
        this.rating = ' ';
        this.reports = ' ';
        this.description = ' ';
        this.reviews = ' ';
        this.image = ' ';
        this.stocks = ' ';
        this.tags = ' ';
        this.users = ' ';
        this.physical_store = ' ';
        this.type = ' ';
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
         /* products: {
          prefetch: true,
          query: products
          } */
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
