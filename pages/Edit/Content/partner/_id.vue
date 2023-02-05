<template>
    <div>
        <form enctype="multipart/form-data"  v-for="partner in findManyPartners" :key="partner.id" @submit.prevent="updatePartner(partner)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deletePartner(partner)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Partner" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Partner</a>
          </div>
          <!-- Tab navs -->
        </div>

        <div class="col-9">
          <div id="v-tabs-tabContent" class="tab-scope">
            <div id="v-tabs-home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="v-tabs-home-tab">
              <div class="table table-responsive">
                <v-table class="table">
                  <tbody>
                    <tr>
                      <td style="text-align: right;">Partner Name</td>
                      <td>
                        <input :hint="partner.name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Address</td>
                      <td>
                        <input :hint="partner.address" type="text" name="tax" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">City</td>
                      <td>
                        <select id="city" :hint="partner.city" name="template" class="form-category">
                          <option v-for="city in findManyCities" :key="city.id" :hint="city">{{ city.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">State</td>
                      <td>
                        <select id="states" :hint="partner.states" name="template" class="form-category">
                          <option v-for="states in findManyStates" :key="states.id" :hint="states">{{ states.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="countries" :hint="partner.countries" name="template" class="form-category">
                          <option v-for="countries in findManyCountries" :key="countries.id" :hint="countries">
                            {{ countries.name }}
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Business Type</td>
                      <td>
                        <select id="businessType" :hint="partner.business_type" name="template" class="form-category">
                          <option value="digital">Digital</option>
                          <option value="physical">Has Physical Location</option>
                          <option value="digitalPhysical">Digital & Physical Location</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Is the Partner Public?</td>
                      <td>
                        <select id="status" :hint="partner.isPublic" name="template" class="form-category">
                          <option value="public">Public</option>
                          <option value="private">Not Public</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
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
  import gql from "graphql-tag";
  import findManyPartners from "../../graphql/query/findManyPartners";
  import findManyStates from '../../graphql/query/findManyStates'
  import findManyCountries from '../../graphql/query/findManyCountries'
  import findManyCities from '../../graphql/query/findManyCities'

  const UPDATE_PARTNER = gql `
    mutation ($name:String!,$city:String!,$isPublic:String!,$state:String!,$country:String!,$business_type:String!,$address:String!){
    updateOnePartners(data: {name: $name, city: $city, state: $state, isPublic: $isPublic, country: $country, business_type: $business_type, address: $address} where: {id: $id}) {
        state
        name
        city
        isPublic
        country
        business_type
        address
  }
}`;

const DELETE_PARTNER = gql`
  mutation deleteOnePartners($id: Int!){
  deleteOnePartners(where: {id: $id}){
    state
        name
        city
        isPublic
        country
        business_type
        address
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
            query: findManyPartners
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../inventory/partners'})
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
            query: findManyPartners
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyPartners: {
      query: findManyPartners,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    findManyStates: {
        prefetch: true,
        query: findManyStates
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
      },
      findManyCities: {
        prefetch: true,
        query: findManyCities
      },
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