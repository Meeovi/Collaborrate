<template>
    <div>
        <FormulateForm v-for="city in cities" :key="city.id"  method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="cityAddOptions">
                            <li><FormulateInput type="submit" label="Save" @click="addCity" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">City Name</td>
                        <td><FormulateInput id="cityName" type="cityName" required />{{ city.name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">State</td>
                        <td><FormulateInput id="cityName" type="cityName" required />{{ city.state }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Country</td>
                        <td><FormulateInput id="cityName" type="cityName" required />{{ city.country }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Postal Code</td>
                        <td><FormulateInput id="cityName" type="cityName" required />{{ city.postalCode }}</td>
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
  id="tagDesc" type="textarea" name="tagDesc" cols="80" rows="10" />{{ city.description }}
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
import cities from '~/apollo/mutations/shop/cities'
import allCities from '~/apollo/queries/shop/cities'

const DELETE_CITY = gql `
  mutation delete_cities($id: Int!){
  delete_cities(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_CITY = gql `
  mutation update_cities($id: Int!){
  update_cities(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit City'
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
   async deleteCity(city){
    await this.$apollo.mutate({
        mutation: DELETE_CITY,
        variables: {
          id: city.id
        },
        refetchQueries: [
          {
            query: allCities
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/shop/cities'})
            }).catch(err => console.log(err));
    },
    async updateCity(city){
    await this.$apollo.mutate({
        mutation: UPDATE_CITY,
        variables: {
          id: city.id
        },
        refetchQueries: [
          {
            query: allCities
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    cities: {
      query: cities,
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