<template>
  <div>
    <form enctype="multipart/form-data"  v-for="reward in findManyRewards" :key="reward.id" @submit.prevent="updateReward(reward)">

      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteReward(reward)">Delete</button></a>
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
              aria-controls="v-tabs-home" aria-selected="true">Edit Reward</a>
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
                        <input :hint="reward.expiration" type="datetime-local" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Reward Name</td>
                      <td>
                        <input :hint="reward.name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Users</td>
                      <td>
                        <select id="customers" :hint="reward.customers" name="template" class="form-customers">
                          <option v-for="customers in findManyUsers" :key="customers.id" :hint="customers">
                            {{ customers.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Products</td>
                      <td>
                        <select id="products" :hint="reward.products" name="template" class="form-products">
                          <option v-for="products in findManyProducts" :key="products.id" :hint="products">
                            {{ products.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Coupons</td>
                      <td>
                        <select id="coupon" :hint="reward.coupons" name="template" class="form-coupon">
                          <option v-for="coupon in findManyDiscounts" :key="coupon.id" :hint="coupon">{{ coupon.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Users</td>
                      <td>
                        <select id="user" :hint="reward.users" name="template" class="form-user">
                          <option v-for="user in findManyUsers" :key="user.id" :hint="user">{{ user.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Category</td>
                      <td>
                        <select id="category" :hint="reward.categories" name="template" class="form-category">
                          <option v-for="category in findManyCategories" :key="category.id" :hint="category">
                            {{ category.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Level</td>
                      <td>
                        <select id="level" :hint="reward.level" name="template" class="form-category">
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
                        <select id="articles" :hint="reward.articles" name="template" class="form-articles">
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

  const UPDATE_REWARD = gql`
mutation ($name: String!,$expiration: String!,$customers: String!,$coupons: String!,$categories: String!,$products: String!,$users: String!,$articles: String!,$level: String!){
createOneRewards(data: {name: $name,expiration: $expiration,customers: $customers,coupons: $coupons,categories: $categories,articles: $articles,level: $level,products: $products,users: $users} where: {id: $id}) {
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

  const DELETE_REWARD = gql`
  mutation updateOnerewards($id: Int){
  updateOneRewards(where: {id: $id}){
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
}
`;

  export default {
    head: {
      name: 'Edit Reward'
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
      async deleteReward(reward) {
        await this.$apollo.mutate({
          mutation: DELETE_REWARD,
          variables: {
            id: reward.id
          },
          refetchQueries: [{
              query: findManyRewards
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../../marketing/rewards'
          })
        }).catch(err => console.log(err));
      },
      async updateReward(reward) {
        await this.$apollo.mutate({
          mutation: UPDATE_REWARD,
          variables: {
            id: reward.id
          },
          refetchQueries: [{
              query: findManyRewards
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      findManyRewards: {
        query: findManyRewards,
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
