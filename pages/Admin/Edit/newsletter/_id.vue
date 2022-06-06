<template>
  <div>
    <FormulateForm v-for="newsletter in newsletters" :key="newsletter.id" method="POST" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><FormulateInput type="reset" class="btn btn-warning" label="Reset" /></a>
          <a class="navbar-brand"><FormulateInput type="button" @click="addNewsletter" label="Save Newsletter" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create a New Newsletter Customer</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <!-- Tab content -->
          <div id="v-tabs-tabContent" class="tab-content">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <table class="table" >
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Customer First Name</td>
                      <td><FormulateInput type="text" />{{ newsletter.customer_first_name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Cusotmer Last Name</td>
                      <td><FormulateInput type="text" required />{{ newsletter.customer_last_name }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Email</td>
                      <td><FormulateInput type="text" required />{{ newsletter.email }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Store</td>
                      <td><FormulateInput type="text" />{{ newsletter.store }}</td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Website</td>
                      <td><FormulateInput id="websites" name="websites" type="url" />{{ newsletter.websites }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- Tab content -->
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import gql from 'graphql-tag'
import newsletters from '~/apollo/mutations/marketing/newsletter_subscribers'
import allNewsletters from '~/apollo/queries/marketing/newsletter_subscribers'

const DELETE_NEWSLETTER = gql `
  mutation delete_newsletters($id: Int!){
  delete_newsletters(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_NEWSLETTER = gql `
  mutation update_newsletters($id: Int!){
  update_newsletters(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Newsletter'
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
   async deleteNewsletter(newsletter){
    await this.$apollo.mutate({
        mutation: DELETE_NEWSLETTER,
        variables: {
          id: newsletter.id
        },
        refetchQueries: [
          {
            query: allNewsletters
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/newsletters'})
            }).catch(err => console.log(err));
    },
    async updateNewsletter(newsletter){
    await this.$apollo.mutate({
        mutation: UPDATE_NEWSLETTER,
        variables: {
          id: newsletter.id
        },
        refetchQueries: [
          {
            query: allNewsletters
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    newsletters: {
      query: newsletters,
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
</style>
