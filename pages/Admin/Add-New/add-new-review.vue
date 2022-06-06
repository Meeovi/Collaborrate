<template>
  <div>
    <FormulateForm method="POST" @submit.prevent  enctype="multipart/form-data">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><FormulateInput type="reset" class="btn btn-warning" label="Reset" /></a>
          <a class="navbar-brand"><FormulateInput type="button" @click="addReview" label="Save Review" /></a>
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
                      <td><FormulateInput v-model="first_name" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Last Name</td>
                      <td><FormulateInput v-model="last_name" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Website</td>
                      <td><FormulateInput id="websites" v-model="websites" name="websites" type="url" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Review Content</td>
                      <td><vue-simplemde id="reviewDescription" v-model="content" />
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
    </FormulateForm>
  </div>
</template>

<script>
import gql from "graphql-tag";
import reviews from "~/apollo/queries/marketing/reviews"

const ADD_REVIEWS = gql`
    mutation ($first_name:String!,$last_name:String!$websites:String!,$content:String){
    insert_reviews(objects: {first_name: $first_name, last_name: $last_name, websites: $websites, content: $content}) {
        affected_rows
        returning {
            first_name
            last_name
            websites
            content
    }
  }
}`;

export default {

    data() {
    return {
            first_name: " ",
            last_name: " ",
            websites: " ",
            content: " ",
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
            await this.$apollo.mutate({
                mutation: ADD_REVIEWS,
                variables: {
                    first_name,
                    last_name,
                    websites,
                    content,
                 },
        update: (cache, { data: { insertReviews }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedReview = insertReviews.returning;
                            console.log(insertedReview)
                            cache.writeQuery({
                                query: reviews
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../marketing/reviews'})
                }).catch(err => console.log(err));
                    this.first_name = ' ';
                    this.last_name = ' ';
                    this.websites = ' ';
                    this.content = ' ';
                }, 
        },
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
