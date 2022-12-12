<template>
    <div>
        <form v-for="page in findManyPages" :key="page.id" @submit.prevent="addPage">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Page" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Page</a>
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
                      <td style="text-align: right;">Page Name</td>
                      <td><input :value="page.title" type="text" id="pageName" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Page Url</td>
                      <td><input :value="page.url_key" type="url" id="pageName" /></td>
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
                              <td style="text-align: right;">Content</td>
                              <td>
                                <client-only><Editor :value="page.content" /></client-only>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
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
                            <td><input :value="page.meta_title" id="pageName" type="text" required /></td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Keywords</td>
                            <td><input :value="page.meta_keywords" type="text" /></td>
                          </tr>
                          <tr>
                            <td style="text-align: right;">Meta Description</td>
                            <td><textarea :value="page.meta_description" cols="40" rows="10"></textarea></td>
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
  import gql from "graphql-tag";
  import findManyPages from "~/graphql/query/findManyPages";

  const DELETE_PAGE = gql`
    mutation ($title:String!,$meta_description:String,$meta_keywords:String,$content:String,$meta_title:String!,$url_key:String){
    createOnePages(data: {title: $title, meta_description: $meta_description, meta_keywords: $meta_keywords, content: $content, meta_title: $meta_title, url_key: $url_key}) {
        meta_keywords
        title
        meta_description
        content
        meta_title
        url_key
  }
}`;

const UPDATE_PAGE = gql`
  mutation updateOnepages($id: Int!){
  updateOnePages(where: {id: $id}){
    meta_keywords
        title
        meta_description
        content
        meta_title
        url_key
  }
}
`;

export default {
    head: {
        name: 'Edit Page'
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
   async deletePage(page){
    await this.$apollo.mutate({
        mutation: DELETE_PAGE,
        variables: {
          id: page.id
        },
        refetchQueries: [
          {
            query: findManyPages
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/content/pages'})
            }).catch(err => console.log(err));
    },
    async updatePage(page){
    await this.$apollo.mutate({
        mutation: UPDATE_PAGE,
        variables: {
          id: page.id
        },
        refetchQueries: [
          {
            query: findManyPages
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyPages: {
      query: findManyPages,
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