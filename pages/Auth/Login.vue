<template>
  <section class="form4 cid-t58K4mPmcD mbr-fullscreen" id="form4-g">
    <div class="container-fluid">
      <div class="row content-wrapper justify-content-center">
        <div class="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
          <b-container>
            <h2 class="title has-text-centered" style="color:white;">Welcome back!</h2>

            <Notification :message="error" v-if="error" />
            <b-row>
              <b-col md="4" offset-md="4" class="mt-5">
                <FormulateForm method="post" @submit.prevent="userLogin">
                  <div v-if="err" class=" p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                    {{ err }}
                  </div>
                    <div class="form-group">
                      <label for="email" style="color:white;">Email address</label>
                      <FormulateInput id="email" v-model="email" type="email" class="form-control"
                        aria-describedby="emailHelp" required autofocus />
                    </div>
                    <div class="form-group">
                      <label for="password" style="color:white;">Password</label>
                      <FormulateInput id="password" v-model="password" type="password" class="form-control" required />
                    </div>
                    <FormulateInput type="submit">Login</FormulateInput>
                </FormulateForm>
                <div class="has-text-centered" style="margin-top: 20px">
                  <p style="color:white;text-align: center;">
                    Don't have an account? <nuxt-link to="/auth/register" style="color:lightblue;">Register</nuxt-link>
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
        <div class="col-lg-7 offset-lg-1 col-12">
          <div class="image-wrapper">
            <img class="w-100" src="/assets/images/mbr-1266x633.jpg" alt="AlternateCMS">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from "graphql-tag";

import { articles } from "~/apollo/queries/content/articles";
import categories from '~/apollo/queries/shop/categories'

const ADD_ARTICLES = gql`
    mutation ($name:String!,$excerpt:String,$categories:String,$content:String,$image:String){
    insert_articles(objects: {name: $name, excerpt: $excerpt, categories: $categories, content: $content, image: $image}) {
        affected_rows
        returning {
            name
            excerpt
            categories
            content
            image
    }
  }
}`;

export default {
    data() {
    return {
        categories: [],
        name: " ",
        excerpt: " ",
        content: " ",
        image: " ",
        
      }
  },
  methods: {
      async addArticle() {
            const name = this.name;
            const content = this.content;
            const excerpt = this.excerpt;
            const categories = this.categories;
            const image = this.image;
            await this.$apollo.mutate({
                mutation: ADD_ARTICLES,
                variables: {
                    name,
                    excerpt,
                    categories,
                    content,
                    image,
                },
        update: (cache, { data: { insertCategories }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedCategory = insertCategories.returning;
                            console.log(insertedCategory)
                            cache.writeQuery({
                                query: articles
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../content/blog'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.excerpt = ' ';
                this.categories = ' ';
                this.content = ' ';
                this.image = ' ';
            },
            
        },
    apollo: {
        categories: {
        prefetch: true,
        query: categories
        }
    }, 
    // eslint-disable-next-line vue/order-in-components
    head: {
        title: 'Welcome Back'
    }
}
</script>
