<template>
    <div>
        <FormulateForm v-for="returns in returns" :key="returns.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="returnsAddOptions">
                            <li><FormulateInput type="submit" @click="addReturn" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Returns Name</td>
                        <td>
                            <FormulateInput id="returnsName" type="returnsName" required />{{ returns.name }}
                            <p for="name">Name of the return</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Time limit of validity</td>
                        <td>
                            <FormulateInput id="returnsName" type="returnsName" required />{{ returns.name }}
                            <p for="validity">How many days after the delivery date does the customer have to return a product?</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Returns prefix</td>
                        <td>
                            <FormulateInput id="returnsName" type="returnsName" required />{{ returns.name }}
                            <p for="returnsPrefix">Prefix used for returns name (e.g. RE00001).</p>
                        </td>
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
import returns from '~/apollo/mutations/sales/returns'
import allReturns from '~/apollo/queries/sales/returns'

const DELETE_RETURN = gql `
  mutation delete_returns($id: Int!){
  delete_returns(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_RETURN = gql `
  mutation update_returns($id: Int!){
  update_returns(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Return'
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
   async deleteReturn(returns){
    await this.$apollo.mutate({
        mutation: DELETE_RETURN,
        variables: {
          id: returns.id
        },
        refetchQueries: [
          {
            query: allReturns
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/sales/returns'})
            }).catch(err => console.log(err));
    },
    async updateReturn(returns){
    await this.$apollo.mutate({
        mutation: UPDATE_RETURN,
        variables: {
          id: returns.id
        },
        refetchQueries: [
          {
            query: allReturns
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    returns: {
      query: returns,
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
    width: 50%;
}

li {
    display: inline-block;
}
</style>