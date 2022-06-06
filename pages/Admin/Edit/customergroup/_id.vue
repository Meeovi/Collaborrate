<template>
    <div>
        <FormulateForm v-for="customer_group in customer_groups" :key="customer_group.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="customerCustomer_groupAddOptions">
                            <li><FormulateInput type="submit" @click="addCustomer_group" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Customer Group Name</td>
                        <td><FormulateInput type="text" required />{{ customer_group.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tax Class</td>
                        <td><FormulateInput type="text" name="tax" />{{ customer_group.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import gql from 'graphql-tag'
// eslint-disable-next-line camelcase
import customer_groups from '~/apollo/mutations/customers/customerGroups'
// eslint-disable-next-line camelcase
import allCustomer_group from '~/apollo/queries/customers/customerGroups'

const DELETE_CUSTOMER_GROUP = gql `
  mutation delete_customer_groups($id: Int!){
  delete_customer_groups(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_CUSTOMER_GROUP = gql `
  mutation update_customer_groups($id: Int!){
  update_customer_groups(where: {id: {_eq: $id}}){
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
            query: allCustomer_group
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
            query: allCustomer_group
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