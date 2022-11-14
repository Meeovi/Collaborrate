<template>
  <div>
    <form @submit.prevent="addArticle()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Article" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Article</a>
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
                      <td style="text-align: right;">Article Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Categories</td>
                      <td>
                        <select id="category" v-model="categories" name="template" class="form-category">
                          <option v-for="categories in findManyCategories" :key="categories.id" :value="categories">
                            {{ categories.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tags</td>
                      <td>
                        <select id="category" v-model="tags" name="template" class="form-category">
                          <option v-for="tags in findManyTags" :key="tags.id" :value="tags">{{ tags.name }}</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Article Availibility</td>
                      <td>
                        <select name="articleType" id="articleType" v-model="isPublic">
                          <option value="public">Public</option>
                          <option value="private">Private</option>
                          <option value="draft">Draft</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Published Date</td>
                      <td>
                        <input v-model="published" type="datetime-local"
                          placeholder="Default is published immediately" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select id="articleType" v-model="type">
                          <option value="course">Blog Post</option>
                          <option value="material">Note</option>
                          <option value="school">Knowledgebase Article</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Author(s)</td>
                      <td>
                        <select id="category" v-model="customers" name="template" class="form-category">
                          <option v-for="customers in findManyCustomers" :key="customers.id" :value="customers">
                            {{ customers.name }}</option>
                        </select>
                      </td>
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
                        <table class="table">
                          <tbody>
                            <tr>
                              <td style="text-align: right;">Excerpt</td>
                              <td>
                                <textarea id="excerpt" v-model="excerpt" cols="50" rows="10" placeholder="Add a short Description"></textarea>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <client-only><Editor v-model="content" /></client-only>
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
                      <td>
                        <input v-model="image" type="image" />
                      </td>
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
                      <table class="table">
                        <tbody>
                          <tr>
                            <td></td>
                            <td>Meta Title, Meta Keywords, and Meta Description are used to describe your products to
                              potential customers using search engine like Google, Bing, etc.</td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Title</td>
                            <td>
                              <input v-model="meta_name" type="text" />
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Description</td>
                            <td>
                              <textarea v-model="meta_description" rows="10" cols="50"></textarea>
                            </td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Url</td>
                            <td>
                              <input v-model="meta_url" type="url" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>
    </form>
  </div>
</template>

<script>
  import  gql from "graphql-tag";
  /* eslint-disable camelcase */
  import findManyArticles from "~/graphql/query/findManyArticles";
  import findManyCategories from '~/graphql/query/findManyCategories';
  import findManyTags from '~/graphql/query/findManyTags';
  import findManyCustomers from '~/graphql/query/findManyCustomers';
  import Editor from '~/components/Editor.vue'

  const ADD_ARTICLES = gql`
    mutation ($categories:String!, $content:String!, $customers:String!, $excerpt:String!, $image:String!, $isPublic:String!, $meta_description:String!, $meta_name:String!, $meta_url:String!, $name:String!, $published:String!, $tags:String!, $users:String!, $type:String!){
    createOneArticles(data: {categories: $categories, content: $content, customers: $customers, excerpt: $excerpt, image: $image, isPublic: $isPublic, meta_description: $meta_description, meta_name: $meta_name, meta_url: $meta_url, name: $name, published: $published, tags: $tags, users: $users, type: $type}) {
        categories
        content
        customers
        excerpt
        image
        isPublic
        meta_description
        meta_name
        meta_url
        name
        published
        tags
        users
        type
        }
}`;

  export default {
    components: {
      Editor
    },
    data() {
      return {
        categories: " ",
        content: " ",
        customers: " ",
        excerpt: " ",
        image: " ",
        isPublic: " ",
        meta_description: " ",
        meta_name: " ",
        meta_url: " ",
        name: " ",
        published: " ",
        tags: " ",
        users: " ",
        type: " "
      }
    },
    methods: {
      async addArticle() {
        const categories = this.categories;
        const content = this.content;
        const customers = this.customers;
        const excerpt = this.excerpt;
        const image = this.image;
        const isPublic = this.isPublic;
        const meta_description = this.meta_description;
        const meta_name = this.meta_name;
        const meta_url = this.meta_url;
        const name = this.name;
        const published = this.published;
        const tags = this.tags;
        const users = this.users;
        const type = this.type;

        await this.$apollo.mutate({
          mutation: ADD_ARTICLES,
          variables: {
            categories,
            content,
            customers,
            excerpt,
            image,
            isPublic,
            meta_description,
            meta_name,
            meta_url,
            name,
            published,
            tags,
            users,
            type,
          },
          update: (cache, {
            data: {
              insertCategories
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedCategory = insertCategories.returning;
              console.log(insertedCategory)
              cache.writeQuery({
                query: findManyArticles
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../content/blog'
          })
        }).catch(err => console.log(err));
        this.categories = ' ';
        this.content = ' ';
        this.customers = ' ';
        this.excerpt = ' ';
        this.image = ' ';
        this.isPublic = ' ';
        this.meta_description = ' ';
        this.meta_name = ' ';
        this.meta_url = ' ';
        this.name = ' ';
        this.published = ' ';
        this.tags = ' ';
        this.users = ' ';
        this.type = ' ';

      },

    },
    apollo: {
      findManyCategories: {
        prefetch: true,
        query: findManyCategories
      },
      findManyTags: {
        prefetch: true,
        query: findManyTags
      },
      findManyCustomers: {
        prefetch: true,
        query: findManyCustomers
      },
    },
    // eslint-disable-next-line vue/order-in-components
    head: {
      title: 'Add New Article'
    }
  }

</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

  li {
    display: inline-block;
  }

</style>
