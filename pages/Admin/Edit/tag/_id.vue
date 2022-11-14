<template>
    <div>
        <form v-for="tag in findManyTags" :key="tag.id" @submit.prevent="addTag()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Tag" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Tag</a>
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
                      <td style="text-align: right;">Tag Name</td>
                      <td><input id="tagsName" :value="tag.name" type="tagsName" required /></td>
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
                              <td style="text-align: right;">Description</td>
                              <td>
                                <div class="form-check form-switch">
                                  <input type="textarea" id="tagDesc" :value="tag.excerpt" name="tagDesc" cols="80"
                                    rows="10" />
                                </div>
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
      </div>
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import findManyTags from "~/graphql/query/findManyTags";

  const DELETE_TAG = gql `
    mutation ($name:String!,$excerpt:String){
    createOneTags(data: {name: $name, excerpt: $excerpt}) {
        name
        excerpt
  }
}`;

const UPDATE_TAG = gql`
  mutation updateOnetags($id: Int!){
  updateOneTags(where: {id: $id}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Tag'
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
   async deleteTag(tag){
    await this.$apollo.mutate({
        mutation: DELETE_TAG,
        variables: {
          id: tag.id
        },
        refetchQueries: [
          {
            query: findManyTags
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/content/tags'})
            }).catch(err => console.log(err));
    },
    async updateTag(tag){
    await this.$apollo.mutate({
        mutation: UPDATE_TAG,
        variables: {
          id: tag.id
        },
        refetchQueries: [
          {
            query: findManyTags
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyTags: {
      query: findManyTags,
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