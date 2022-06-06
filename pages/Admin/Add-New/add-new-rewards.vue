<template>
  <div>
    <FormulateForm method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Reward" @click="addReward" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Reward</a>
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
              <td style="text-align: right;">Expiration</td>
              <td>
                <FormulateInput v-model="expiration" type="datetime-local" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Reward Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Customers</td>
              <td>
                <FormulateInput v-model="customers" type="text" placeholder="#" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Products</td>
              <td>
                <FormulateInput v-model="products" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Coupons</td>
              <td>
                <FormulateInput v-model="coupons" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Users</td>
              <td>
                <FormulateInput v-model="users" type="text" name="addressTwo" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Category</td>
              <td>
                <FormulateInput v-model="categories" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Level</td>
              <td>
                <FormulateInput v-model="level" type="text" />
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Articles</td>
              <td>
                <FormulateInput v-model="articles" type="text" />
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

import {rewards} from "~/apollo/queries/marketing/rewards";

  const ADD_REWARDS = gql `
    mutation ($name: String!,$expiration: String!,$customers: String!,$coupons: String!,$categories: String!,$slug: String!,$products: String!,$users: String!,$articles: String!,$level: String!){
    insert_rewards(objects: {name: $name,expiration: $expiration,customers: $customers,coupons: $coupons,categories: $categories,articles: $articles,level: $level,slug: $slug,products: $products,users: $users,}) {
        affected_rows
        returning {
            name
            expiration
            customers
            coupons
            categories
            articles
            level
            slug
            products
            users
    }
  }
}`;


  export default {
    data() {
      return {
        thumbnail: " ",
        name: " ",
        expiration: " ",
        customers: " ",
        coupons: " ",
        categories: [],
        slug: " ",
        products: " ",
        articles: " ",
        users: " ",
        show: true
      }
    },
    head: {
      title: 'Add New Reward'
    },

    methods: {
      async addReward({ target }) {
        const name = this.name;
        const expiration = this.expiration;
        const customers = this.customers;
        const coupons = this.coupons;
        const categories = this.categories;
        const articles = this.articles;
        const level = this.level;
        const slug = this.slug;
        const products = this.products;
        const users = this.users;
        
        await this.$apollo.mutate({
          mutation: ADD_REWARDS,
          variables: {
            name,
            expiration,
            customers,
            coupons,
            categories,
            articles,
            level,
            slug,
            products,
            users,
          },
          update: (cache, {
            data: {
              insertRewards,
            }
          }) => {
            try {
              const insertedReward = insertRewards.returning;
              console.log(insertedReward)
              cache.writeQuery({
                query: rewards
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../marketing/rewards'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.expiration = ' ';
        this.customers = ' ';
        this.coupons = ' ';
        this.categories = ' ';
        this.articles = ' ';
        this.level = ' ';
        this.slug = ' ';
        this.products = ' ';
        this.users = ' ';
      },
    },
}
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
