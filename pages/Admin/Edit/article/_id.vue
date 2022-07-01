<template>
    <div>
        <form v-for="article in allArticlesList" :key="article.id"  method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="articleAddOptions">
                            <li><a href="/admin/add-new/add-new-tag"><input type="button" class="btn btn-warning" value="Add New Tag"></a></li>
                            <li><input type="submit" @click="addArticle" value="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Article Name</td>
                        <td><input type="text" required />{{ article.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Categories</td>
                        <td><input type="select" name="Select">{{ article.categories.name }}
                            </button></td>
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
                            <table class="table" >
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Excerpt</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <input
  id="excerpt" type="textarea" validation="required|max:50,length" :help="`Keep it under 50 characters. ${50 - value.length} left.`" cols="50" rows="10" value="Add a short Description">{{ article.excerpt }}</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <client-only>
                                                    <vue-simplemde id="articleDescription" />{{ article.content }}
                                                </client-only>
                                            </div>
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
                        <td><input type="image" upload-url="/media" name="headshot" value="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/>{{ article.image }}</td>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 id="headingFive" class="accordion-header">
                    <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Related Products, Up-Sells, and Cross-Sells
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        
                    </div>
                </div>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  articles from '~/apollo/mutations/content/article'
import  allArticles from '~/apollo/queries/content/articles'

const DELETE_ARTICLE = gql `
  mutation delete_articles($id: Int!){
  delete_articles(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_ARTICLE = gql `
  mutation update_articles($id: Int!){
  update_articles(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Article'
    },
 mounted(){
      this.forceRerender();
  },
  // eslint-disable-next-line vue/order-in-components
  data(){
      return{
          componentKey: 0
      }
  },
  methods: {
   async deleteArticle(article){
    await this.$apollo.mutate({
        mutation: DELETE_ARTICLE,
        variables: {
          id: article.id
        },
        refetchQueries: [
          {
            query: allArticles
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/content/articles'})
            }).catch(err => console.log(err));
    },
    async updateArticle(article){
    await this.$apollo.mutate({
        mutation: UPDATE_ARTICLE,
        variables: {
          id: article.id
        },
        refetchQueries: [
          {
            query: allArticles
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    articles: {
      query: articles,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>

<style>
input, select, option {
    padding: 5px;
}

li {
    display: inline-block;
}
</style>