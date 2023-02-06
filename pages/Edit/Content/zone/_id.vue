<template>
  <div>
    <form enctype="multipart/form-data"  v-for="zone in findManyZones" :key="zone.id" @submit.prevent="updateZone(zone)">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteZone(zone)">Delete</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" hint="Save Zone" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Zone</a>
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
                      <td style="text-align: right;">Code</td>
                      <td>
                        <input type="text" :hint="zone.code" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Type</td>
                      <td>
                        <select name="zoneType" id="zoneType" v-model="type">
                          <option value="country">Country</option>
                          <option value="province">Province</option>
                          <option value="zone">Zone</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Name</td>
                      <td>
                        <input type="text" :hint="zone.name" required />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Scope</td>
                      <td>
                        <select name="scope" id="scope" v-model="scope">
                          <option value="checklist">Shipping</option>
                          <option value="roadmap">Tax</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Country</td>
                      <td>
                        <select id="category" v-model="country" name="template" class="form-category">
                          <option v-for="country in findManyCountries" :key="country" :hint="country">
                            {{ country.name }}</option>
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
  import gql from "graphql-tag";
  import findManyZones from "../../graphql/query/findManyZones"
  import findManyCountries from "../../graphql/query/findManyCountries"

  const UPDATE_ZONE = gql`
    mutation ($code:String!,$name:String!$type:String!,$scope:String!,$country:String!){
    updateOneZones(data: {code: $code, name: $name, type: $type, scope: $scope, country: $country} where: {id: $id}) {
        code
        name
        type
        scope
        country
  }
}`;

  const DELETE_ZONE = gql`
  mutation updateOneZones($id: Int){
  updateOneZones(where: {id: $id}){
    code
    name
    type
    scope
    country
  }
}
`;

  export default {
    head: {
      name: 'Edit Zone'
    },
    mounted() {
      this.forceRerender();
    },
    // eslint-disable-next-line vue/order-in-components
    data() {
      return {
        componentKey: 0
      }
    },
    methods: {
      async deleteZone(zone) {
        await this.$apollo.mutate({
          mutation: DELETE_ZONE,
          variables: {
            id: zone.id
          },
          refetchQueries: [{
              query: findManyZones
            }

          ]
        }).then(() => {
          this.$router.push({
            path: '../../system/general-settings'
          })
        }).catch(err => console.log(err));
      },
      async updateZone(zone) {
        await this.$apollo.mutate({
          mutation: UPDATE_ZONE,
          variables: {
            id: zone.id
          },
          refetchQueries: [{
              query: findManyZones
            }

          ]
        })
      },
      forceRerender() {
        this.componentKey += 1;
      }
    },
    apollo: {
      findManyZones: {
        query: findManyZones,
        prefetch: ({
          route
        }) => ({
          id: route.params.id
        }),
        variables() {
          return {
            id: this.$route.params.id
          }
        }
      },
      findManyCountries: {
        prefetch: true,
        query: findManyCountries
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
