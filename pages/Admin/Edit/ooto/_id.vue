<template>
    <div>
        <FormulateForm  v-for="ooto in ootos" :key="ooto.id" method="POST" @submit.prevent  enctype="multipart/form-data">
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="ootoAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addOoto" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">OOTO Name</td>
                        <td><FormulateInput v-model="login" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">WHID</td>
                        <td><FormulateInput v-model="whid" type="text" /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Start Date</td>
                        <td><FormulateInput v-model="start_date" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">End Date</td>
                        <td><FormulateInput v-model="end_date" type="text" required /></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Description</td>
                        <td><FormulateInput v-model="description" type="textarea" /></td>
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
import ooto from '~/apollo/mutations/system/ooto'
import allOoto from '~/apollo/queries/system/ooto'

const DELETE_OOTO = gql `
  mutation delete_ooto($id: Int!){
  delete_ooto(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_OOTO = gql `
  mutation update_ooto($id: Int!){
  update_ooto(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit OOTO'
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
   async deleteOOTO(ooto){
    await this.$apollo.mutate({
        mutation: DELETE_OOTO,
        variables: {
          id: ooto.id
        },
        refetchQueries: [
          {
            query: allOoto
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/system/ooto'})
            }).catch(err => console.log(err));
    },
    async updateOOTO(ooto){
    await this.$apollo.mutate({
        mutation: UPDATE_OOTO,
        variables: {
          id: ooto.id
        },
        refetchQueries: [
          {
            query: allOoto
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    ooto: {
      query: ooto,
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