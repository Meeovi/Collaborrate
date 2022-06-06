<template>
  <div>
    <FormulateForm v-for="zone in zones" :key="zone.id" method="POST" enctype="multipart/form-data" @submit.prevent>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <FormulateInput type="reset" class="btn btn-warning" label="Reset" /></a>
          <a class="navbar-brand">
            <FormulateInput type="button" label="Save Zone" @click="addZone" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Create A New Zone</a>
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
                      <td style="text-align: right;">Code</td>
                      <td>
                        <FormulateInput v-model="code" type="text" required label="Example would be US, WORLD, etc." />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Type</td>
                      <td>
                        <FormulateInput v-model="type" type="text" required :options="{first: 'Country', second: 'Province', third: 'Zone'}" label="What type of zone is this?" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name</td>
                      <td>
                        <FormulateInput v-model="name" type="text" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Scope</td>
                      <td>
                        <FormulateInput v-model="scope" type="select" label="What is this zone used for?"
                          :options="{first: 'Shipping', second: 'Tax'}" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="category" v-model="country" name="template" class="form-category">
                          <option v-for="country in country" :key="country" :value="country">{{ country.name }}</option>
                        </select>
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
/* eslint-disable camelcase */
import gql from 'graphql-tag'
import zones from '~/apollo/mutations/system/zones'
import allZones from '~/apollo/queries/system/zones'
import country from "~/apollo/queries/shop/countries"

const DELETE_ZONE = gql `
  mutation delete_zones($id: Int!){
  delete_zones(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_ZONE = gql `
  mutation update_zones($id: Int!){
  update_zones(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Zone'
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
   async deleteZone(zone){
    await this.$apollo.mutate({
        mutation: DELETE_ZONE,
        variables: {
          id: zone.id
        },
        refetchQueries: [
          {
            query: allZones
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/system/zones'})
            }).catch(err => console.log(err));
    },
    async updateZone(zone){
    await this.$apollo.mutate({
        mutation: UPDATE_ZONE,
        variables: {
          id: zone.id
        },
        refetchQueries: [
          {
            query: allZones
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    zones: {
      query: zones,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    },
    country: {
        prefetch: true,
        query: country
      }
  },
}
</script>

<style>
  input,
  select,
  option {
    padding: 5px;
  }

</style>
