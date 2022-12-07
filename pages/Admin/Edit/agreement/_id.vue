<template>
  <div>
    <form method="POST" @submit.prevent="updateAgreement()">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement.id)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Agreement" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Agreement</a>
          </div>
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table">
                  <tbody v-for="agreement in findManyAgreements" :key="agreement.id">
                    <tr>
                      <td style="text-align: right;">Agreement Name</td>
                      <td>
                        <input type="text" id="name" required :value="agreement.name" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Agreement Type</td>
                      <td>
                        <select name="agreementType" id="agreementType" :value="agreement.type">
                          <option value="policies">Policies</option>
                          <option value="agreements">Agreements</option>
                          <option value="announcements">Announcements</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Excerpt</td>
                      <td>
                        <textarea id="excerpt" :value="agreement.excerpt" cols="50" rows="10"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Detail</td>
                      <td>
                        <client-only>
                          <Editor :value="agreement.content" />
                        </client-only><br>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input v-html="agreement.image" type="image" name="headshot" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
//import gql from 'graphql-tag'
import findManyAgreements from '~/graphql/query/findManyAgreements'
import updateOneAgreements from '~/graphql/code/agreements'
import Editor from '~/components/Editor.vue'

export default {
    components: {
      Editor
    },
    head: {
      title: 'Edit Agreement'
    },
    data() {
      return {
        type: [],
        name: " ",
        excerpt: " ",
        content: " ",
        image: " ",
        user_id: "",
        reference_id: "",
        shop_id: "",
      }
    },
    methods: {
      async updateAgreement() {
        const name = this.name;
        const content = this.content;
        const excerpt = this.excerpt;
        const type = this.type;
        const image = this.image;
        const user_id = this.user_id;
        const reference_id = this.reference_id;
        const shop_id = this.shop_id;
        await this.$apollo.mutate({
          mutation: updateOneAgreements,
          variables: {
            name,
            excerpt,
            type,
            content,
            image,
            reference_id,
            user_id,
            shop_id,
          },
          update: (cache, {
            data: {
              updateAgreements
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedAgreement = updateAgreements.returning;
              console.log(insertedAgreement)
              cache.writeQuery({
                query: findManyAgreements
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../marketing/agreements'
          })
        }).catch(err => console.log(err));
        this.name = ' ';
        this.excerpt = ' ';
        this.type = ' ';
        this.content = ' ';
        this.image = ' ';
        this.reference_id = '';
        this.user_id = '';
        this.shop_id = '';
      },
    },
    apollo: {
      findManyAgreements: {
        query: findManyAgreements,
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