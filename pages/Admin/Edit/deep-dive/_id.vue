<template>
  <div>
    <form v-for="deepdive in allDeepdivesList" :key="deepdive.id" method="POST" @submit.prevent enctype="multipart/form-data">
      <div class="table table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>
              </th>
              <th scope="col" class="deepdiveAddOptions">
                <li>
                  <input type="submit" value="Save" @click="addDeepdive" />
                </li>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: right;">Login</td>
              <td>
                <input v-model="login" type="text" required />{{ deepdive.login }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Start Date</td>
              <td>
                <input v-model="start_date" type="text" required />{{ deepdive.start_date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">End Date</td>
              <td>
                <input v-model="end_date" type="text" />{{ deepdive.end_date }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Attendees</td>
              <td>
                <input v-model="attendees" type="text"/>{{ deepdive.attendees }}
              </td>
            </tr>
            <tr>
              <td style="text-align: right;">Description</td>
              <td>
                <div class="form-check form-switch">
                  <client-only>
                   <editor :init="{ plugins: 'lists link image table code help wordcount'}" />{{ deepdive.content }}
                  </client-only>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import  gql from 'graphql-tag'
import  deepdive from '~/apollo/mutations/reports/deepdive'
import  allDeepdive from '~/apollo/queries/reports/deepdive'

const DELETE_DEEPDIVE = gql `
  mutation delete_deepdive($id: Int!){
  delete_deepdive(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_DEEPDIVE = gql `
  mutation update_deepdive($id: Int!){
  update_deepdive(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Deep Dive'
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
   async deleteDeepdive(deepdive){
    await this.$apollo.mutate({
        mutation: DELETE_DEEPDIVE,
        variables: {
          id: deepdive.id
        },
        refetchQueries: [
          {
            query: allDeepdive
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/reports/deepdive'})
            }).catch(err => console.log(err));
    },
    async updateDeepdive(deepdive){
    await this.$apollo.mutate({
        mutation: UPDATE_DEEPDIVE,
        variables: {
          id: deepdive.id
        },
        refetchQueries: [
          {
            query: allDeepdive
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    deepdive: {
      query: deepdive,
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

  li {
    display: inline-block;
  }

</style>
