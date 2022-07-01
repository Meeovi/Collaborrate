<template>
    <div v-if="agreements">
        <form v-for="agreement in allAgreementsList" :key="agreement.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="agreementAddOptions">
                            <li><input type="submit" value="Delete" @click="deleteAgreement(agreement)" /></li>
                            <li><input type="submit" value="Save" @click="updateAgreement" /></li>
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
                        <td><input type="text" name="Type">{{ agreement.type }}</button></td>
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
  id="excerpt" type="textarea" validation="required|max:50,length" cols="50" rows="10">{{ agreement.excerpt }}</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <client-only>
                                                    <vue-simplemde id="agreementDescription" />{{ agreement.content }}
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
                        <td><input type="image" upload-url="/media" name="headshot" :value="agreement.image" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/></td>
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
import  agreements from '~/apollo/mutations/sales/agreement'
import  allAgreements from '~/apollo/queries/sales/agreements'

const DELETE_AGREEMENT = gql `
  mutation delete_agreements($id: Int!){
  delete_agreements(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_AGREEMENT = gql `
  mutation update_agreements($id: Int!){
  update_agreements(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

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
        mutation: DELETE_AGREEMENT,
        variables: {
          id: agreement.id
        },
        refetchQueries: [
          {
            query: allAgreements
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/sales/agreements'})
            }).catch(err => console.log(err));
    },
    async updateAgreement(agreement){
    await this.$apollo.mutate({
        mutation: UPDATE_AGREEMENT,
        variables: {
          id: agreement.id
        },
        refetchQueries: [
          {
            query: allAgreements
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    agreements: {
      query: agreements,
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