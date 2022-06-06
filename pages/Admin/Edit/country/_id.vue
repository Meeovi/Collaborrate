<template>
    <div>
        <FormulateForm v-for="country in countries" :key="country.id"  method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="countriesAddOptions">
                            <li><FormulateInput type="submit" @click="addCountry" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Country Name</td>
                        <td><FormulateInput id="countriesName" type="countriesName" required />{{ country.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Country Region</td>
                        <td><FormulateInput id="countriesRegion" type="countriesRegion" required />{{ country.region }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>
        <div id="accordionExample" class="accordion">
            <div class="accordion-item">
                <h2 id="headingOne" class="accordion-header">
                    <FormulateInput class="accordion-button" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Content
                    </FormulateInput>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-mdb-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="table table-responsive">
                            <table class="table" >
                                <tbody>
                                    <tr>
                                        <td style="text-align: right;">Description</td>
                                        <td>
                                            <div class="form-check form-switch">
                                                <FormulateInput
  type="textarea" id="tagDesc" name="tagDesc" cols="80" rows="10" />{{ country.description }}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </FormulateForm>
    </div>
</template>

<script>
// eslint-disable-next-line camelcase
import gql from 'graphql-tag'
import countries from '~/apollo/mutations/shop/countries'
import allCountries from '~/apollo/queries/shop/countries'

const DELETE_COUNTRY = gql `
  mutation delete_countries($id: Int!){
  delete_countries(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_COUNTRY = gql `
  mutation update_countries($id: Int!){
  update_countries(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Country'
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
   async deleteCountry(country){
    await this.$apollo.mutate({
        mutation: DELETE_COUNTRY,
        variables: {
          id: country.id
        },
        refetchQueries: [
          {
            query: allCountries
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/countries'})
            }).catch(err => console.log(err));
    },
    async updateCountry(country){
    await this.$apollo.mutate({
        mutation: UPDATE_COUNTRY,
        variables: {
          id: country.id
        },
        refetchQueries: [
          {
            query: allCountries
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    countries: {
      query: countries,
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