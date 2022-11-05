<template>
  <div>
    <form @submit.prevent="addTag()">
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
              aria-controls="v-tabs-home" aria-selected="true">Create A New Tag</a>
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
                      <td><input id="tagsName" v-model="name" type="tagsName" required /></td>
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
                                  <textarea v-model="excerpt" cols="40" rows="10"></textarea>
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

  const ADD_TAGS = gql `
    mutation ($name:String!,$excerpt:String){
    createOneTags(data: {name: $name, excerpt: $excerpt}) {
        name
        excerpt
  }
}`;

  export default {
    data() {
      return {
        name: " ",
        excerpt: " ",
      }
    },

    methods: {
      async addTag() {
        const name = this.name;
        const excerpt = this.excerpt;
        await this.$apollo.mutate({
          mutation: ADD_TAGS,
          variables: {
            name,
            excerpt,
          },
          update: (cache, {
            data: {
              insertTags
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedTag = insertTags.returning;
              console.log(insertedTag)
              cache.writeQuery({
                query: findManyTags
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../content/tags'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.excerpt = ' ';
      },
    },
    head: {
      title: 'Add New Tag'
    },
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
