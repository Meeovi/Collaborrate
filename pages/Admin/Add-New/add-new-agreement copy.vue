<template>
  <div>
    <form method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="button" class="btn btn-warning" value="Save Agreement" @click="addAgreement" /></a>
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
                <input v-model="type" type="text" name="Type">
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
                        <div class="form-check form-switch">
                          <input id="excerpt" v-model="excerpt" type="textarea"
                            validation="required|max:50,length"
                            :help="`Keep it under 50 characters. ${50 - excerpt.length} left.`" cols="50" rows="10"
                            value="Add a short Description" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Description</td>
                      <td>
                        <div class="wysiwyg" data-mdb-wysiwyg="wysiwyg" data-mdb-wysiwyg-fixed="true" :content="content"></div>
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
import agreements from "~/apollo/queries/sales/agreements";

const ADD_AGREEMENTS = gql`
    mutation ($name:String!,$excerpt:String,$type:String,$content:String,$image:String){
    insert_agreements(objects: {name: $name, excerpt: $excerpt, type: $type, content: $content, image: $image}) {
        affected_rows
        returning {
            name
            excerpt
            type
            content
            image
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
      async addAgreement() {
            const name = this.name;
            const content = this.content;
            const excerpt = this.excerpt;
            const type = this.type;
            const image = this.image;
            await this.$apollo.mutate({
                mutation: ADD_AGREEMENTS,
                variables: {
                    name,
                    excerpt,
                    type,
                    content,
                    image,
                },
        update: (cache, { data: { insertAgreements }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedAgreement = insertAgreements.returning;
                            console.log(insertedAgreement)
                            cache.writeQuery({
                                query: agreements
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({path: '../sales/agreements'})
                }).catch(err => console.log(err));
                this.name = ' ';
                this.excerpt = ' ';
                this.type = ' ';
                this.content = ' ';
                this.image = ' ';
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
