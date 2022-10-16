<template>
  <div>
        <form v-for="agreement in findManyAgreements" :key="agreement.id" method="POST" @submit.prevent="updateAgreement()">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="agreementAddOptions">
                            <li><input type="submit" value="Delete" @submit.prevent="deleteAgreement()" /></li>
                            <li><input type="submit" value="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Agreement Name</td>
                        <td><input type="text" required />{{ agreement.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Agreement Type</td>
                        <td><input type="text" name="Type">{{ agreement.type }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Agreement</a>
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
                        <input v-model="name" type="text" id="name" required />{{ agreement.name }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Agreement Type</td>
                      <td>
                        <select name="agreementType" id="agreementType" v-model="type">{{ agreement.type }}
                          <option value="policies">Policies</option>
                          <option value="agreements">Agreements</option>
                          <option value="announcements">Announcements</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">User ID</td>
                      <td>
                        <input v-model="user_id" type="text" id="name" disabled />{{ agreement.user_id }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Reference ID</td>
                      <td>
                        <input v-model="reference_id" type="text" id="name" disabled />{{ agreement.reference_id }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Shop ID</td>
                      <td>
                        <input v-model="shop_id" type="text" id="name" disabled />{{ agreement.shop_id }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Excerpt</td>
                      <td>
                        <textarea id="excerpt" v-model="excerpt" cols="50" rows="10"></textarea>{{ agreement.excerpt }}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Detail</td>
                      <td>
                        <client-only><Editor v-model="content" /></client-only>{{ agreement.content }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br><br>
              <div id="accordionExample" class="accordion">
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
                          help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif" />{{ agreement.image }}
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
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  findManyAgreements from '~/graphql/queries/sales/agreements'

const UPDATE_AGREEMENTS = gql`
  mutation MyMutation($id: Int!) {
  updateOneAgreements(where: {id: {equals: $id}}) {
    name
      excerpt
      type
      content
      image
      reference_id
      user_id
      shop_id
  }
}`;

const DELETE_AGREEMENTS = gql`
    mutation ($name:String!,$excerpt:String!,$type:String!,$content:String!,$image:String!,$user_id: String!, $reference_id: String!, $shop_id: String!){
    deleteOneAgreements(data: {reference_id: $reference_id, user_id: $user_id, shop_id: $shop_id, content: $content, excerpt: $excerpt, image: $image, type: $type, name: $name}, where: {id: {equals: $id}}){
      name
      excerpt
      type
      content
      image
      reference_id
      user_id
      shop_id
  }
}`;

  export default {
    head: {
        name: 'Edit Agreement'
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
   async deleteAgreement(agreement){
    await this.$apollo.mutate({
        mutation: DELETE_AGREEMENTS,
        variables: {
          id: agreement.id
        },
        refetchQueries: [
          {
            query: findManyAgreements
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/sales/agreements'})
            }).catch(err => console.log(err));
    },
    async updateAgreement(agreement){
    await this.$apollo.mutate({
        mutation: UPDATE_AGREEMENTS,
        variables: {
          id: agreement.id
        },
        refetchQueries: [
          {
            query: findManyAgreements
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyAgreements: {
      query: findManyAgreements,
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