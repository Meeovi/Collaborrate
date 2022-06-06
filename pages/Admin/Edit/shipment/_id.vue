<template>
    <div>
        <FormulateForm v-for="shipment in shipments" :key="shipment.id" method="POST" @submit.prevent>
        <div class="table table-responsive">
            <table class="table" >
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th scope="col" class="shipmentsAddOptions">
                            <li><FormulateInput type="submit" @click="addShipment" label="Save" /></li>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: right;">Carrier Name</td>
                        <td><FormulateInput id="shipmentsName" type="shipmentsName" required />{{ shipment.carrier_name }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Transit Time</td>
                        <td><FormulateInput id="shipmentsTime" type="shipmentsTime" required />{{ shipment.transit_time }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Speed grade</td>
                        <td><FormulateInput id="shipmentsSpeed" type="text" />{{ shipment.speed_grade }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Tracking URL</td>
                        <td><FormulateInput id="shipmentsTracking" type="text" />{{ shipment.tracking_url }}</td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Logo</td>
                        <td>
                            <td><FormulateInput type="image" upload-url="/media" name="headshot" label="Select an image to upload" help="Select a png, jpg or gif to upload." validation="mime:image/jpeg,image/png,image/gif"/>{{ shipment.image }}</td>
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
import shipments from '~/apollo/mutations/sales/shipments'
import allShipments from '~/apollo/queries/sales/shipments'

const DELETE_SHIPMENT = gql `
  mutation delete_shipments($id: Int!){
  delete_shipments(where: {id: {_eq: $id}}){
    affected_rows
  }
}
`;

const UPDATE_SHIPMENT = gql `
  mutation update_shipments($id: Int!){
  update_shipments(where: {id: {_eq: $id}}){
    affected_rows
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
            query: allShipments
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../admin/sales/shipments'})
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
            query: allShipments
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    shipments: {
      query: shipments,
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