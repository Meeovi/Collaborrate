<template>

  <div>
    <form enctype="multipart/form-data"  @submit.prevent="addShipment()">

      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning" @click="deleteAgreement(agreement)">Delete</button></a>
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
              aria-controls="v-tabs-home" aria-selected="true">Create A New Shipment</a>
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
                      <td><input id="shipmentsName" v-model="carrier_name" type="text" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Transit Time</td>
                      <td><input id="shipmentsTime" v-model="transit_time" type="number" required /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Speed grade</td>
                      <td><input id="shipmentsSpeed" v-model="speed_grade" type="number" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Tracking URL</td>
                      <td><input id="shipmentsTracking" v-model="tracking_url" type="url" /></td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Logo</td>
                      <td>
                        <input type="image" v-model="image" />
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

  const ADD_SHIPMENTS = gql`
    mutation ($carrier_name:String!,$transit_time:String!,$image:String!,$tracking_url:String!,$speed_grade:String!,$product:String!){
    createOneShipments(data: {carrier_name: $carrier_name, transit_time: $transit_time, image: $image, tracking_url: $tracking_url, product: $product, speed_grade: $speed_grade}) {
        carrier_name
        transit_time
        image
        tracking_url
        speed_grade
        product
  }
}`;

  export default {
    data() {
      return {
        carrier_name: " ",
        transit_time: " ",
        image: " ",
        tracking_url: " ",
        speed_grade: " ",
        product: " ",

      }
    },
    head: {
      title: 'Add New Shipment'
    },
    /* eslint-disable camelcase */
    methods: {
      async addShipment() {
        const carrier_name = this.carrier_name;
        const transit_time = this.transit_time;
        const image = this.image;
        const tracking_url = this.tracking_url;
        const speed_grade = this.speed_grade;
        const product = this.product;
        await this.$apollo.mutate({
          mutation: ADD_SHIPMENTS,
          variables: {
            carrier_name,
            transit_time,
            image,
            tracking_url,
            speed_grade,
            product,
          },
          update: (cache, {
            data: {
              insertShipments
            }
          }) => {
            // Read data from cache for this query
            try {
              const insertedShipment = insertShipments.returning;
              console.log(insertedShipment)
              cache.writeQuery({
                query: findManyShipments
              })
            } catch (err) {
              console.error(err)
            }
          }
        }).then(() => {
          this.$router.push({
            path: '../../../marketing/shipments'
          })
        }).catch(err => console.log(err));
        this.carrier_name = ' ';
        this.transit_time = ' ';
        this.image = ' ';
        this.tracking_url = ' ';
        this.speed_grade = ' ';
        this.product = ' ';
      },
    },
  }

</script>

<style>

</style>
