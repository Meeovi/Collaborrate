<template>
  <div>

    <form enctype="multipart/form-data"  @submit.prevent="addReward()">

      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
          <a class="navbar-brand">

            <input type="submit" class="btn btn-warning" hint="Save Reward" /></a>
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
                <v-table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Expiration</td>
                      <td>
                        <input v-model="expiration" type="datetime-local" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Reward Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Users</td>
                      <td>
                        <select id="customers" v-model="customers" name="template" class="form-customers">
                          <option v-for="customers in findManyUsers" :key="customers.id" :hint="customers">
                            {{ customers.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Products</td>
                      <td>
                        <select id="products" v-model="products" name="template" class="form-products">
                          <option v-for="products in findManyProducts" :key="products.id" :hint="products">
                            {{ products.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Coupons</td>
                      <td>
                        <select id="coupon" v-model="coupons" name="template" class="form-coupon">
                          <option v-for="coupon in findManyDiscounts" :key="coupon.id" :hint="coupon">{{ coupon.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Users</td>
                      <td>
                        <select id="user" v-model="users" name="template" class="form-user">
                          <option v-for="user in findManyUsers" :key="user.id" :hint="user">{{ user.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Category</td>
                      <td>
                        <select id="category" v-model="categories" name="template" class="form-category">
                          <option v-for="category in findManyCategories" :key="category.id" :hint="category">
                            {{ category.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Level</td>
                      <td>
                        <select id="level" v-model="level" name="template" class="form-category">
                          <option value="normal">Normal</option>
                          <option value="great">Great</option>
                          <option value="greatest">Greatest</option>
                          <option value="best">Best</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Articles</td>
                      <td>
                        <select id="articles" v-model="articles" name="template" class="form-articles">
                          <option v-for="articles in findManyArticles" :key="articles.id" :hint="articles">
                            {{ articles.name }}</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";

  import findManyRewards from "../../graphql/query/findManyRewards";
  import findManyArticles from "../../graphql/query/findManyArticles";
  import findManyUsers from '../../graphql/query/findManyUsers';
  import findManyUsers from '../../graphql/query/findManyUsers';
  import findManyProducts from '../../graphql/query/findManyProducts';
  import findManyCategories from '../../graphql/query/findManyCategories';
  import findManyDiscounts from '../../graphql/query/findManyDiscounts';

  const ADD_REWARDS = gql`
    mutation ($name: String!,$expiration: String!,$customers: String!,$coupons: String!,$categories: String!,$products: String!,$users: String!,$articles: String!,$level: String!){
    createOneRewards(data: {name: $name,expiration: $expiration,customers: $customers,coupons: $coupons,categories: $categories,articles: $articles,level: $level,products: $products,users: $users}) {
        name
        expiration
        customers
        coupons
        categories
        level
        products
        articles
        users
  }
}`;


  export default {
    data() {
      return {
        name: " ",
        expiration: " ",
        customers: " ",
        coupons: " ",
        categories: "",
        level: " ",
        products: " ",
        articles: " ",
        users: " ",
      }
    },
    head: {
      title: 'Add New Reward'
    },

    methods: {
      async addReward() {
        const name = this.name;
        const expiration = this.expiration;
        const customers = this.customers;
        const coupons = this.coupons;
        const categories = this.categories;
        const articles = this.articles;
        const level = this.level;
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
            products,
            users,
          },
          update: (cache, {
            data: {
              insertRewards,
              insertUsers,
              insertCoupons,
              insertArticles,
              insertProducts,
              insertCategories
            }
          }) => {
            try {
              const insertedReward = insertRewards.returning;
              const insertedCustomer = insertUsers.returning;
              const insertedCoupon = insertCoupons.returning;
              const insertedArticle = insertArticles.returning;
              const insertedProduct = insertProducts.returning;
              const insertedCategory = insertCategories.returning;
              console.log(insertedReward, insertedCustomer, insertedCoupon, insertedArticle, insertedProduct,
                insertedCategory)
              cache.writeQuery({
                query: findManyRewards
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../marketing/rewards'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.expiration = ' ';
        this.customers = ' ';
        this.coupons = ' ';
        this.categories = ' ';
        this.articles = ' ';
        this.level = ' ';
        this.products = ' ';
        this.users = ' ';
      },
    },
    apollo: {
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
      findManyDiscounts: {
        prefetch: true,
        query: findManyDiscounts
      },
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyUsers: {
        prefetch: true,
        query: findManyUsers
      },
      findManyArticles: {
        prefetch: true,
        query: findManyArticles
      },
      findManyProducts: {
        prefetch: true,
        query: findManyProducts
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
