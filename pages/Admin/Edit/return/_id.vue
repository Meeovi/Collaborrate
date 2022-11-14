<template>
    <div>
        <form v-for="returns in findManyReturns" :key="returns.id" @submit.prevent="addReturn">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">
            <button type="reset" class="btn btn-warning">Reset</button></a>
          <a class="navbar-brand">
            <input type="submit" class="btn btn-warning" value="Save Return" /></a>
        </div>
      </nav>
      <br>
      <div class="row">
        <div class="col-3">
          <!-- Tab navs -->
          <div id="v-tabs-tab" class="nav flex-column nav-tabs text-center" role="tablist" aria-orientation="vertical">
            <a id="v-tabs-home-tab" class="nav-link active" data-mdb-toggle="tab" href="#v-tabs-home" role="tab"
              aria-controls="v-tabs-home" aria-selected="true">Edit Return</a>
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
                      <td style="text-align: right;"></td>
                      <td>
                        <p>Use this form to create eWaste (For damaged recycleable products), Return Merchandise
                          Authorization (RMA), and Liquidations (For damaged products)</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Returns Type</td>
                      <td>
                        <select id="returnType" :value="returns.type">
                          <option value="equipmentReturn">Product Return</option>
                          <option value="rma">Return Merchandise Authorization (RMA)</option>
                          <option value="liquidations">Liquidations</option>
                          <option value="ewaste">eWaste</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Returns Status</td>
                      <td>
                        <select id="returnStatus" :value="returns.status">
                          <option value="equipmentReturn">Draft</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Returns Name</td>
                      <td>
                        <input id="returnsName" :value="returns.name" type="text" required />
                        <p for="name">Name of the return</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Time limit of validity</td>
                      <td>
                        <input id="returnsName" :value="returns.validity" type="number" required />
                        <p for="validity">How many days can a customer return a product?</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Returns prefix</td>
                      <td>
                        <input id="returnsName" :value="returns.return_prefix" type="text" required />
                        <p for="returnsPrefix">Prefix used for returns name (e.g. RE00001).</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Height</td>
                      <td>
                        <input id="returnsHeight" :value="returns.height" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">Weight</td>
                      <td>
                        <input id="returnsWeight" :value="returns.weight" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">External Case ID</td>
                      <td>
                        <input id="returnsWeight" :value="returns.case_id" type="number" />
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: right;">From Location</td>
                      <td>
                        <input id="returnsLocation" :value="returns.location" type="text" />
                      </td>
                    </tr>
                  </tbody>
                  </table>
                    </div>
            </div>
                    <br><br>
                    <div id="accordionExample" class="accordion">
                      <div class="accordion-item">
                        <h2 id="headingOne" class="accordion-header">
                          <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Shippings
                          </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                          data-mdb-parent="#accordionExample">
                          <div class="accordion-body">
                            <div class="table table-responsive">
                              <table class="table">
                                <tbody>
                                  <tr>
                                    <td style="text-align: right;">Shipping Number</td>
                                    <td>
                                      <input id="shippingNumber" :value="returns.shippingNumber" type="number" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: right;">Shipping Description</td>
                                    <td>
                                      <input id="shippingDescription" :value="returns.shippingDescription" type="text" /><br><br>
                                      <input type="submit" class="btn btn-primary fas fa-plus" value="Add Shipping" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: right;">Ship To Address</td>
                                    <td>
                                      <input id="returnsWeight" :value="returns.shipTo" type="text" />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <h2 id="headingThree" class="accordion-header">
                          <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                            data-mdb-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Images and Videos
                          </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                          data-mdb-parent="#accordionExample">
                          <div class="accordion-body">
                            <td>
                              <div class="media-upload-wrapper">
                                <input type="media" id="input-media-now" class="media-upload-input"
                                  data-mdb-media-upload="media-upload" data-mdb-accepted-extensions="link/*" />
                              </div>
                            </td>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 id="headingFive" class="accordion-header">
                            <button class="accordion-button" type="button" data-mdb-toggle="collapse"
                              data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              Add Liquidations
                            </button>
                          </h2>
                          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                            data-mdb-parent="#accordionExample">
                            <div class="accordion-body">
                              <tr class="col-lg-6">
                                <td>
                                  <label for="products">Products</label><br>
                                  <select id="products" :value="returns.products">
                                    <option v-for="products in findManyProducts" :key="products.id" :value="products">
                                      {{ products.name }}</option>
                                  </select>
                                </td>
                              </tr>
                            </div>
                          </div>
                        </div>
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
  import findManyReturns from "~/graphql/query/findManyReturns";
  import findManyProducts from "~/graphql/query/findManyProducts";

  const DELETE_RETURN = gql`
    mutation ($name:String!,$validity:String!,$return_prefix:String!, $description:String!, $shippingNumber:String!, $shippingDescription:String!, $status:String!, $liquidationReason:String!, $media:String!, $weight:String!, $height:String!, $howShipped:String!, $type:String!, $location:String!, $shipTo:String!, $products:String!, $case_id:String!){
    createOneReturns(data: {name: $name, validity: $validity, return_prefix: $return_prefix, description: $description, shippingNumber: $shippingNumber, shippingDescription: $shippingDescription, status: $status, liquidationReason: $liquidationReason, media: $media, weight: $weight, height: $height, howShipped: $howShipped, type: $type, location: $location, shipTo: $shipTo, products: $products, case_id: $case_id}) {
        name
        validity
        return_prefix
        howShipped
        description
        shippingNumber
        shippingDescription
        status
        liquidationReason
        media
        height
        weight
        type
        products
        location
        shipTo
        case_id
  }
}`;

const UPDATE_RETURN = gql`
  mutation updateOnereturns($id: Int!){
  updateOneReturns(where: {id: $id}){
    affected_rows
  }
}
`;

export default {
    head: {
        name: 'Edit Return'
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
   async deleteReturn(returns){
    await this.$apollo.mutate({
        mutation: DELETE_RETURN,
        variables: {
          id: returns.id
        },
        refetchQueries: [
          {
            query: returns
          }       
          
        ]
      }).then(() => {
            this.$router.push({path: '../../admin/sales/returns'})
            }).catch(err => console.log(err));
    },
    async updateReturn(returns){
    await this.$apollo.mutate({
        mutation: UPDATE_RETURN,
        variables: {
          id: returns.id
        },
        refetchQueries: [
          {
            query: findManyReturns
          }       
          
        ]
      })
    },
    forceRerender() {
      this.componentKey += 1;  
    }
  },
  apollo: {
    findManyReturns: {
      query: findManyReturns,
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