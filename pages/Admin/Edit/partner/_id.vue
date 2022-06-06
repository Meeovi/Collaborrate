<template>
    <div>
        <FormulateForm v-for="partner in partners" :key="partner.id" method="POST" enctype="multipart/form-data"  @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="staffMemberAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addPartner" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Partner Name</td>
                        <td><FormulateInput v-model="name" type="text" required />{{ partner.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Address</td>
                        <td><FormulateInput v-model="address" type="text" name="tax" />{{ partner.address }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">City</td>
                        <td><FormulateInput v-model="city" type="text" required />{{ partner.city }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">State</td>
                        <td><FormulateInput v-model="state" type="text" name="tax" />{{ partner.state }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Country</td>
                        <td><FormulateInput v-model="country" type="text" name="tax" />{{ partner.country }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Business Type</td>
                        <td><FormulateInput v-model="buiness_type" type="text" name="tax" />{{ partner.business_type }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Is the Partner Public?</td>
                        <td><FormulateInput v-model="isPublic" type="checkbox" label="Check the box if the partner is public" />{{ partner.isPublic }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
import gql from 'graphql-tag'
import partners from '~/apollo/mutations/shop/partners'
import allPartners from '~/apollo/queries/shop/partners'

const DELETE_PARTNER = gql `
  mutation delete_partners($id: Int!){
  delete_partners(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_PARTNER = gql `
  mutation update_partners($id: Int!){
  update_partners(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Partner'
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
   async deletePartner(partner){
    await this.$apollo.mutate({
        mutation: DELETE_PARTNER,
        variables: {
          id: partner.id
        },
        refetchQueries: [
          {
            query: allPartners
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/partners'})
            }).catch(err => console.log(err));
    },
    async updatePartner(partner){
    await this.$apollo.mutate({
        mutation: UPDATE_PARTNER,
        variables: {
          id: partner.id
        },
        refetchQueries: [
          {
            query: allPartners
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    partners: {
      query: partners,
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