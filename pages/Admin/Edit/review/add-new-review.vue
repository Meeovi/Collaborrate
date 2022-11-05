<template>
  <div>
    <form @submit.prevent="addReview()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" value="Reset" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" value="Save Review" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Review</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <!-- Tab content -->
          <div id="v-tabs-tabContent" class="tab-content">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table" >
                  <tbody>
                    <tr>
                      <td style="text-align: right;">First Name</td>
                      <td><input v-model="first_name" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Last Name</td>
                      <td><input v-model="last_name" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Website</td>
                      <td><input id="websites" v-model="websites" name="websites" type="url" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Review Content</td>
                      <td><client-only><Editor v-model="content" /></client-only>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shop ID</td>
                      <td><input v-model="shop_id" type="text" disabled>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Comment ID</td>
                      <td><input v-model="comment_id" type="text" disabled>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Tab content -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import  gql from "graphql-tag";
import  findManyReviews from "~/graphql/query/findManyReviews"

const ADD_REVIEWS = gql`
    mutation ($first_name:String!,$last_name:String!$websites:String!,$content:String!,$comment_id:Int!,$shop_id:Int!){
    createOneReviews(data: {first_name: $first_name, last_name: $last_name, websites: $websites, content: $content, comment_id: $comment_id, shop_id: $shop_id}) {
        first_name
            last_name
            websites
            content
            comment_id
            shop_id
  }
}`;

export default {
    data() {
    return {
            first_name: " ",
            last_name: " ",
            websites: " ",
            content: " ",
            comment_id: "",
            shop_id: " "
        }
  },
    head: {
        title: 'Add New Review'
    }, 
/* eslint-disable camelcase */
   
  methods: {
      async addReview() {
            const first_name = this.first_name;
            const last_name = this.last_name;
            const websites = this.websites;
            const content = this.content;
            const comment_id = this.comment_id;
            const shop_id = this.shop_id;
            await this.$apollo.mutate({
                mutation: ADD_REVIEWS,
                variables: {
                    first_name,
                    last_name,
                    websites,
                    content,
                    comment_id,
                    shop_id
                 },
        update: (cache, { data: { insertReviews }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedReview = insertReviews.returning;
                            console.log(insertedReview)
                            cache.writeQuery({
                                query: findManyReviews
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../../marketing/reviews'})
                }).catch(err => console.log(err));
                    this.first_name = ' ';
                    this.last_name = ' ';
                    this.websites = ' ';
                    this.content = ' ';
                    this.comment_id = ' ';
                    this.shop_id = ' '
                }, 
        },
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
