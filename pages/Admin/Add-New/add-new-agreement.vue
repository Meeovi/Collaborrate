<template>
  <div>
    <form method="POST">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <input type="reset" class="btn btn-warning" value="Reset"></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Agreement" @click.prevent="createAgreement()"></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Agreement</a>
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
                      <td style="text-align: right;">Agreement Name</td>
                      <td>
                        <input v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Agreement Type</td>
                      <td>
                        <input v-model="type" type="text" name="Type" />
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
                                <textarea id="excerpt" v-model="excerpt" type="textarea" cols="50" rows="10"
                                  value="Add a short Description"></textarea>
                              </td>
                            </tr>
                            <tr>
                              <td style="text-align: right;">Description</td>
                              <td>
                                <textarea id="excerpt" v-model="content" type="textarea" cols="50" rows="10"
                                  value="Add a Description"></textarea>
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
                        <input v-model="image" type="image" name="headshot" value="Select an image to upload"
                          help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif" />
                      </td>
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

const CREATE_AGREEMENT = gql `
  mutation createAgreement ($name:String!,$excerpt:String!,$type:String!,$content:String!,$image:String!){
  createAgreement(input: {agreement: {name: $name, excerpt: $excerpt, type: $type, content: $content, image: $image}}) {
  agreementEdge {
      node {
        content
        excerpt
        id
        image
        name
        type
        created
        updated
      }
    }
  }
}`;

export default {
    data() {
      return {
        type: [],
        name: " ",
        excerpt: " ",
        content: " ",
        image: " ",
      }
    },
    head: {
      title: 'Add New Agreement'
    },
    methods: {
      createAgreement() {
        this.$apollo.mutate({
          mutation: CREATE_AGREEMENT,
          variables: {
            name: this.name,
            content: this.content,
            excerpt: this.excerpt,
            type: this.type,
            image: this.image,
          },
        }).catch(err => console.log(err));
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

  li {
    display: inline-block;
  }

</style>
