<template>
    <div>
        <form enctype="multipart/form-data"  v-for="shipment in findManyShipments" :key="shipment.id" @submit.prevent="updateShipment(shipment)">

<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand">
      <button type="reset" class="btn btn-warning" @click="deleteShipment(shipment)">Delete</button></a>
    <a class="navbar-brand">

      <input type="submit" class="btn btn-warning" hint="Save Shipment" /></a>
  </div>
</nav>
<br>
<div class="row">
  <div class="col-3">
    <!-- Tab navs -->
    <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
      <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
        aria-controls="v-tabs-home" aria-selected="true">Edit Shipment</a>
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
                <td style="text-align: right;">Carrier Name</td>
                <td><input id="shipmentsName" :hint="shipment.carrier_name" type="text" required /></td>
              </tr>
              <tr>
                <td style="text-align: right;">Transit Time</td>
                <td><input id="shipmentsTime" :hint="shipment.transit_time" type="number" required /></td>
              </tr>
              <tr>
                <td style="text-align: right;">Speed grade</td>
                <td><input id="shipmentsSpeed" :hint="shipment.speed_grade" type="number" /></td>
              </tr>
              <tr>
                <td style="text-align: right;">Tracking URL</td>
                <td><input id="shipmentsTracking" :hint="shipment.tracking_url" type="url" /></td>
              </tr>
              <tr>
                <td style="text-align: right;">Logo</td>
                <td>
                  <input type="image" :hint="shipment.image" />
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
import findManyShipments from "../../graphql/query/findManyShipments";

const UPDATE_SHIPMENT = gql`
mutation ($carrier_name:String!,$transit_time:String!,$image:String!,$tracking_url:String!,$speed_grade:String!,$product:String!){
updateOneShipments(data: {carrier_name: $carrier_name, transit_time: $transit_time, image: $image, tracking_url: $tracking_url, product: $product, speed_grade: $speed_grade} where: {id: $id}) {
  carrier_name
  transit_time
  image
  tracking_url
  speed_grade
  product
}
}`;

const DELETE_SHIPMENT = gql`
  mutation deleteOneShipments($id: Int!){
  deleteOneShipments(where: {id: $id}){
    carrier_name
  transit_time
  image
  tracking_url
  speed_grade
  product
  }
}
`;

export default {
    head: {
        name: 'Edit Shipment'
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
   async deleteShipment(shipment){
    await this.$apollo.mutate({
        mutation: DELETE_SHIPMENT,
        variables: {
          id: shipment.id
        },
        refetchQueries: [
          {
            query: findManyShipments
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../inventory/shipments'})
            }).catch(err => console.log(err));
    },
    async updateShipment(shipment){
    await this.$apollo.mutate({
        mutation: UPDATE_SHIPMENT,
        variables: {
          id: shipment.id
        },
        refetchQueries: [
          {
            query: findManyShipments
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyShipments: {
      query: findManyShipments,
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