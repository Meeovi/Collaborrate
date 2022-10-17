<template>
    <div>
        <form v-for="customer_group in customer_groups" :key="customer_group.id" @submit.prevent="addCustomergroup" >
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Social Group" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Social Group</a>
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
                        <td style="text-align: right;">Group Name</td>
                        <td><input v-model="name" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Class</td>
                        <td><input type="text" v-model="tax_class" name="tax" /></td>
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
/* eslint-disable camelcase */
import  gql from "graphql-tag";
import customer_groups from "~/graphql/queries/customers/customerGroups";
// import  tax from '~/graphql/queries/shop/tax'

const ADD_GROUPS = gql`
    mutation ($name:String!,$tax_class:String!,$content:String!,$image:String!,$cover:String!){
    createOneCustomer_group(data: {name: $name, tax_class: $tax_class, content: $content, image: $image,cover: $cover}) {
        name
        tax_class
        content
        image
        cover
  }
}`;

const UPDATE_CUSTOMER_GROUP = gql`
  mutation updateOnecustomer_groups($id: Int!){
  updateOnecustomer_groups(where: {id: {equals: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Customer Group'
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
   // eslint-disable-next-line camelcase
   async deleteCountry(customer_group){
    await this.$apollo.mutate({
        mutation: DELETE_CUSTOMER_GROUP,
        variables: {
          id: customer_group.id
        },
        refetchQueries: [
          {
            query: customer_group
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/customers/customer_groups'})
            }).catch(err => console.log(err));
    },
    // eslint-disable-next-line camelcase
    async updateCountry(customer_group){
    await this.$apollo.mutate({
        mutation: UPDATE_CUSTOMER_GROUP,
        variables: {
          id: customer_group.id
        },
        refetchQueries: [
          {
            query: customer_group
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    customer_groups: {
      query: customer_groups,
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