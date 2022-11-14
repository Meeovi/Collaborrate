/* eslint-disable camelcase */
<template>
  <div>
    <form v-for="category in findManyCategories" :key="category.id" method="POST" @submit.prevent="add()">
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="categoryAddOptions">
                <li><input type="submit" value="Save" @submit.prevent="addCategory" /></li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Category Name</td>
              <td><input type="text" :value="category.name" required /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <br><br>
      <div id="accordionExample" class="accordion">
        <div class="accordion-item">
          <h2 id="headingOne" class="accordion-header">
            <button class="accordion-button" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
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
                      <td style="text-align: right;">Description</td>
                      <td>
                        <client-only>
                          <Editor :value="category.content" />
                        </client-only>
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
            <button class="accordion-button" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseThree"
              aria-expanded="false" aria-controls="collapseThree">
              Images and Videos
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
            data-mdb-parent="#accordionExample">
            <div class="accordion-body">
              <input id="image" :value="category.image" type="text" name="image" />
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="headingFour" class="accordion-header">
            <button class="accordion-button" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseFour"
              aria-expanded="false" aria-controls="collapseFour">
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
                    <td>Meta Title, Meta Keywords, and Meta Description are used to describe your categories to
                      potential customers using search engine like Google, Bing, etc.</td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Meta Title</td>
                    <td><input type="text" :value="category.meta_title" required /></td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Meta Keywords</td>
                    <td><input type="text" :value="category.meta_keywords" /></td>
                  </tr>
                  <tr>
                    <td style="text-align: right;">Meta Description</td>
                    <td><input type="textarea" :value="category.meta_description" rows="10" cols="50" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  // eslint-disable-next-line camelcase
  import gql from 'graphql-tag'
  import findManyCategories from '~/graphql/query/findManyCategories'

  const DELETE_CATEGORY = gql `
  mutation deleteOneCategories($id: Int!){
  deleteOneCategories(where: {id: $id}){
    name
        content
        image
        meta_description
        meta_keywords
        meta_title
  }
}
`;

  const UPDATE_CATEGORY = gql `
  mutation updateOneCategories($id: Int!){
  updateOneCategories(data: {name: $name, content: $content, image: $image, meta_description: $meta_description, meta_keywords: $meta_keywords, meta_title: $meta_title}, (where: {id: $id})){
    name
        content
        image
        meta_description
        meta_keywords
        meta_title
  }
}
`;

  export default {
    head: {
      name: 'Edit Category'
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
      async deleteCategory(category) {
        await this.$apollo.mutate({
          mutation: DELETE_CATEGORY,
          variables: {
            id: category.id
          },
          refetchQueries: [{
              query: findManyCategories
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../../admin/shop/categories'
          })
        }).catch(err => console.log(err));
      },
      async updateCategory(category) {
        await this.$apollo.mutate({
          mutation: UPDATE_CATEGORY,
          variables: {
            id: category.id
          },
          refetchQueries: [{
              query: findManyCategories
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      findManyCategories: {
        query: findManyCategories,
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
      }
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
