<template>
  <div>
    <form v-for="newsletter in findManyNewsletters" :key="newsletter.id" @submit.prevent="addNewsletter">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><input type="reset" class="btn btn-warning" value="Reset" /></a>
          <a class="navbar-brand"><input type="submit" class="btn btn-warning" value="Save Newsletter" /></a>
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
                <table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Customer First Name</td>
                      <td><input :value="newsletter.customer_first_name" type="text" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Cusotmer Last Name</td>
                      <td><input :value="newsletter.customer_last_name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Email</td>
                      <td><input :value="newsletter.email" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Store</td>
                      <td><select id="store" :value="newsletter.store" name="template" class="form-store">
                          <option v-for="store in findManyVendors" :key="store.id" :value="store">{{ store.name }}
                          </option>
                        </select></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Website</td>
                      <td><select id="websites" :value="newsletter.websites" name="template" class="form-websites">
                          <option v-for="websites in findManyWebsites" :key="websites.id" :value="websites">
                            {{ websites.name }}</option>
                        </select>
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
    </form>
  </div>
</template>

<script>
  import gql from "graphql-tag";
  import findManyNewsletters from "~/graphql/query/findManyNewsletters"
  import findManyWebsites from "~/graphql/query/findManyWebsites"
  import findManyVendors from "~/graphql/query/findManyVendors"

  const ADD_NEWSLETTERS = gql `
    mutation ($customer_first_name:String!,$customer_last_name:String!$email:String!,$websites:String!,$store:String){
    createOneNewsletters(data: {customer_first_name: $customer_first_name, customer_last_name: $customer_last_name, email: $email, websites: $websites, store: $store}) {
        customer_first_name
        customer_last_name
        email
        websites
        store
  }
}`;

const UPDATE_NEWSLETTER = gql`
  mutation updateOnenewsletters($id: Int!){
  updateOneNewsletters(where: {id: $id}){
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
            query: findManyNewsletters
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/marketing/newsletters'})
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
            query: findManyNewsletters
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyNewsletters: {
      query: findManyNewsletters,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    findManyVendors: {
        prefetch: true,
        query: findManyVendors
      },
    findManyWebsites: {
        prefetch: true,
        query: findManyWebsites
      },
  }
}
</script>

<style>
input, select, option {
    padding: 5px;
}
</style>
