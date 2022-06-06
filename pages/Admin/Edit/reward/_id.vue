<template>
  <div>
    <FormulateForm v-for="reward in rewards" :key="reward.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
      <div class="table table-responsive">
        <table class="table" >
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="rewardAddOptions">
                <li>
                  <FormulateInput type="submit" label="Save" @click="addReward" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Expiration</td>
              <td>
                <FormulateInput v-model="expiration" type="datetime-local" />{{ reward.expiration }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Reward Name</td>
              <td>
                <FormulateInput v-model="name" type="text" required />{{ reward.name }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Customers</td>
              <td>
                <FormulateInput v-model="customers" type="text" placeholder="#" />{{ reward.customers }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Products</td>
              <td>
                <FormulateInput v-model="products" type="text" />{{ reward.products }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Coupons</td>
              <td>
                <FormulateInput v-model="coupons" type="text" />{{ reward.coupons }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Users</td>
              <td>
                <FormulateInput v-model="users" type="text" />{{ reward.users }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Category</td>
              <td>
                <FormulateInput v-model="categories" type="text" />{{ reward.categories }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Level</td>
              <td>
                <FormulateInput v-model="level" type="text" />{{ reward.level }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Articles</td>
              <td>
                <FormulateInput v-model="articles" type="text" />{{ reward.articles }}
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
import rewards from '~/apollo/mutations/marketing/rewards'
import allRewards from '~/apollo/queries/marketing/rewards'

const DELETE_REWARD = gql `
  mutation delete_rewards($id: Int!){
  delete_rewards(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_REWARD = gql `
  mutation update_rewards($id: Int!){
  update_rewards(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Reward'
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
   async deleteReward(reward){
    await this.$apollo.mutate({
        mutation: DELETE_REWARD,
        variables: {
          id: reward.id
        },
        refetchQueries: [
          {
            query: allRewards
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/marketing/rewards'})
            }).catch(err => console.log(err));
    },
    async updateReward(reward){
    await this.$apollo.mutate({
        mutation: UPDATE_REWARD,
        variables: {
          id: reward.id
        },
        refetchQueries: [
          {
            query: allRewards
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    rewards: {
      query: rewards,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
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

</style>
